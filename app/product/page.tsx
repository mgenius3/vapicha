import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import { SiteShell, PageHero, SectionHeading, CtaBand, Eyebrow } from '../site-shell';
import { FEATURES, SECURITY } from '../site-content';
import { Screen } from '../screens';

export const metadata: Metadata = { title: 'Product tour — VaPicha', description: 'A walk through the VaPicha screens your tellers, credit officers, finance team, compliance officers and customers use every day.' };

export default function ProductPage() {
 return <SiteShell>
  <PageHero eyebrow="PRODUCT TOUR" title="Inside VaPicha." accent="One clear workspace." text="A walk through the screens your tellers, credit officers, finance team, compliance officers and customers use every day."/>
  <nav className="product-subnav" aria-label="Product sections"><div className="container">{FEATURES.map(f=><a key={f.id} href={'#'+f.id}>{f.eyebrow}</a>)}</div></nav>

  {FEATURES.map((f,i)=><section key={f.id} id={f.id} className={'page-section feature-row'+(i%2?' alt flip':'')}><div className="container feature-grid">
   <div className="feature-copy"><Eyebrow>{f.eyebrow.toUpperCase()}</Eyebrow><h2>{f.title}</h2><p>{f.text}</p><ul className="page-checks">{f.points.map(p=><li key={p}><Check size={15}/>{p}</li>)}</ul></div>
   <figure className="feature-shot"><Screen name={f.shot}/><figcaption>Illustrative screen · sample data</figcaption></figure>
  </div></section>)}

  <section className="page-section"><div className="container">
   <SectionHeading eyebrow="SECURITY & INTEGRATIONS" title="Controls your board" accent="and regulator will appreciate." center/>
   <div className="page-grid g3">{SECURITY.map(s=><div key={s.title} className="page-card row"><span className="page-icon"><s.icon size={22}/></span><div><h3>{s.title}</h3><p>{s.text}</p></div></div>)}</div>
  </div></section>
  {/* "See it working for your institution." call-to-action, hidden for now. To show it again, replace this comment with:
      <CtaBand title="See it working for your institution." text="Book a demo and we’ll walk you through VaPicha with your own products and workflows in mind."/> */}
 </SiteShell>;
}
