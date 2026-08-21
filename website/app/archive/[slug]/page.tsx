import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { archivePages } from "../archive-content";

export function generateStaticParams() {
  return archivePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = archivePages.find((entry) => entry.slug === slug);
  return page ? { title: `${page.title} | St. Anne's Archive`, description: page.excerpt } : {};
}

export default async function ArchivedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = archivePages.find((entry) => entry.slug === slug);
  if (!page) notFound();

  return <>
    <header className="header archiveHeader">
      <a className="brand" href="/"><span className="cross">✦</span><span>St. Anne&apos;s<small>Episcopal Church · Fremont</small></span></a>
      <nav aria-label="Archive navigation"><a href="/">Current website</a><a href="/archive">Archive index</a></nav>
    </header>
    <main className="archiveArticle">
      <div className="archiveNotice"><b>Archived page</b><span>This content came from the former WordPress site and may be out of date.</span><a href="/archive">View all archived pages</a></div>
      <article>
        <p className="eyebrow">WordPress archive · {page.published || "Historic"}</p>
        <h1>{page.title}</h1>
        <div className="legacyContent" dangerouslySetInnerHTML={{ __html: page.html }} />
      </article>
    </main>
  </>;
}
