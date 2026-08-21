import type { Metadata } from "next";
import { archivePages } from "./archive-content";

export const metadata: Metadata = {
  title: "WordPress Archive | St. Anne's Episcopal Church",
  description: "Historic pages imported from the former St. Anne's Episcopal Church WordPress website.",
};

export default function ArchiveIndex() {
  return <>
    <header className="header archiveHeader">
      <a className="brand" href="/"><span className="cross">✦</span><span>St. Anne&apos;s<small>Episcopal Church · Fremont</small></span></a>
      <nav aria-label="Archive navigation"><a href="/">Current website</a><a href="/#worship">Worship</a><a href="/#visit">Visit</a></nav>
    </header>
    <main className="archiveMain">
      <section className="archiveHero">
        <p className="eyebrow light">From our former website</p>
        <h1>WordPress Archive</h1>
        <p>Historic pages preserved from St. Anne&apos;s previous website. Dates, programs, people, and links may no longer be current.</p>
      </section>
      <section className="archiveIndex section" aria-labelledby="archive-pages-title">
        <div className="archiveIntro"><p className="eyebrow">Preserved content</p><h2 id="archive-pages-title">Explore the archive</h2><p>{archivePages.length} public pages were imported. The private page in the export remains unpublished.</p></div>
        <div className="archiveGrid">
          {archivePages.map((page) => <a className="archiveCard" key={page.slug} href={`/archive/${page.slug}`}><span>{page.published || "Archived"}</span><h3>{page.title}</h3><p>{page.excerpt || "View this archived page."}</p><b>Read page →</b></a>)}
        </div>
      </section>
    </main>
  </>;
}
