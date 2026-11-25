// Product tour: alternating feature descriptions and screenshots, plus security and integration credentials.
import type { ReactNode } from 'react'
import { Check, ShieldCheck, KeyRound, Mail, Smartphone, Plug, FileCheck2 } from 'lucide-react'
import { COMPANY } from './siteData'
import { Container, CtaBand, Eyebrow, PageHero, SectionHeading } from './ui'
import { BillsShot, DashboardShot, LoanShot, ReportsShot, TellerShot, WebBankingShot } from './screens/Shots'
import { cn } from '../../lib/shadcn/utils'

type Feature = { id: string; eyebrow: string; title: string; text: string; points: string[]; shot: ReactNode }

const FEATURES: Feature[] = [
  { id: 'dashboard', eyebrow: 'Command centre', title: 'See the whole bank at a glance', text: 'Deposits, loan book, inflows and outflows, branch performance and recent postings update in real time from the same ledger your accountants use.', points: ['Operations and executive BI dashboards', 'Branch, product and officer drill-downs', 'Transaction monitoring with AML risk scores'], shot: <DashboardShot /> },
  { id: 'teller', eyebrow: 'Branch operations', title: 'Fast, controlled counter service', text: 'Tellers find customers in seconds, see balances and KYC limits, and post deposits, withdrawals and transfers — each confirmed with a hardware token, authenticator or email code.', points: ['Tills and vault with balancing and EOD checks', 'Maker-checker reversals and backdating', 'Printable receipts with verification codes'], shot: <TellerShot /> },
  { id: 'lending', eyebrow: 'Lending', title: 'From application to provisioning', text: 'Book loans from configurable products, track repayment schedules and days past due, and let the system classify and provision the portfolio for regulatory reporting.', points: ['Restructuring, moratorium and write-off', 'PFI wholesale on-lending and end-beneficiaries', 'Overdrafts, fixed deposits and placements'], shot: <LoanShot /> },
  { id: 'digital', eyebrow: 'Web banking', title: 'Personal and corporate online banking', text: 'Customers check balances, download statements, transfer to any Nigerian bank and pay bills. Companies get initiator and authoriser roles that follow their signing mandate.', points: ['Authenticator 2FA on every payment', 'Saved beneficiaries and daily limits', 'Receipts for every transaction'], shot: <WebBankingShot /> },
  { id: 'bills', eyebrow: 'Bills & payments', title: 'Bills payment on every channel', text: 'Airtime, data, electricity, cable TV, education PINs and water — at the branch, through agents and online. Validated with the biller first, refunded automatically if the switch fails.', points: ['Interswitch, eTranzact, Chams and VTPass', 'Primary/fallback routing per service', 'Electricity tokens and PINs on the receipt'], shot: <BillsShot /> },
  { id: 'reporting', eyebrow: 'Compliance', title: 'Regulatory reporting from live data', text: 'CBN returns, prudential ratios, financial statements and operational reports come straight from the ledger — no spreadsheets, no re-keying.', points: ['Financial, credit, e-channel and posting reports', 'Complete audit trail of every action', 'End-of-day, week and year closure controls'], shot: <ReportsShot /> },
]

const SECURITY = [
  { icon: KeyRound, title: 'Hardware tokens', text: 'OATH TOTP tokens assigned per staff member.' },
  { icon: Smartphone, title: 'Authenticator apps', text: 'Google, Microsoft Authenticator or Authy for staff and customers.' },
  { icon: Mail, title: 'Email codes', text: 'One-time codes to the user’s sign-in address.' },
  { icon: ShieldCheck, title: 'Maker-checker', text: 'Four-eyes approval on sensitive actions and corporate payments.' },
  { icon: FileCheck2, title: 'Audit trail', text: 'Every posting, approval and setting change recorded.' },
  { icon: Plug, title: 'Switch integrations', text: 'NIBSS NIP & EasyPay, Interswitch, eTranzact, Chams, VTPass.' },
]

export default function SiteProduct() {
  return (
    <>
      <PageHero eyebrow="Product tour" title={`Inside the ${COMPANY.product}`} text="A walk through the screens your tellers, credit officers, finance team, compliance officers and customers use every day." />

      <nav className="sticky top-16 z-30 border-b border-border bg-background/95 backdrop-blur" aria-label="Product sections">
        <Container className="flex gap-6 overflow-x-auto py-3 text-sm">
          {FEATURES.map((f) => <a key={f.id} href={`#${f.id}`} className="shrink-0 text-muted-foreground hover:text-foreground">{f.eyebrow}</a>)}
        </Container>
      </nav>

      {FEATURES.map((f, i) => (
        <section key={f.id} id={f.id} className={cn('scroll-mt-32 py-20', i % 2 === 1 && 'bg-muted/40')}>
          <Container className="grid items-center gap-12 lg:grid-cols-2">
            <div className={cn('space-y-5', i % 2 === 1 && 'lg:order-2')}>
              <Eyebrow>{f.eyebrow}</Eyebrow>
              <h2 className="vp-serif text-3xl font-semibold sm:text-4xl">{f.title}</h2>
              <div className="vp-rule" />
              <p className="leading-relaxed text-muted-foreground">{f.text}</p>
              <ul className="space-y-2 text-sm">{f.points.map((p) => <li key={p} className="flex gap-2"><Check className="vp-gold-text mt-0.5 h-4 w-4 shrink-0" />{p}</li>)}</ul>
            </div>
            <figure className="space-y-2">
              {f.shot}
              <figcaption className="text-center text-xs text-muted-foreground">{f.title} — {COMPANY.product}</figcaption>
            </figure>
          </Container>
        </section>
      ))}

      <section className="border-t border-border py-20">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Security & integrations" title="Controls your board and regulator will appreciate" center />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SECURITY.map((s) => (
              <div key={s.title} className="flex gap-4 rounded-lg border border-border bg-card p-6">
                <s.icon className="vp-gold-text h-6 w-6 shrink-0" />
                <div><h3 className="font-semibold">{s.title}</h3><p className="text-sm text-muted-foreground">{s.text}</p></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand title="See it on your own data" />
    </>
  )
}
