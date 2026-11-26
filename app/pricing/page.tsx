import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check, CircleHelp, Plus, Sprout } from 'lucide-react';
import { SiteShell, Eyebrow, CtaBand } from '../site-shell';
import { PLANS, PRICING_NOTE } from '../site-content';

export const metadata: Metadata = { title: 'Pricing — VaPicha', description: 'Simple plans priced in naira: Base, Base+ and Enterprise. Plus answers to common questions.' };

export default function PricingPage() {
 return <SiteShell>
 <div className="pricing-page">
 <section className="section pricing" id="pricing"><div className="container"><div className="center-heading"><Eyebrow>PRICING</Eyebrow><h2>Simple plans that grow<span> with your institution.</span></h2><p>{PRICING_NOTE}</p></div><div className="pricing-grid">{PLANS.map(p=><article key={p.name} className={'plan '+(p.featured?'popular':'')}><div className="plan-top"><span>{p.name}</span>{p.featured&&<small>MOST POPULAR <Sprout size={12}/></small>}</div><p>{p.for}</p>{/* Prices hidden for now. To show them again, remove this comment wrapper: <div className="price">{p.price}</div><span className="price-period">/ month</span> */}<Link className={'button '+(p.featured?'':'button-outline')} href="/contact">Request a quote<ArrowUpRight size={16}/></Link><ul>{p.features.map(f=><li key={f}><Check size={15}/>{f}</li>)}</ul></article>)}</div><p className="pricing-note">Final fees, features and eligibility are confirmed with VaPicha.</p></div></section>
  <section className="section faq-section" id="faqs"><div className="container faq-layout"><div className="faq-intro"><Eyebrow>A LITTLE MORE CLARITY</Eyebrow><h2>Good questions.<br/><span>Clear answers.</span></h2><p>Choosing a lending platform is a big step. Let’s make the next one feel a little simpler.</p><div className="faq-contact"><span><CircleHelp size={26}/></span><div><b>Have something else in mind?</b><a href="mailto:hello@vapicha.africa">Talk to a real person <ArrowUpRight size={15}/></a></div></div></div><div className="faq-list">{[
 {q:'Who is VaPicha built for?',a:'VaPicha supports Nigerian microfinance banks, cooperatives, fintech lenders, NGOs, MFIs, thrift and savings groups, and growing lending teams. Book a demo to explore how it fits your institution.'},
 {q:'Can we manage both individual and group loans?',a:'Yes. VaPicha supports individual and group loan products, with repayment schedules, rates and penalties. This includes local group lending models such as Adashe, Esusu and Ajo.'},
 {q:'How do we move from spreadsheets?',a:'Onboarding includes setting up your workspace, configuring products and operating rules, preparing your borrower records, and training your team. Your demo is a good time to discuss your existing data and migration needs.'},
 {q:'Are the plans priced in naira?',a:'Yes. Base is ₦250,000, Base+ ₦600,000 and Enterprise ₦1,200,000 per month, before 7.5% VAT. Quarterly billing saves 5% and annual prepayment about 15%; a one-off implementation fee applies. Confirm final fees, features and eligibility with the VaPicha team.'},
 {q:'What support is available for our team?',a:'On-site support, Email Support, Call, and WhatsApp support'},
 {q:'What happens when I request a demo?',a:'Complete the short form to send your request to our business team. You can also email hello@vapicha.africa directly.'}
 ].map((item,i)=><details key={item.q} className="faq-item" name="lending-faq"><summary><span className="faq-number">0{i+1}</span>{item.q}<Plus size={18}/></summary><p>{item.a}</p></details>)}</div></div></section>
 </div>
 {/* "The next chapter of your lending starts here." call-to-action, hidden for now. To show it again, replace this comment with <CtaBand/> */}
 </SiteShell>;
}
