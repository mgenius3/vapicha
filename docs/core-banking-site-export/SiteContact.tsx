// Contact us: demo / enquiry form (saved as a lead) and company contact details.
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useSubmitWebsiteLead } from '../../hooks/backend/website'
import { Input } from '../../lib/shadcn/input'
import { Textarea } from '../../lib/shadcn/textarea'
import { Label } from '../../lib/shadcn/label'
import { Checkbox } from '../../lib/shadcn/checkbox'
import { Button } from '../../lib/shadcn/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../lib/shadcn/select'
import { errorMessage } from '../../utils/errors'
import { COMPANY } from './siteData'
import { Container, PageHero } from './ui'

const TOPICS = ['Book a demo', 'Pricing & quote', 'Implementation & migration', 'Partnership', 'Support', 'Media & press', 'Other']

export default function SiteContact() {
  const submit = useSubmitWebsiteLead()
  const [f, setF] = useState({ name: '', email: '', phone: '', institution: '', role: '', topic: 'Book a demo', message: '' })
  const [consent, setConsent] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState(false)
  const set = (k: keyof typeof f, v: string) => setF({ ...f, [k]: v })

  const send = async () => {
    setError(null)
    try {
      await submit.trigger({ kind: f.topic === 'Book a demo' ? 'demo' : 'contact', ...f, consent }).result
      setDone(true)
    } catch (e) { setError(errorMessage(e)) }
  }

  const details = [
    { icon: MapPin, label: 'Office', value: COMPANY.address },
    { icon: Mail, label: 'Sales', value: COMPANY.salesEmail },
    { icon: Mail, label: 'General', value: COMPANY.email },
    { icon: Phone, label: 'Phone', value: COMPANY.phone },
    { icon: Clock, label: 'Hours', value: COMPANY.hours },
  ]

  return (
    <>
      <PageHero eyebrow="Contact us" title="Let’s talk about your bank" text="Book a live demo, request a quote or ask us anything. A member of our team will respond within one business day." />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="rounded-lg border border-border bg-card p-8 shadow-retool-sm">
            {done ? (
              <div className="flex flex-col items-center gap-3 py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                <h2 className="vp-serif text-2xl font-semibold">Thank you, {f.name.split(' ')[0]}</h2>
                <p className="max-w-md text-muted-foreground">We have received your message and will be in touch at {f.email} within one business day.</p>
              </div>
            ) : (
              <div className="space-y-5">
                <h2 className="vp-serif text-2xl font-semibold">Send us a message</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-1.5"><Label htmlFor="c-name">Full name *</Label><Input id="c-name" value={f.name} onChange={(e) => set('name', e.target.value)} autoComplete="name" /></div>
                  <div className="grid gap-1.5"><Label htmlFor="c-email">Work email *</Label><Input id="c-email" type="email" value={f.email} onChange={(e) => set('email', e.target.value)} autoComplete="email" /></div>
                  <div className="grid gap-1.5"><Label htmlFor="c-phone">Phone</Label><Input id="c-phone" value={f.phone} onChange={(e) => set('phone', e.target.value)} autoComplete="tel" /></div>
                  <div className="grid gap-1.5"><Label htmlFor="c-inst">Institution</Label><Input id="c-inst" value={f.institution} onChange={(e) => set('institution', e.target.value)} autoComplete="organization" /></div>
                  <div className="grid gap-1.5"><Label htmlFor="c-role">Job title</Label><Input id="c-role" value={f.role} onChange={(e) => set('role', e.target.value)} autoComplete="organization-title" /></div>
                  <div className="grid gap-1.5">
                    <Label>Topic</Label>
                    <Select value={f.topic} onValueChange={(v) => set('topic', v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{TOPICS.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-1.5"><Label htmlFor="c-msg">How can we help? *</Label><Textarea id="c-msg" rows={5} value={f.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us about your institution, branches and what you’d like to see." /></div>
                <label className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Checkbox checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
                  <span>I agree that VaPicha may process my details to respond to this request, as described in the <Link to="/site/legal/privacy" className="font-medium text-foreground underline">Privacy Policy</Link>.</span>
                </label>
                {error ? <p className="text-sm text-destructive">{error}</p> : null}
                <Button size="lg" className="vp-gold-bg rounded-sm font-semibold hover:opacity-90" onClick={send} disabled={submit.loading}>{submit.loading ? 'Sending…' : 'Send message'}</Button>
              </div>
            )}
          </div>
          <aside className="space-y-6">
            <div className="vp-navy space-y-5 rounded-lg p-8">
              <h2 className="vp-serif text-2xl font-semibold">Get in touch</h2>
              <ul className="space-y-4 text-sm">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-3"><d.icon className="vp-gold-text mt-0.5 h-4 w-4 shrink-0" /><div><p className="vp-on-navy-muted text-xs uppercase tracking-wide">{d.label}</p><p>{d.value}</p></div></li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
              Existing customer needing help? Log a ticket from inside the platform or email <span className="font-medium text-foreground">{COMPANY.email}</span> with your bank code.
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}
