import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SiteShell, PageHero, SectionHeading, CtaBand, Eyebrow } from '../site-shell';
import { COMMITMENTS, COMPANY, MILESTONES, VALUES } from '../site-content';

export const metadata: Metadata = { title: 'About us — VaPicha', description: 'VaPicha gives Nigerian microfinance banks, cooperatives and lenders modern, connected banking and lending software. A product of Inclusive Village Ltd.' };

export default function AboutPage() {
 return <SiteShell>
  <PageHero eyebrow="ABOUT US" title="We build the systems" accent="Nigeria’s lenders run on." text="VaPicha exists to give every microfinance bank, cooperative and lender the same quality of technology as the largest institutions — at a price that makes sense. VaPicha is a product of Inclusive Village Ltd."/>

  <section className="page-section"><div className="container about-grid">
   <div className="page-copy"><SectionHeading eyebrow="OUR STORY" title="Lenders and engineers," accent="side by side."/>
    <p>VaPicha was started by people who had seen Nigerian lenders up close — reconciling tills at midnight, compiling returns from spreadsheets and juggling paper files. Institutions serving millions of Nigerians deserve better tools.</p>
    <p>So we built a platform where every function shares one ledger, every sensitive action has a second pair of eyes, and new capabilities arrive without a server in sight. Today VaPicha covers lending, core banking, payments, digital channels, compliance and HR in one place.</p>
   </div>
   <div className="about-cards">
    <div className="mission-card"><Eyebrow>OUR MISSION</Eyebrow><p>To power financial inclusion by giving every Nigerian financial institution world-class lending and banking infrastructure.</p></div>
    <div className="page-card"><Eyebrow>VISION</Eyebrow><p>The most trusted lending and banking technology partner in West Africa.</p></div>
    <div className="page-card"><Eyebrow>HEADQUARTERS</Eyebrow><p>{COMPANY.address}</p></div>
   </div>
  </div></section>

  <section className="page-section alt"><div className="container">
   <SectionHeading eyebrow="OUR VALUES" title="What we stand for." center/>
   <div className="page-grid g4">{VALUES.map(v=><div key={v.title} className="page-card"><span className="page-icon"><v.icon size={22}/></span><h3>{v.title}</h3><p>{v.text}</p></div>)}</div>
  </div></section>

  <section className="page-section"><div className="container journey-grid">
   <SectionHeading eyebrow="OUR JOURNEY" title="Building, one capability" accent="at a time."/>
   <ol className="timeline">{MILESTONES.map(m=><li key={m.year}><h3>{m.year}</h3><p>{m.text}</p></li>)}</ol>
  </div></section>

  <section className="page-section alt"><div className="container">
   <div className="page-grid g3">{COMMITMENTS.map(c=><div key={c.title} className="page-card"><span className="page-icon"><c.icon size={22}/></span><h3>{c.title}</h3><p>{c.text}</p></div>)}</div>
   <div className="page-inline-cta"><p>Want to work with us?</p><Link className="text-link" href="/careers">See careers at VaPicha <ArrowUpRight size={16}/></Link></div>
  </div></section>
  <CtaBand title="Let’s build your institution’s future together."/>
 </SiteShell>;
}
