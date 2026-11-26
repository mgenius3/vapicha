import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { SiteShell, PageHero, SectionHeading, CtaBand } from '../site-shell';
import { ADVANTAGES, IMPLEMENTATION, SEGMENTS, SOLUTIONS } from '../site-content';

export const metadata: Metadata = { title: 'Solutions — VaPicha', description: 'Eight connected solution areas on one ledger: core banking, branch operations, lending, digital channels, payments, compliance, HR and analytics.' };

export default function SolutionsPage() {
 return <SiteShell>
  <PageHero eyebrow="SOLUTIONS" title="One platform." accent="Every part of your institution." text="Eight connected solution areas sharing one real-time ledger, one security model and one audit trail. Switch on what you need today and grow into the rest.">
   <div className="page-hero-links">{SOLUTIONS.map(s=><a key={s.id} href={'#'+s.id}>{s.title}</a>)}</div>
  </PageHero>

  <section className="page-section"><div className="container solution-list">
   {SOLUTIONS.map((s,i)=><article key={s.id} id={s.id} className="solution-card"><span className="page-icon"><s.icon size={26}/></span><div><span className="page-number">0{i+1}</span><h2>{s.title}</h2><p>{s.summary}</p></div><ul className="page-checks">{s.points.map(p=><li key={p}><Check size={15}/>{p}</li>)}</ul></article>)}
  </div></section>

  <section className="page-section alt"><div className="container">
   <SectionHeading eyebrow="WHY VAPICHA" title="A modern, connected core." accent="Built for how you work." text="Your team spends its time serving customers — not reconciling systems."/>
   <div className="page-grid g3">{ADVANTAGES.map(a=><div key={a.title} className="page-card"><span className="page-icon"><a.icon size={22}/></span><h3>{a.title}</h3><p>{a.text}</p></div>)}</div>
  </div></section>

  <section className="page-section"><div className="container">
   <SectionHeading eyebrow="IMPLEMENTATION" title="A clear path" accent="from contract to go-live." text="We configure, migrate and train while your staff keep serving customers." center/>
   <div className="page-grid g4">{IMPLEMENTATION.map((s,i)=><div key={s.title} className="page-card step-card"><span className="step-index">{i+1}</span><span className="page-icon"><s.icon size={22}/></span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
  </div></section>

  <section className="page-section alt"><div className="container">
   <SectionHeading eyebrow="WHO WE SERVE" title="Designed for the institutions" accent="that power inclusion." center/>
   <div className="page-grid g4">{SEGMENTS.map(s=><div key={s.title} className="segment"><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
   <div className="page-inline-cta"><p>Plans are priced in naira, starting with Base at ₦250,000 per month.</p><Link className="button" href="/pricing">See our plans <ArrowUpRight size={16}/></Link></div>
  </div></section>
  {/* "The next chapter of your lending starts here." call-to-action, hidden for now. To show it again, replace this comment with <CtaBand/> */}
 </SiteShell>;
}
