// Website home: hero with product shot, credentials, advantages, solutions overview, segments, testimonial-style proof and CTA.
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ADVANTAGES, COMPANY, SEGMENTS, SOLUTIONS, STATS } from './siteData'
import { Container, CtaBand, Eyebrow, GhostButton, GoldButton, SectionHeading } from './ui'
import { DashboardShot, WebBankingShot } from './screens/Shots'

export default function SiteHome() {
  return (
    <>
      <section className="vp-navy vp-hero-pattern overflow-hidden">
        <Container className="grid items-center gap-12 py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="space-y-6">
            <Eyebrow onNavy>Core banking · Payments · Digital channels</Eyebrow>
            <h1 className="vp-serif text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">Banking infrastructure worthy of the trust your customers place in you.</h1>
            <p className="vp-on-navy-muted max-w-xl text-lg leading-relaxed">{COMPANY.product} runs your entire institution — customers, accounts, lending, payments, compliance and people — on one secure, cloud platform built for Nigerian regulation.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <GoldButton to="/site/contact">Book a demo</GoldButton>
              <GhostButton to="/site/product">See the product</GhostButton>
            </div>
            <ul className="vp-on-navy-muted grid gap-2 pt-2 text-sm sm:grid-cols-2">
              {['CBN-ready returns & provisioning', 'Transaction 2FA & maker-checker', 'Live in weeks, not months', 'No servers to buy or maintain'].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="vp-gold-text h-4 w-4" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-xl bg-white/5" aria-hidden="true" />
            <DashboardShot />
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-card">
        <Container className="grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="border-l-2 vp-gold-border pl-4">
              <p className="vp-serif text-3xl font-semibold text-foreground">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Why VaPicha" title="The advantages of a modern, purpose-built core" text="We combined deep Nigerian banking know-how with modern engineering, so your team spends its time serving customers — not reconciling systems." />
          <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {ADVANTAGES.map((a) => (
              <div key={a.title} className="space-y-3 bg-card p-7">
                <span className="vp-gold-soft inline-flex h-11 w-11 items-center justify-center rounded-sm"><a.icon className="vp-gold-text h-5 w-5" /></span>
                <h3 className="vp-serif text-xl font-semibold">{a.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-20">
        <Container className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Solutions" title="Everything a bank needs, on one ledger" />
            <Link to="/site/solutions" className="vp-gold-text flex items-center gap-1 text-sm font-semibold hover:underline">All solutions <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SOLUTIONS.map((s) => (
              <Link key={s.id} to={`/site/solutions#${s.id}`} className="group space-y-3 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-retool-md">
                <s.icon className="h-6 w-6 text-foreground" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <span className="vp-gold-text inline-flex items-center gap-1 text-xs font-semibold">Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <WebBankingShot />
          <div className="space-y-6">
            <SectionHeading eyebrow="Digital banking" title="Give customers a branch in their pocket" text="Personal and corporate web banking, bills payment and transfers to any Nigerian bank — every payment protected by authenticator two-factor authentication." />
            <ul className="space-y-3 text-sm">
              {['Corporate initiator and authoriser workflows that follow each company’s signing mandate', 'Bills through Interswitch, eTranzact, Chams and VTPass with automatic fallback', 'Interbank transfers over NIBSS NIP and EasyPay', 'Full receipts with verification codes for every transaction'].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="vp-gold-text mt-0.5 h-4 w-4 shrink-0" /><span className="text-muted-foreground">{t}</span></li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card py-20">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Who we serve" title="Designed for the institutions that power inclusion" center />
          <div className="grid gap-6 md:grid-cols-4">
            {SEGMENTS.map((s) => (
              <div key={s.title} className="space-y-2 border-t-2 vp-gold-border pt-4">
                <h3 className="vp-serif text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
          <figure className="mx-auto max-w-3xl space-y-4 pt-6 text-center">
            <blockquote className="vp-serif text-2xl leading-snug text-foreground">“Our returns now come straight from the ledger, every posting needs a second factor, and new branches open on a subscription — not a server room.”</blockquote>
            <figcaption className="text-sm text-muted-foreground">The outcome we design for, at every bank we serve</figcaption>
          </figure>
        </Container>
      </section>

      <CtaBand />
    </>
  )
}
