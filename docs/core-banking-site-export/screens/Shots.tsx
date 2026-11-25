// Product screenshots rendered as live, theme-aware mock-ups of real VaPicha screens inside a browser frame.
import type { ReactNode } from 'react'
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts'
import { ArrowDownLeft, ArrowUpRight, ShieldCheck, Zap, Tv, Smartphone, Wallet, CheckCircle2, Landmark, LayoutDashboard, Users, ArrowLeftRight, Receipt, FileBarChart } from 'lucide-react'
import { cn } from '../../../lib/shadcn/utils'

export function BrowserFrame({ url, children, className }: { url: string; children: ReactNode; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-lg border border-border bg-card shadow-retool-lg', className)}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="ml-3 flex-1 truncate rounded bg-background px-3 py-0.5 text-[10px] text-muted-foreground">{url}</span>
      </div>
      <div className="pointer-events-none select-none text-[11px]" aria-hidden="true">{children}</div>
    </div>
  )
}

const SIDE = [LayoutDashboard, Users, Wallet, ArrowLeftRight, Landmark, Receipt, FileBarChart]
function AppShell({ children, active = 0 }: { children: ReactNode; active?: number }) {
  return (
    <div className="flex min-h-[280px]">
      <div className="hidden w-11 shrink-0 flex-col items-center gap-3 border-r border-border bg-card py-3 sm:flex">
        <span className="vp-gold-bg h-6 w-6 rounded-sm" />
        {SIDE.map((I, i) => <I key={i} className={cn('h-4 w-4', i === active ? 'text-foreground' : 'text-muted-foreground/60')} />)}
      </div>
      <div className="min-w-0 flex-1 space-y-3 bg-background p-3">{children}</div>
    </div>
  )
}
const Stat = ({ label, value, tone }: { label: string; value: string; tone?: 'up' | 'down' }) => (
  <div className="rounded-md border border-border bg-card p-2">
    <p className="text-[9px] uppercase tracking-wide text-muted-foreground">{label}</p>
    <p className={cn('mt-0.5 text-sm font-bold tabular-nums', tone === 'up' && 'text-green-600 dark:text-green-400', tone === 'down' && 'text-red-600 dark:text-red-400')}>{value}</p>
  </div>
)

const TREND = [32, 38, 35, 44, 49, 47, 58, 62, 60, 71, 76, 84].map((v, i) => ({ m: 'JFMAMJJASOND'[i], v }))
export function DashboardShot() {
  return (
    <BrowserFrame url="app.vapicha.com/dashboard">
      <AppShell>
        <p className="text-sm font-semibold">Operations dashboard</p>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <Stat label="Total deposits" value="₦4.82B" /><Stat label="Loan book" value="₦2.17B" /><Stat label="Inflow 24h" value="+₦86.4M" tone="up" /><Stat label="Outflow 24h" value="−₦41.9M" tone="down" />
        </div>
        <div className="grid gap-2 md:grid-cols-[1.6fr_1fr]">
          <div className="rounded-md border border-border bg-card p-2">
            <p className="mb-1 text-[10px] font-medium">Deposit growth (₦M)</p>
            <ResponsiveContainer width="100%" height={110}>
              <AreaChart data={TREND} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
                <XAxis dataKey="m" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
                <Area type="monotone" dataKey="v" stroke="hsl(var(--vp-gold))" fill="hsl(var(--vp-gold) / 0.25)" strokeWidth={2} isAnimationActive={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
            <p className="text-[10px] font-medium">Recent postings</p>
            {[['Cash deposit', '+₦250,000', true], ['NIP transfer', '−₦1,200,000', false], ['Loan repayment', '+₦84,500', true], ['DStv Compact', '−₦19,100', false]].map(([n, a, c]) => (
              <div key={String(n)} className="flex items-center justify-between"><span className="flex items-center gap-1">{c ? <ArrowDownLeft className="h-3 w-3 text-green-600 dark:text-green-400" /> : <ArrowUpRight className="h-3 w-3 text-muted-foreground" />}{n}</span><span className="font-medium tabular-nums">{a}</span></div>
            ))}
          </div>
        </div>
      </AppShell>
    </BrowserFrame>
  )
}

export function TellerShot() {
  return (
    <BrowserFrame url="app.vapicha.com/deposit">
      <AppShell active={2}>
        <p className="text-sm font-semibold">Cash deposit</p>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="space-y-2 rounded-md border border-border bg-card p-2">
            <p className="text-[9px] text-muted-foreground">Customer account</p>
            <p className="font-semibold">Adebayo Ogunlesi · 0123456785</p>
            <div className="grid grid-cols-3 gap-1"><Stat label="Balance" value="₦2.03M" /><Stat label="KYC" value="Tier 3" /><Stat label="Status" value="Active" /></div>
            <div className="rounded border border-border px-2 py-1.5">Amount <span className="float-right font-semibold">₦250,000.00</span></div>
            <div className="rounded border border-border px-2 py-1.5">Instrument <span className="float-right">Cash · Till 03</span></div>
          </div>
          <div className="space-y-2 rounded-md border border-border bg-card p-2">
            <p className="flex items-center gap-1 font-semibold"><ShieldCheck className="h-3.5 w-3.5" /> Authorise transaction</p>
            <p className="text-muted-foreground">Enter the code from your hardware token</p>
            <div className="flex gap-1">{'418 207'.replace(' ', '').split('').map((d, i) => <span key={i} className="flex h-7 w-7 items-center justify-center rounded border border-border text-sm font-semibold">{d}</span>)}</div>
            <div className="vp-gold-bg rounded-sm px-2 py-1.5 text-center font-semibold">Authorise</div>
          </div>
        </div>
      </AppShell>
    </BrowserFrame>
  )
}

export function LoanShot() {
  const rows = [['Performing', '₦1.84B', 'bg-green-500'], ['Watchlist', '₦212M', 'bg-amber-400'], ['Substandard', '₦74M', 'bg-orange-500'], ['Doubtful', '₦31M', 'bg-red-500']]
  return (
    <BrowserFrame url="app.vapicha.com/loans">
      <AppShell active={4}>
        <p className="text-sm font-semibold">Loan portfolio & provisioning</p>
        <div className="grid grid-cols-3 gap-2"><Stat label="Portfolio" value="₦2.17B" /><Stat label="PAR 30" value="4.8%" /><Stat label="Provision" value="₦48.6M" /></div>
        <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
          {rows.map(([n, v, c]) => (
            <div key={n} className="flex items-center gap-2"><span className="w-20">{n}</span><span className="h-2 flex-1 rounded-full bg-muted"><span className={cn('block h-2 rounded-full', c)} style={{ width: n === 'Performing' ? '85%' : n === 'Watchlist' ? '10%' : n === 'Substandard' ? '4%' : '2%' }} /></span><span className="w-14 text-right tabular-nums">{v}</span></div>
          ))}
        </div>
        <div className="rounded-md border border-border bg-card p-2">
          <div className="grid grid-cols-4 gap-1 border-b border-border pb-1 font-medium text-muted-foreground"><span>Borrower</span><span>Principal</span><span>Due</span><span>Status</span></div>
          {[['Chinwe Okonkwo', '₦1.5M', '12 Mar', 'Current'], ['Bello Stores Ltd', '₦8.0M', '28 Feb', 'Current'], ['Emeka Nwosu', '₦650K', '03 Feb', '31 DPD']].map((r) => <div key={r[0]} className="grid grid-cols-4 gap-1 py-1">{r.map((c, i) => <span key={i} className={cn(i === 3 && c !== 'Current' && 'text-red-600 dark:text-red-400')}>{c}</span>)}</div>)}
        </div>
      </AppShell>
    </BrowserFrame>
  )
}

export function WebBankingShot() {
  return (
    <BrowserFrame url="bank.vapicha.com/ib">
      <div className="space-y-3 bg-background p-3">
        <div className="flex items-center justify-between"><p className="text-sm font-semibold">Good morning, Funmilayo</p><span className="rounded-sm border border-border px-2 py-0.5">Personal web banking</span></div>
        <div className="grid gap-2 md:grid-cols-3">
          <div className="vp-navy rounded-md p-3"><p className="vp-on-navy-muted text-[9px] uppercase">Total balance</p><p className="text-lg font-bold">₦3,691,973.12</p></div>
          <Stat label="Savings · 0145…" value="₦3.12M" /><Stat label="Current · 0187…" value="₦571K" />
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
            <p className="font-medium">Transfer</p>
            <div className="rounded border border-border px-2 py-1">To · Zenith Bank · 2087654321</div>
            <div className="rounded border border-border px-2 py-1">Amount <span className="float-right font-semibold">₦75,000</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Fee + VAT</span><span>₦53.75</span></div>
          </div>
          <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
            <p className="flex items-center gap-1 font-medium"><CheckCircle2 className="h-3.5 w-3.5 text-green-600 dark:text-green-400" /> Transfer successful</p>
            <p className="text-muted-foreground">Reference TRF-20260114-K3J9Q2</p>
            <p className="text-muted-foreground">Confirmed with authenticator 2FA</p>
            <div className="rounded-sm border border-border px-2 py-1 text-center">Download receipt</div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function BillsShot() {
  const cats = [[Smartphone, 'Airtime'], [Zap, 'Electricity'], [Tv, 'Cable TV'], [Wallet, 'Data']] as const
  return (
    <BrowserFrame url="app.vapicha.com/bills">
      <AppShell active={5}>
        <p className="text-sm font-semibold">Bills payment</p>
        <div className="grid grid-cols-4 gap-2">{cats.map(([I, n], i) => <div key={n} className={cn('flex flex-col items-center gap-1 rounded-md border p-2', i === 1 ? 'vp-gold-border vp-gold-soft' : 'border-border bg-card')}><I className="h-4 w-4" />{n}</div>)}</div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
            <div className="rounded border border-border px-2 py-1">Ikeja Electric Prepaid</div>
            <div className="rounded border border-border px-2 py-1">Meter 45012345678</div>
            <div className="flex justify-between"><span className="text-muted-foreground">Customer</span><span>TUNDE BAKARE</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Amount + fee</span><span className="font-semibold">₦10,100.00</span></div>
          </div>
          <div className="space-y-1 rounded-md border border-border bg-card p-2 text-center">
            <p className="text-muted-foreground">Token</p>
            <p className="font-mono text-xs font-bold">4821-0937-5521-0846-3310</p>
            <p className="text-muted-foreground">147.1 kWh · via Interswitch</p>
          </div>
        </div>
      </AppShell>
    </BrowserFrame>
  )
}

const RET = [{ q: 'Q1', v: 18 }, { q: 'Q2', v: 22 }, { q: 'Q3', v: 27 }, { q: 'Q4', v: 31 }]
export function ReportsShot() {
  return (
    <BrowserFrame url="app.vapicha.com/reports/regulatory">
      <AppShell active={6}>
        <p className="text-sm font-semibold">Regulatory & executive reporting</p>
        <div className="grid grid-cols-3 gap-2"><Stat label="Capital adequacy" value="21.4%" /><Stat label="Liquidity ratio" value="38.2%" /><Stat label="Returns due" value="2" /></div>
        <div className="grid gap-2 md:grid-cols-2">
          <div className="rounded-md border border-border bg-card p-2">
            <p className="mb-1 text-[10px] font-medium">Net interest income (₦M)</p>
            <ResponsiveContainer width="100%" height={90}>
              <BarChart data={RET} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
                <XAxis dataKey="q" tick={{ fontSize: 8 }} axisLine={false} tickLine={false} />
                <Bar dataKey="v" fill="hsl(var(--vp-navy-soft))" radius={[2, 2, 0, 0]} isAnimationActive={false} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-1.5 rounded-md border border-border bg-card p-2">
            {([['MMFBR 300 — Statement of position', 'Submitted'], ['MMFBR 141 — Loans by sector', 'Submitted'], ['Prudential return', 'Due 15 Feb']] as const).map(([n, s]) => <div key={n} className="flex justify-between gap-2"><span className="truncate">{n}</span><span className={s.startsWith('Due') ? 'vp-gold-text font-medium' : 'text-muted-foreground'}>{s}</span></div>)}
          </div>
        </div>
      </AppShell>
    </BrowserFrame>
  )
}
