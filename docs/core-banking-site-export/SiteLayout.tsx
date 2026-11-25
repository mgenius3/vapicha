// Website shell: sticky header with navigation, mobile menu, footer and cookie consent banner.
import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Banknote, Menu, Mail, Phone, MapPin, Cookie } from 'lucide-react'
import { Button } from '../../lib/shadcn/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../../lib/shadcn/sheet'
import { cn } from '../../lib/shadcn/utils'
import { COMPANY, FOOTER_LINKS, NAV } from './siteData'
import { Container } from './ui'
import './site.css'

const CONSENT_KEY = 'vp-cookie-consent'

function Brand({ light }: { light?: boolean }) {
  return (
    <Link to="/site" className="flex items-center gap-2.5" aria-label={`${COMPANY.name} home`}>
      <span className="vp-gold-bg flex h-9 w-9 items-center justify-center rounded-sm"><Banknote className="h-5 w-5" /></span>
      <span className={cn('vp-serif text-2xl font-semibold tracking-tight', light ? 'text-white' : 'text-foreground')}>{COMPANY.name}</span>
    </Link>
  )
}

function CookieBanner({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  const choose = (v: 'all' | 'necessary') => { try { localStorage.setItem(CONSENT_KEY, v) } catch { /* storage unavailable */ } onClose() }
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card shadow-retool-lg">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="flex items-start gap-2 text-sm text-muted-foreground">
          <Cookie className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
          <span>We use strictly necessary cookies to run this site and, with your consent, analytics cookies to improve it. See our <Link to="/site/legal/cookies" className="font-medium text-foreground underline">Cookie Policy</Link>.</span>
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => choose('necessary')}>Necessary only</Button>
          <Button size="sm" className="vp-gold-bg hover:opacity-90" onClick={() => choose('all')}>Accept all</Button>
        </div>
      </Container>
    </div>
  )
}

export default function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cookieOpen, setCookieOpen] = useState(false)

  useEffect(() => { try { setCookieOpen(!localStorage.getItem(CONSENT_KEY)) } catch { setCookieOpen(true) } }, [])
  useEffect(() => {
    setMenuOpen(false)
    if (hash) { document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }); return }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])

  const link = (n: (typeof NAV)[number], mobile = false) => (
    <NavLink key={n.to} to={n.to} end={Boolean(n.exact)} className={({ isActive }) => cn(
      'text-sm font-medium transition-colors',
      mobile ? 'rounded-md px-3 py-2' : 'border-b-2 py-1',
      isActive ? (mobile ? 'bg-accent text-foreground' : 'vp-gold-border text-foreground') : (mobile ? 'text-muted-foreground hover:text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'),
    )}>{n.label}</NavLink>
  )

  return (
    <div className="vp-site min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="vp-navy hidden text-xs sm:block">
          <Container className="flex items-center justify-between gap-4 py-1.5">
            <span className="vp-on-navy-muted">Licensed core banking technology partner to Nigerian financial institutions</span>
            <span className="vp-on-navy-muted flex gap-4"><span className="flex items-center gap-1"><Phone className="h-3 w-3" /> {COMPANY.phone}</span><span className="flex items-center gap-1"><Mail className="h-3 w-3" /> {COMPANY.email}</span></span>
          </Container>
        </div>
        <Container className="flex h-16 items-center justify-between gap-6">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">{NAV.map((n) => link(n))}</nav>
          <div className="flex items-center gap-2">
            <Button asChild className="vp-gold-bg hidden rounded-sm font-semibold hover:opacity-90 sm:inline-flex"><Link to="/site/contact">Book a demo</Link></Button>
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu"><Menu className="h-5 w-5" /></Button></SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader><SheetTitle className="vp-serif text-left">{COMPANY.name}</SheetTitle></SheetHeader>
                <nav className="mt-4 flex flex-col gap-1" aria-label="Mobile">{NAV.map((n) => link(n, true))}</nav>
                <Button asChild className="vp-gold-bg mt-6 w-full rounded-sm"><Link to="/site/contact">Book a demo</Link></Button>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </header>

      <main>{children}</main>

      <footer className="vp-navy">
        <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <Brand light />
            <p className="vp-on-navy-muted max-w-xs text-sm leading-relaxed">{COMPANY.tagline}. Core banking, lending, payments, digital channels and compliance — on one secure cloud platform.</p>
            <div className="vp-on-navy-muted space-y-1.5 text-sm">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {COMPANY.address}</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> {COMPANY.email}</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> {COMPANY.phone}</p>
            </div>
          </div>
          {([['Company', FOOTER_LINKS.company], ['Platform', FOOTER_LINKS.platform], ['Legal', FOOTER_LINKS.legal]] as const).map(([title, links]) => (
            <div key={title} className="space-y-3">
              <p className="vp-gold-text text-xs font-semibold uppercase tracking-[0.2em]">{title}</p>
              <ul className="space-y-2 text-sm">
                {links.map((l) => <li key={l.to}><Link to={l.to} className="vp-on-navy-muted hover:text-white">{l.label}</Link></li>)}
                {title === 'Legal' ? <li><button type="button" onClick={() => setCookieOpen(true)} className="vp-on-navy-muted hover:text-white">Cookie settings</button></li> : null}
              </ul>
            </div>
          ))}
        </Container>
        <div className="border-t border-white/10">
          <Container className="vp-on-navy-muted flex flex-col justify-between gap-2 py-5 text-xs sm:flex-row">
            <span>© {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.</span>
            <span>{COMPANY.product} · Built in Nigeria for Nigerian banking</span>
          </Container>
        </div>
      </footer>
      <CookieBanner open={cookieOpen} onClose={() => setCookieOpen(false)} />
    </div>
  )
}
