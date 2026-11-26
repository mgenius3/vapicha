// Home page, based on the core banking website export's home (docs/core-banking-site-export/SiteHome.tsx).
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react';
import { SiteShell, SectionHeading, CtaBand, Eyebrow } from './site-shell';
import { ADVANTAGES, SEGMENTS, SOLUTIONS, STATS } from './site-content';
import { Screen } from './screens';
// import BankStrip from './bank-strip'; // hidden for now, see the comment in the page body

export default function Home() {
 return <SiteShell>
  <section className="page-hero home-hero"><div className="container home-hero-grid">
   <div>
    <Eyebrow>CORE BANKING · PAYMENTS · DIGITAL CHANNELS · HR</Eyebrow>
    <h1>Banking infrastructure worthy of the trust <span>your customers place in you.</span></h1>
    <p>VaPicha runs your entire institution — customers, accounts, lending, payments, compliance and people — on one secure, cloud platform built for Nigerian regulation.</p>
    <div className="home-actions"><Link className="button" href="/contact">Book a demo <ArrowUpRight size={18}/></Link><Link className="button button-ghost" href="/product">See the product</Link></div>
    <ul className="home-proof">{['CBN-ready returns & provisioning','Transaction 2FA & maker-checker','Live in days, not weeks','No servers to buy or maintain'].map(t=><li key={t}><CheckCircle2 size={15}/>{t}</li>)}</ul>
   </div>
   <div className="home-hero-shot"><Screen name="dashboard"/></div>
  </div></section>

  <section className="home-stats"><div className="container">{STATS.map(s=><div key={s.label}><b>{s.value}</b><span>{s.label}</span></div>)}</div></section>

  {/* Auto Direct Debit partner banks strip, hidden for now. To show it again, replace this comment with <BankStrip/> and restore the import above. */}

  <section className="page-section"><div className="container">
   <SectionHeading eyebrow="WHY VAPICHA" title="The advantages of a modern," accent="purpose-built core." text="We combined deep Nigerian banking know-how with modern engineering, so your team spends its time serving customers — not reconciling systems."/>
   <div className="page-grid g3">{ADVANTAGES.map(a=><div key={a.title} className="page-card"><span className="page-icon"><a.icon size={22}/></span><h3>{a.title}</h3><p>{a.text}</p></div>)}</div>
  </div></section>

  <section className="page-section alt" id="platform"><div className="container">
   <div className="home-heading-row"><SectionHeading eyebrow="SOLUTIONS" title="Everything your institution needs," accent="on one ledger."/><Link className="text-link" href="/solutions">All solutions <ArrowRight size={16}/></Link></div>
   <div className="page-grid g4">{SOLUTIONS.map(s=><Link key={s.id} href={`/solutions#${s.id}`} className="page-card solution-link"><span className="page-icon"><s.icon size={22}/></span><h3>{s.title}</h3><p>{s.summary}</p><span className="learn-more">Learn more <ArrowRight size={13}/></span></Link>)}</div>
  </div></section>

  <section className="page-section"><div className="container feature-grid">
   <figure className="feature-shot"><Screen name="web"/><figcaption>Illustrative screen · sample data</figcaption></figure>
   <div className="feature-copy"><Eyebrow>DIGITAL BANKING</Eyebrow><h2>Give customers a branch in their pocket.</h2><p>Personal and corporate internet banking, bills payment and transfers to any Nigerian bank — every payment protected by two-factor authentication.</p>
    <ul className="page-checks">{['Corporate initiator and authoriser workflows that follow each company’s signing mandate','Bills payment through leading Nigerian billers, with automatic refunds if a payment fails','Inward and outward interbank transfers','Full receipts with verification codes for every transaction'].map(t=><li key={t}><CheckCircle2 size={15}/>{t}</li>)}</ul>
   </div>
  </div></section>

  <section className="page-section alt" id="who"><div className="container">
   <SectionHeading eyebrow="WHO WE SERVE" title="Designed for the institutions" accent="that power inclusion." center/>
   <div className="page-grid g4">{SEGMENTS.map(s=><div key={s.title} className="segment"><h3>{s.title}</h3><p>{s.text}</p></div>)}</div>
   <figure className="home-quote"><blockquote>“Our returns now come straight from the ledger, every posting needs a second factor, and new branches open on a subscription — not a server room.”</blockquote><figcaption>The outcome we design for, at every institution we serve</figcaption></figure>
  </div></section>

  <section className="section compliance-section" id="security" aria-labelledby="security-title"><div className="container compliance-grid"><div className="compliance-copy"><Eyebrow>TRUST, WITH SOMETHING TO SHOW</Eyebrow><h2 id="security-title">Built on security.<br/><span>Driven by compliance.</span></h2><p>Responsible data handling starts with accountability. Inclusive Village Ltd, the company behind VaPicha, is registered with the Nigeria Data Protection Commission.</p><div className="compliance-note"><ShieldCheck size={22}/><span>Registered as a data controller / processor of major importance.</span></div><a className="text-link" href="mailto:hello@vapicha.africa">Talk to us about data protection <ArrowUpRight size={17}/></a></div><article className="registration-card"><div className="registration-top"><span className="registration-icon"><ShieldCheck size={27}/></span><span className="registration-label">NDPC REGISTRATION</span><span className="registration-status"><span/> Registered</span></div><div className="registration-content"><div><h3>Accountability.<br/>You can verify.</h3><p>Inclusive Village Ltd</p></div><figure><a href="https://services.ndpc.gov.ng/portal/?page=verify-c&amp;d=dn43501507966&amp;id=63134&amp;sn=90b8e055ca6517f055533bdc1ada886f&amp;t=dp_registration&amp;tp=nwp_eosic" target="_blank" rel="noopener noreferrer" aria-label="Verify NDPC registration (opens in a new tab)"><img src="/ndpc-registration-qr.png" width="352" height="352" alt="QR code extracted from Inclusive Village Ltd’s NDPC registration certificate"/></a><figcaption>Scan or tap to verify</figcaption></figure></div><div className="registration-foot"><FileText size={16}/><span>Nigeria Data Protection Act, 2023 · Section 44</span></div></article></div><div className="container compliance-badges" aria-label="Compliance standards"><div className="compliance-badge"><span className="compliance-badge-image"><img src="/ndpr-badge.png" width="115" height="140" alt=""/></span><span>NDPR Compliant</span></div><div className="compliance-badge"><span className="compliance-badge-image"><img src="/pci-dss-badge.png" width="150" height="140" alt=""/></span><span>PCI DSS Compliant</span></div></div></section>

  {/* "Ready to modernise your institution?" call-to-action, hidden for now. To show it again, replace this comment with:
      <CtaBand title="Ready to modernise your institution?" text="See the platform on your own data and get a tailored quote for your institution."/> */}
 </SiteShell>;
}
