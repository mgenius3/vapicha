// Legal pages: privacy, cookie and IMS policies (/site/legal/:slug).
import { Link, Navigate, useParams } from 'react-router-dom'
import { FileText } from 'lucide-react'
import { POLICIES } from './policies'
import { COMPANY } from './siteData'
import { Container, PageHero } from './ui'
import { cn } from '../../lib/shadcn/utils'

export default function SiteLegal() {
  const { slug } = useParams()
  const policy = POLICIES.find((p) => p.slug === slug)
  if (!policy) return <Navigate to="/site/legal/privacy" replace />

  return (
    <>
      <PageHero eyebrow="Legal" title={policy.title} text={policy.summary} />
      <section className="py-16">
        <Container className="grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="space-y-1 lg:sticky lg:top-28 lg:self-start">
            {POLICIES.map((p) => (
              <Link key={p.slug} to={`/site/legal/${p.slug}`} className={cn('flex items-center gap-2 rounded-md px-3 py-2 text-sm', p.slug === policy.slug ? 'bg-accent font-medium text-foreground' : 'text-muted-foreground hover:text-foreground')}>
                <FileText className="h-4 w-4" /> {p.title.replace(' (IMS)', '')}
              </Link>
            ))}
          </aside>
          <article className="vp-prose max-w-3xl">
            <p className="text-xs uppercase tracking-wide">Last updated {COMPANY.policyDate} · {COMPANY.legalName}</p>
            {policy.sections.map((s) => (
              <div key={s.h}>
                <h2>{s.h}</h2>
                {(s.p ?? []).map((t) => <p key={t}>{t}</p>)}
                {s.ul ? <ul>{s.ul.map((t) => <li key={t}>{t}</li>)}</ul> : null}
                {s.table ? (
                  <div className="overflow-x-auto">
                    <table><thead><tr>{s.table.head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
                      <tbody>{s.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody></table>
                  </div>
                ) : null}
                {(s.pAfter ?? []).map((t) => <p key={t}>{t}</p>)}
              </div>
            ))}
          </article>
        </Container>
      </section>
    </>
  )
}
