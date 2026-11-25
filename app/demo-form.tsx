'use client';
import { useState, type FormEvent } from 'react';
import { Mail } from 'lucide-react';

// FormSubmit relays the submission by email, so no server is needed.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/business@vapicha.africa';
const CC_EMAILS = 'info@ivillagetech.com';

/** Sends a form's fields to the business inbox. Throws with a readable message on failure. */
export async function sendToBusiness(form: HTMLFormElement, subject: string) {
 const { website, ...fields } = Object.fromEntries(new FormData(form));
 const response = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ ...fields, _cc: CC_EMAILS, _replyto: fields.email, _subject: subject, _template: 'table', _captcha: 'false', _honey: website }) });
 const result = await response.json();
 if (!response.ok || String(result.success) !== 'true') throw new Error(result.message || 'Your request could not be sent. Please try again.');
}

export function useSend(subject: string) {
 const [state, setState] = useState<'idle'|'sending'|'sent'|'error'>('idle');
 const [error, setError] = useState('');
 async function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  setState('sending');
  try { await sendToBusiness(form, subject); setState('sent'); form.reset(); }
  catch (err) { setState('error'); setError(err instanceof Error ? err.message : 'Your request could not be sent. Please try again.'); }
 }
 return { state, error, submit };
}

export function Honeypot() { return <div className="contact-trap" aria-hidden="true"><label>Leave this blank<input name="website" tabIndex={-1} autoComplete="off"/></label></div>; }

export function FormStatus({ state, error, sent }: { state: string; error: string; sent: string }) {
 if (state === 'sent') return <p className="form-status" role="status">{sent}</p>;
 if (state === 'error') return <p className="form-status form-error" role="alert">{error} You can also email <a href="mailto:business@vapicha.africa">business@vapicha.africa</a>.</p>;
 return null;
}

export default function DemoForm({ subject = 'VaPicha demo request', submitLabel = 'Send demo request' }: { subject?: string; submitLabel?: string }) {
 const { state, error, submit } = useSend(subject);
 return <form onSubmit={submit}>
 <div className="form-grid">
 <label>Your name<input name="name" autoComplete="name" placeholder="Your full name" required maxLength={150}/></label>
 <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required maxLength={254}/></label>
 <label>Institution<input name="institution" autoComplete="organization" placeholder="Organization name" required maxLength={200}/></label>
 <label>Institution type<select name="type">{['Microfinance bank','Cooperative','Fintech lender','NGO / MFI','Thrift & savings group','Other'].map(t=><option key={t}>{t}</option>)}</select></label>
 <label className="full-width">What would you like to improve?<textarea name="message" placeholder="Tell us about your lending operations" rows={3} maxLength={5000}/></label>
 </div>
 <Honeypot/>
 <button className="button" type="submit" disabled={state==='sending'}>{state==='sending'?'Sending…':submitLabel} <Mail size={17}/></button>
 <FormStatus state={state} error={error} sent="Your request has been sent. Our business team will be in touch."/>
 </form>;
}
