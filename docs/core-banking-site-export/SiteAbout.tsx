// About us: mission, story, values, milestones and commitments.
import { Award, Building2, ShieldCheck } from 'lucide-react'
import { COMPANY, MILESTONES, VALUES } from './siteData'
import { Container, CtaBand, PageHero, SectionHeading } from './ui'

const COMMITMENTS = [
  { icon: ShieldCheck, title: 'Security first', text: 'An integrated management system built on ISO 27001, ISO 9001, ISO 22301 and ISO 20000 principles, and the Nigeria Data Protection Act.' },
  { icon: Building2, title: 'Regulation by design', text: 'CBN requirements shape our product decisions from the first line of code — not after the audit finding.' },
  { icon: Award, title: 'Partnership for the long term', text: 'Transparent subscription pricing, a published roadmap and implementation teams who stay with you after go-live.' },
]

export default function SiteAbout() {
  return (
    <>
      <PageHero eyebrow="About us" title="We build the systems Nigerian banks run on" text={`${COMPANY.legalName} exists to give every microfinance bank, finance company and cooperative the same quality of core banking technology as the largest institutions — at a price that makes sense.`} />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <SectionHeading eyebrow="Our story" title="Bankers and engineers, side by side" />
            <p className="leading-relaxed text-muted-foreground">VaPicha was started by people who had spent years inside Nigerian banks — reconciling tills at midnight, compiling CBN returns from spreadsheets and waiting months for vendor upgrades. We knew institutions serving millions of Nigerians deserved better tools.</p>
            <p className="leading-relaxed text-muted-foreground">So we built a platform where every function shares one ledger, every sensitive action has a second pair of eyes, and new capabilities arrive without a server in sight. Today the {COMPANY.product} covers core banking, lending, payments, digital channels, compliance and HR in one place.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="vp-navy rounded-lg p-8 sm:col-span-2">
              <p className="vp-gold-text text-xs font-semibold uppercase tracking-[0.2em]">Our mission</p>
              <p className="vp-serif mt-3 text-2xl leading-snug">To power financial inclusion by giving every Nigerian financial institution world-class banking infrastructure.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="vp-gold-text text-xs font-semibold uppercase tracking-[0.2em]">Vision</p>
              <p className="mt-2 text-sm text-muted-foreground">The most trusted banking technology partner in West Africa.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <p className="vp-gold-text text-xs font-semibold uppercase tracking-[0.2em]">Headquarters</p>
              <p className="mt-2 text-sm text-muted-foreground">{COMPANY.address}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Our values" title="What we stand for" center />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="space-y-3 rounded-lg border border-border bg-card p-6">
                <v.icon className="vp-gold-text h-6 w-6" />
                <h3 className="vp-serif text-xl font-semibold">{v.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading eyebrow="Our journey" title="Building, one capability at a time" />
          <ol className="relative space-y-8 border-l border-border pl-8">
            {MILESTONES.map((m) => (
              <li key={m.year} className="relative">
                <span className="vp-gold-bg absolute -left-[39px] top-1 h-3.5 w-3.5 rounded-full ring-4 ring-background" />
                <p className="vp-serif text-lg font-semibold">{m.year}</p>
                <p className="text-sm text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-20">
        <Container className="grid gap-6 md:grid-cols-3">
          {COMMITMENTS.map((c) => (
            <div key={c.title} className="space-y-3">
              <c.icon className="h-6 w-6" />
              <h3 className="vp-serif text-xl font-semibold">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </Container>
      </section>
      <CtaBand title="Let’s build your bank’s future together" />
    </>
  )
}
