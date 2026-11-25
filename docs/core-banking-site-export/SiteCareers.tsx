// Careers: culture, benefits, open roles and an application form (saved as a lead for HR).
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Briefcase, CheckCircle2, MapPin, Sparkles } from 'lucide-react'
import { useSubmitWebsiteLead } from '../../hooks/backend/website'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../lib/shadcn/dialog'
import { Input } from '../../lib/shadcn/input'
import { Textarea } from '../../lib/shadcn/textarea'
import { Label } from '../../lib/shadcn/label'
import { Checkbox } from '../../lib/shadcn/checkbox'
import { Button } from '../../lib/shadcn/button'
import { Badge } from '../../lib/shadcn/badge'
import { errorMessage } from '../../utils/errors'
import { COMPANY, JOBS, PERKS, VALUES, type Job } from './siteData'
import { Container, PageHero, SectionHeading } from './ui'

export default function SiteCareers() {
  const submit = useSubmitWebsiteLead()
  const [job, setJob] = useState<Job | null>(null)
  const [f, setF] = useState({ name: '', email: '', phone: '', linkedin: '', message: '' })
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  const open = (j: Job) => { setJob(j); setDone(false); setError(null) }
  const apply = async () => {
    if (!job) return
    setError(null)
    try {
      await submit.trigger({ kind: 'career', jobId: job.id, topic: job.title, ...f, consent }).result
      setDone(true)
    } catch (e) { setError(errorMessage(e)) }
  }

  return (
    <>
      <PageHero eyebrow="Careers" title="Build the infrastructure of Nigerian banking" text="Join bankers, engineers and implementers who care about getting money and data exactly right — and making financial services work for everyone." />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            <SectionHeading eyebrow="Life at VaPicha" title="Serious work, done by people who enjoy it" />
            <p className="leading-relaxed text-muted-foreground">Our software moves real money for real people, so we hold ourselves to high standards of precision and security. We also believe great work comes from small, trusted teams with room to learn — so that’s how we’re organised.</p>
            <ul className="grid gap-2 sm:grid-cols-2">{PERKS.map((p) => <li key={p} className="flex gap-2 text-sm"><Sparkles className="vp-gold-text mt-0.5 h-4 w-4 shrink-0" />{p}</li>)}</ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.title} className="space-y-2 rounded-lg border border-border bg-card p-5">
                <v.icon className="vp-gold-text h-5 w-5" /><h3 className="font-semibold">{v.title}</h3><p className="text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted/40 py-20">
        <Container className="space-y-10">
          <SectionHeading eyebrow="Open roles" title={`${JOBS.length} positions open`} />
          <div className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            {JOBS.map((j) => (
              <div key={j.id} className="grid gap-4 p-6 md:grid-cols-[1fr_auto] md:items-center">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2"><h3 className="vp-serif text-xl font-semibold">{j.title}</h3><Badge variant="secondary">{j.team}</Badge></div>
                  <p className="flex flex-wrap gap-4 text-sm text-muted-foreground"><span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span><span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {j.type}</span></p>
                  <p className="text-sm">{j.summary}</p>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground">{j.requirements.map((r) => <li key={r}>{r}</li>)}</ul>
                </div>
                <Button className="vp-gold-bg rounded-sm font-semibold hover:opacity-90" onClick={() => open(j)}>Apply now</Button>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">Don’t see your role? Send a speculative application to <span className="font-medium text-foreground">{COMPANY.careersEmail}</span>. VaPicha is an equal-opportunity employer.</p>
        </Container>
      </section>

      <Dialog open={job !== null} onOpenChange={(o) => { if (!o && !submit.loading) setJob(null) }}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader><DialogTitle>{job?.title}</DialogTitle><DialogDescription>{job ? `${job.team} · ${job.location}` : ''}</DialogDescription></DialogHeader>
          {done ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center"><CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-400" /><p className="font-medium">Application received</p><p className="text-sm text-muted-foreground">Our people team will review it and reply to {f.email}. Please email your CV to {COMPANY.careersEmail} quoting “{job?.title}”.</p></div>
          ) : (
            <div className="grid gap-4 overflow-y-auto">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-1.5"><Label htmlFor="j-name">Full name *</Label><Input id="j-name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
                <div className="grid gap-1.5"><Label htmlFor="j-email">Email *</Label><Input id="j-email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
                <div className="grid gap-1.5"><Label htmlFor="j-phone">Phone</Label><Input id="j-phone" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} /></div>
                <div className="grid gap-1.5"><Label htmlFor="j-li">LinkedIn or portfolio</Label><Input id="j-li" value={f.linkedin} onChange={(e) => setF({ ...f, linkedin: e.target.value })} /></div>
              </div>
              <div className="grid gap-1.5"><Label htmlFor="j-msg">Why this role?</Label><Textarea id="j-msg" rows={4} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} /></div>
              <label className="flex items-start gap-2 text-sm text-muted-foreground"><Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" /><span>I agree to VaPicha processing my application under the <Link to="/site/legal/privacy" className="underline">Privacy Policy</Link>.</span></label>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setJob(null)} disabled={submit.loading}>{done ? 'Close' : 'Cancel'}</Button>
            {!done ? <Button className="vp-gold-bg hover:opacity-90" onClick={apply} disabled={submit.loading}>{submit.loading ? 'Sending…' : 'Submit application'}</Button> : null}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
