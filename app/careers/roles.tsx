'use client';
// Open roles list with an "Apply now" dialog that emails the application to the business inbox.
import { useRef, useState } from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Send, X } from 'lucide-react';
import { JOBS, type Job } from '../site-content';
import { FormStatus, Honeypot, useSend } from '../demo-form';

function ApplyForm({ job }: { job: Job }) {
 const { state, error, submit } = useSend(`Job application: ${job.title}`);
 return <form onSubmit={submit}>
  <input type="hidden" name="role" value={job.title}/>
  <div className="form-grid">
   <label>Full name<input name="name" autoComplete="name" required maxLength={150}/></label>
   <label>Email<input name="email" type="email" autoComplete="email" required maxLength={254}/></label>
   <label>Phone<input name="phone" type="tel" autoComplete="tel" maxLength={40}/></label>
   <label>LinkedIn or portfolio<input name="linkedin" type="url" placeholder="https://" maxLength={300}/></label>
   <label className="full-width">Why this role?<textarea name="message" rows={4} maxLength={5000}/></label>
  </div>
  <p className="form-note">By applying, you agree to VaPicha processing your details as described in our <Link href="/legal/privacy">Privacy Policy</Link>. Please email your CV to <a href="mailto:business@vapicha.africa">business@vapicha.africa</a> quoting “{job.title}”.</p>
  <Honeypot/>
  <button className="button" type="submit" disabled={state==='sending'}>{state==='sending'?'Sending…':'Submit application'} <Send size={16}/></button>
  <FormStatus state={state} error={error} sent="Application sent. Our team will review it and reply by email."/>
 </form>;
}

export default function Roles() {
 const [job, setJob] = useState<Job | null>(null);
 const dialog = useRef<HTMLDialogElement>(null);
 function open(j: Job) { setJob(j); dialog.current?.showModal(); document.body.style.overflow='hidden'; }
 function close() { dialog.current?.close(); document.body.style.overflow=''; }
 return <>
  <div className="role-list">{JOBS.map(j=><article key={j.id} className="role">
   <div><div className="role-head"><h3>{j.title}</h3><span className="role-team">{j.team}</span></div>
    <p className="role-meta"><span><MapPin size={13}/> {j.location}</span><span><Briefcase size={13}/> {j.type}</span></p>
    <p>{j.summary}</p><ul>{j.requirements.map(r=><li key={r}>{r}</li>)}</ul></div>
   <button className="button" onClick={()=>open(j)}>Apply now</button>
  </article>)}</div>
  <dialog ref={dialog} aria-labelledby="apply-title" className="demo-dialog" onClose={()=>{document.body.style.overflow=''}} onClick={e=>{if(e.target===dialog.current)close()}}>
   <button className="dialog-close" onClick={close} aria-label="Close application"><X/></button>
   <h2 id="apply-title">{job?.title}</h2><p>{job?`${job.team} · ${job.location}`:''}</p>
   {job&&<ApplyForm key={job.id} job={job}/>}
  </dialog>
 </>;
}
