// Solutions: every capability area in detail, deployment model and pricing plans.
import { Link } from 'react-router-dom'
import { Check, Cloud, KeyRound, LifeBuoy, Repeat } from 'lucide-react'
import { PLANS, SOLUTIONS } from './siteData'
import { Container, CtaBand, PageHero, SectionHeading } from './ui'
import { Button } from '../../lib/shadcn/button'
import { cn } from '../../lib/shadcn/utils'

const IMPLEMENTATION = [
  { icon: Cloud, title: 'Configure', text: 'Products, charges, chart of accounts, branches, roles and approval rules set up for your bank.' },
  { icon: Repeat, title: 'Migrate', text: 'Customers, balances, loans, deposits and GL balances loaded with batch tools and tracers.' },
  { icon: KeyRound, title: 'Train & parallel-run', text: 'Role-based training, a full user manual and reconciliation against your legacy system.' },
  { icon: LifeBuoy, title: 'Go live & grow', text: 'Cut over with on-call support, then add modules, users and branches as you expand.' },
]

export default function SiteSolutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="One platform for every part of the bank" text="Eight integrated solution areas sharing a single real-time ledger, one security model and one audit trail — switch on what you need today and grow into the rest." />

      <section className="py-20">
        <Container className="space-y-6">
          {SOLUTIONS.map((s, i) => (
            <div key={s.id} id={s.id} className="scroll-mt-28 grid gap-8 rounded-lg border border-border bg-card p-8 md:grid-cols-[auto_1fr_1fr]">
              <span className="vp-gold-soft flex h-14 w-14 items-center justify-center rounded-sm"><s.icon className="vp-gold-text h-7 w-7" /></span>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</p>
                <h2 className="vp-serif text-2xl font-semibold">{s.title}</h2>
                <p className="leading-relaxed text-muted-foreground">{s.summary}</p>
              </div>
              <ul className="space-y-2.5 text-sm">
                {s.points.map((p) => <li key={p} className="flex gap-2"><Check className="vp-gold-text mt-0.5 h-4 w-4 shrink-0" /><span>{p}</span></li>)}
              </ul>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-muted/40 py-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Implementation" title="A clear path from contract to go-live" text="Our implementation team configures, migrates and trains while your staff keep serving customers." center />
          <div className="grid gap-6 md:grid-cols-4">
            {IMPLEMENTATION.map((s, i) => (
              <div key={s.title} className="relative space-y-3 rounded-lg border border-border bg-card p-6">
                <span className="vp-serif vp-gold-text absolute right-5 top-4 text-4xl font-semibold opacity-30">{i + 1}</span>
                <s.icon className="h-6 w-6" />
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="pricing" className="scroll-mt-28 py-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Pricing" title="Simple plans that grow with your bank" text="Monthly prices shown before 7.5% VAT. Quarterly billing saves 5%; annual prepayment saves about 15%. One-off implementation fee applies." center />
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div key={p.name} className={cn('flex flex-col rounded-lg border p-8', p.featured ? 'vp-navy border-transparent shadow-retool-lg' : 'border-border bg-card')}>
                {p.featured ? <span className="vp-gold-bg mb-4 self-start rounded-sm px-2 py-0.5 text-xs font-semibold">Most popular</span> : null}
                <h3 className="vp-serif text-2xl font-semibold">{p.name}</h3>
                <p className={cn('text-sm', p.featured ? 'vp-on-navy-muted' : 'text-muted-foreground')}>{p.for}</p>
                <p className="mt-6"><span className={cn('vp-serif text-4xl font-semibold', p.featured && 'vp-gold-text')}>{p.price}</span><span className={cn('text-sm', p.featured ? 'vp-on-navy-muted' : 'text-muted-foreground')}> / month</span></p>
                <ul className="my-6 flex-1 space-y-2 text-sm">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="vp-gold-text mt-0.5 h-4 w-4 shrink-0" />{f}</li>)}
                </ul>
                <Button asChild className={cn('rounded-sm font-semibold', p.featured ? 'vp-gold-bg hover:opacity-90' : '')} variant={p.featured ? 'default' : 'outline'}>
                  <Link to="/site/contact">Request a quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  )
}
