import Image from "next/image";
import { siteContent as c } from "./site-content";

const Icon = ({ children }: { children: React.ReactNode }) => <span className="icon" aria-hidden="true">{children}</span>;

export default function Home() {
  return <>
    <header className="header">
      <a className="brand" href="#top"><span className="cross">✦</span><span>St. Anne&apos;s<small>Episcopal Church · Fremont</small></span></a>
      <nav aria-label="Main navigation">
        <a href="#welcome">Welcome</a><a href="#worship">Worship</a><a href="#life">Church life</a><a href="#visit">Visit</a>
      </nav>
      <a className="button small" href="#give">Give</a>
    </header>

    <main id="top">
      <section className="hero">
        <Image src="/church.jpg" alt="St. Anne's Episcopal Church surrounded by trees" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="heroContent">
          <p className="eyebrow light">An open door. An open heart.</p>
          <h1>There is a place<br />for you here.</h1>
          <p className="heroIntro">A welcoming Episcopal community finding joy in worship, friendship, and service in Fremont.</p>
          <div className="actions"><a className="button cream" href="#visit">Plan your visit</a><a className="textLink light" href={c.zoom} target="_blank" rel="noreferrer">Join Sunday on Zoom <span>↗</span></a></div>
        </div>
        <div className="serviceRibbon"><span><b>Sunday worship</b>Morning Prayer</span><span><b>10:00 AM</b>In person & online</span><span><b>2791 Driscoll Road</b>Fremont, California</span></div>
      </section>

      <section className="welcome section" id="welcome">
        <div><p className="eyebrow">Welcome to St. Anne&apos;s</p><h2>Come as you are.<br />Stay for the journey.</h2></div>
        <div className="welcomeCopy"><p>Whether church is familiar, brand new, or somewhere in between, you are welcome at St. Anne&apos;s. We are a diverse, multi-generational community rooted in the Episcopal tradition and growing together in love.</p><p>No special knowledge is needed. Our bulletin guides you through worship, and you may participate as much or as little as feels right.</p><a className="textLink" href="#visit">What to expect on Sunday <span>→</span></a></div>
      </section>

      <section className="worship section" id="worship">
        <div className="sectionHeading"><p className="eyebrow light">This Sunday</p><h2>Worship with us</h2><p>Beautiful music, scripture, prayer, and a community ready to welcome you.</p></div>
        <div className="serviceCard">
          <div className="dateBlock"><span>Every</span><b>Sun</b><small>10 AM</small></div>
          <div><p className="eyebrow">Morning Prayer</p><h3>{c.service.title}</h3><p>Join us in our sanctuary or from home. The service lasts about an hour.</p></div>
          <div className="serviceLinks"><a className="button" href={c.zoom} target="_blank" rel="noreferrer">Join on Zoom ↗</a><a href={c.bulletin} target="_blank" rel="noreferrer">Sunday bulletin ↗</a><a href={c.readings} target="_blank" rel="noreferrer">Weekly readings ↗</a></div>
        </div>
      </section>

      <section className="section" id="life">
        <div className="sectionHeading dark"><p className="eyebrow">Life at St. Anne&apos;s</p><h2>Many ways to belong</h2><p>Gather, learn, reflect, and serve alongside neighbors of every generation.</p></div>
        <div className="cards">
          {c.programs.map((p, i) => <article className="card" key={p.title}><span className="cardNo">0{i+1}</span><Icon>{p.icon}</Icon><h3>{p.title}</h3><p>{p.description}</p>{p.link && <a className="textLink" href={p.link.href}>{p.link.label} <span>→</span></a>}</article>)}
        </div>
      </section>

      <section className="visit section" id="visit">
        <div className="visitImage"><Image src="/sanctuary.jpg" alt="The warm stained glass interior of St. Anne's sanctuary" fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="visitCopy"><p className="eyebrow light">Your first Sunday</p><h2>We&apos;ll be glad to see you.</h2><div className="visitFacts"><p><b>When</b>Sundays at 10:00 AM</p><p><b>Where</b>2791 Driscoll Road<br />Fremont, CA 94539</p><p><b>What to wear</b>Whatever makes you comfortable.</p></div><a className="button cream" href="https://maps.google.com/?q=2791+Driscoll+Road+Fremont+CA+94539" target="_blank" rel="noreferrer">Get directions ↗</a></div>
      </section>

      <section className="give section" id="give"><div><p className="eyebrow">Generosity in action</p><h2>Help love take root.</h2></div><div><p>Your gifts sustain worship, care for our church home, and support ministries that serve our neighbors.</p><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"><input type="hidden" name="cmd" value="_donations"/><input type="hidden" name="business" value={c.email}/><input type="hidden" name="currency_code" value="USD"/><input type="hidden" name="item_name" value="St. Anne's Episcopal Church Donation"/><button className="button" type="submit">Give securely with PayPal ↗</button></form></div></section>
    </main>

    <footer><div className="footerLead"><span className="cross">✦</span><h2>All are welcome.</h2><p>Wherever you are on your spiritual journey.</p></div><div className="footerGrid"><div><b>St. Anne&apos;s Episcopal Church</b><p>2791 Driscoll Road<br/>Fremont, CA 94539</p></div><div><b>Connect</b><a href={`mailto:${c.email}`}>{c.email}</a><a href={`tel:${c.phone}`}>{c.phone}</a></div><div><b>Follow</b><a href={c.facebook} target="_blank" rel="noreferrer">Facebook ↗</a><a href={c.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div></div><div className="copyright">© {new Date().getFullYear()} St. Anne&apos;s Episcopal Church</div></footer>
  </>;
}
