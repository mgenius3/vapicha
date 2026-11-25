// Shared website building blocks: page hero, section headings, call-to-action band.
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '../../lib/shadcn/button'
import { cn } from '../../lib/shadcn/utils'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
}

export function Eyebrow({ children, onNavy }: { children: ReactNode; onNavy?: boolean }) {
  return <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', onNavy ? 'vp-gold-text' : 'vp-gold-text')}>{children}</p>
}

export function SectionHeading({ eyebrow, title, text, center }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={cn('max-w-2xl space-y-3', center && 'mx-auto text-center')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="vp-serif text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      <div className={cn('vp-rule', center && 'mx-auto')} />
      {text ? <p className="text-base leading-relaxed text-muted-foreground">{text}</p> : null}
    </div>
  )
}

export function PageHero({ eyebrow, title, text, children }: { eyebrow: string; title: string; text: string; children?: ReactNode }) {
  return (
    <section className="vp-navy vp-hero-pattern">
      <Container className="py-20 sm:py-24">
        <div className="max-w-3xl space-y-5">
          <Eyebrow onNavy>{eyebrow}</Eyebrow>
          <h1 className="vp-serif text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
          <p className="vp-on-navy-muted text-lg leading-relaxed">{text}</p>
          {children}
        </div>
      </Container>
    </section>
  )
}

export function GoldButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Button asChild size="lg" className="vp-gold-bg rounded-sm px-6 font-semibold hover:opacity-90">
      <Link to={to}>{children} <ArrowRight className="h-4 w-4" /></Link>
    </Button>
  )
}

export function GhostButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Button asChild size="lg" variant="outline" className="rounded-sm border-white/40 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white">
      <Link to={to}>{children}</Link>
    </Button>
  )
}

export function CtaBand({ title = 'Ready to modernise your bank?', text = 'See the platform on your own data and get a tailored quote for your institution.' }: { title?: string; text?: string }) {
  return (
    <section className="vp-navy">
      <Container className="flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
        <div className="space-y-2">
          <h2 className="vp-serif text-3xl font-semibold">{title}</h2>
          <p className="vp-on-navy-muted">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <GoldButton to="/site/contact">Book a demo</GoldButton>
          <GhostButton to="/site/product">Take the product tour</GhostButton>
        </div>
      </Container>
    </section>
  )
}
