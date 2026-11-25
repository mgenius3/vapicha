import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { SiteShell, PageHero } from '../site-shell';
import { COMPANY } from '../site-content';
import DemoForm from '../demo-form';

export const metadata: Metadata = { title: 'Contact — VaPicha', description: 'Book a demo, request a quote or ask the VaPicha team anything.' };

export default function ContactPage() {
 return <SiteShell>
  <PageHero eyebrow="CONTACT US" title="Let’s talk about" accent="your lending." text="Book a live demo, request a quote or ask us anything. A member of our business team will get back to you."/>
  <section className="page-section"><div className="container contact-grid">
   <div className="contact-card"><h2>Send us a message</h2><DemoForm subject="VaPicha website enquiry" submitLabel="Send message"/><p className="form-note">By sending, you agree to VaPicha processing your details to respond, as described in our <Link href="/legal/privacy">Privacy Policy</Link>.</p></div>
   <aside className="contact-aside">
    <div className="mission-card"><h2>Get in touch</h2><ul className="contact-details">
     <li><MapPin size={17}/><div><small>OFFICE</small>{COMPANY.address}</div></li>
     <li><Mail size={17}/><div><small>EMAIL</small><a href={'mailto:'+COMPANY.email}>{COMPANY.email}</a></div></li>
     <li><Phone size={17}/><div><small>PHONE</small>{COMPANY.phones.map(p=><a key={p} href={'tel:'+p.replace(/\s/g,'')}>{p}</a>)}</div></li>
     <li><MessageCircle size={17}/><div><small>WHATSAPP</small><a href="https://wa.me/2349111100007" target="_blank" rel="noopener noreferrer">Chat with us</a></div></li>
    </ul></div>
    <div className="page-card"><p>Existing customer needing help? Contact your VaPicha support team on-site, by email, call or WhatsApp.</p></div>
   </aside>
  </div></section>
 </SiteShell>;
}
