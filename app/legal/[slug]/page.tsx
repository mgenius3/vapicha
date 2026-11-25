import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FileText } from 'lucide-react';
import { SiteShell, PageHero } from '../../site-shell';
import { POLICIES } from '../../policies';
import { COMPANY } from '../../site-content';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() { return POLICIES.map(p => ({ slug: p.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
 const { slug } = await params;
 const policy = POLICIES.find(p => p.slug === slug);
 return policy ? { title: `${policy.title} — VaPicha`, description: policy.summary } : {};
}

export default async function LegalPage({ params }: Props) {
 const { slug } = await params;
 const policy = POLICIES.find(p => p.slug === slug);
 if (!policy) notFound();
 return <SiteShell>
  <PageHero eyebrow="LEGAL" title={policy.title} text={policy.summary}/>
  <section className="page-section"><div className="container legal-grid">
   <aside className="legal-nav">{POLICIES.map(p=><Link key={p.slug} href={`/legal/${p.slug}`} aria-current={p.slug===policy.slug?'page':undefined}><FileText size={15}/>{p.title.replace(' (IMS)','')}</Link>)}</aside>
   <article className="prose">
    <p className="prose-date">Last updated {COMPANY.policyDate} · {COMPANY.legalName}</p>
    {policy.sections.map(s=><div key={s.h}>
     <h2>{s.h}</h2>
     {(s.p??[]).map(t=><p key={t}>{t}</p>)}
     {s.ul&&<ul>{s.ul.map(t=><li key={t}>{t}</li>)}</ul>}
     {s.table&&<div className="prose-table"><table><thead><tr>{s.table.head.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{s.table.rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{c}</td>)}</tr>)}</tbody></table></div>}
     {(s.pAfter??[]).map(t=><p key={t}>{t}</p>)}
    </div>)}
   </article>
  </div></section>
 </SiteShell>;
}
