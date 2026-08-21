#!/usr/bin/env python3
"""Convert the WordPress WXR export into a typed, read-only site archive."""

from __future__ import annotations

import html
import json
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

WP = "http://wordpress.org/export/1.2/"
CONTENT = "http://purl.org/rss/1.0/modules/content/"
NS = {"wp": WP, "content": CONTENT}


def clean_markup(markup: str, public_slugs: set[str]) -> str:
    """Keep useful WordPress HTML while removing executable legacy markup."""
    markup = re.sub(r"<(script|object|embed|form)\b[^>]*>.*?</\1>", "", markup, flags=re.I | re.S)
    markup = re.sub(r"\son[a-z]+\s*=\s*([\"']).*?\1", "", markup, flags=re.I | re.S)
    markup = re.sub(r"\s(href|src)\s*=\s*([\"'])javascript:.*?\2", "", markup, flags=re.I | re.S)
    for slug in sorted(public_slugs, key=len, reverse=True):
        markup = re.sub(
            rf"https?://(?:www\.)?stanneschurch\.org/{re.escape(slug)}/?",
            f"/archive/{slug}",
            markup,
            flags=re.I,
        )
    return markup.strip()


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("usage: import-wordpress.py INPUT.xml OUTPUT.ts")

    source, destination = map(Path, sys.argv[1:])
    root = ET.parse(source).getroot()
    items = root.findall("./channel/item")
    public_slugs = {
        item.findtext("wp:post_name", "", NS)
        for item in items
        if item.findtext("wp:post_type", "", NS) == "page"
        and item.findtext("wp:status", "", NS) == "publish"
    }

    pages = []
    for item in items:
        if item.findtext("wp:post_type", "", NS) != "page":
            continue
        if item.findtext("wp:status", "", NS) != "publish":
            continue

        title = html.unescape(item.findtext("title", "")).strip()
        slug = item.findtext("wp:post_name", "", NS).strip()
        raw = item.findtext("content:encoded", "", NS) or ""
        excerpt = re.sub(r"<[^>]+>", " ", raw)
        excerpt = html.unescape(re.sub(r"\s+", " ", excerpt)).strip()
        pages.append(
            {
                "slug": slug,
                "title": title,
                "published": item.findtext("wp:post_date", "", NS)[:10],
                "excerpt": excerpt[:220].rstrip() + ("…" if len(excerpt) > 220 else ""),
                "html": clean_markup(raw, public_slugs),
            }
        )

    pages.sort(key=lambda page: page["title"].casefold())
    payload = json.dumps(pages, ensure_ascii=False, indent=2)
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(
        "// Generated from the WordPress WXR export by scripts/import-wordpress.py.\n"
        "// Edit the source export or the importer, then regenerate this file.\n"
        f"export const archivePages = {payload} as const;\n",
        encoding="utf-8",
    )
    print(f"Imported {len(pages)} public pages into {destination}")


if __name__ == "__main__":
    main()
