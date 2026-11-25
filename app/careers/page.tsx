import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { SiteShell, PageHero, SectionHeading } from '../site-shell';
import { COMPANY, JOBS, PERKS, VALUES } from '../site-content';
import Roles from './roles';

export const metadata: Metadata = { title: 'Careers — VaPicha', description: 'Join the team building lending and banking software for Nigerian financial institutions.' };

export default function CareersPage() {
 return <SiteShell>
  <PageHero eyebrow="CAREERS" title="Build the infrastructure" accent="of Nigerian lending." text="Join engineers, lenders and implementers who care about getting money and data exactly right — and making financial services work for everyone."/>

  <section className="page-section"><div className="container about-grid">
   <div className="page-copy"><SectionHeading eyebrow="LIFE AT VAPICHA" title="Serious work," accent="done by people who enjoy it."/>
    <p>Our software moves real money for real people, so we hold ourselves to high standards of precision and security. We also believe great work comes from small, trusted teams with room to learn — so that’s how we’re organised.</p>
    <ul className="perks">{PERKS.map(p=><li key={p}><Sparkles size={15}/>{p}</li>)}</ul>
   </div>
   <div className="page-grid g2">{VALUES.map(v=><div key={v.title} className="page-card"><span className="page-icon"><v.icon size={20}/></span><h3>{v.title}</h3><p>{v.text}</p></div>)}</div>
  </div></section>

  <section className="page-section alt" id="roles"><div className="container">
   <SectionHeading eyebrow="OPEN ROLES" title={`${JOBS.length} positions open.`}/>
   <Roles/>
   <p className="page-note">Don’t see your role? Send a speculative application to <a href={'mailto:'+COMPANY.email}>{COMPANY.email}</a>. VaPicha is an equal-opportunity employer.</p>
  </div></section>
 </SiteShell>;
}
