'use client';
import { ArrowUpRight, Wrench } from 'lucide-react';
import './redesign.css';
import './dark-theme.css';
import './contact-compliance.css';
import './theme.css';
import './maintenance.css';
import ThemeToggle from './theme-toggle';
import DemoForm from './demo-form';

export default function Maintenance() {
 return <main className="maintenance">
 <div className="maintenance-top"><span className="brand footer-logo"><img className="brand-dark" src="/logo-white.png" alt="VaPicha"/><img className="brand-light" src="/logo.png" alt="VaPicha"/></span><ThemeToggle/></div>
 <div className="maintenance-copy">
 <span className="maintenance-icon" aria-hidden="true"><Wrench size={22}/></span>
 <div className="eyebrow"><span/>WE’LL BE RIGHT BACK</div>
 <h1>We’re making a few <span>improvements.</span></h1>
 <p>VaPicha’s website is under scheduled maintenance. You can still reach our business team using the form below, and we’ll get back to you.</p>
 </div>
 <section className="maintenance-card" aria-labelledby="maintenance-form-title">
 <h2 id="maintenance-form-title">Get in touch</h2>
 <DemoForm/>
 </section>
 <div className="maintenance-contact"><a href="mailto:business@vapicha.africa">business@vapicha.africa <ArrowUpRight size={12}/></a><a href="tel:+2349111100007">+234 911 110 0007</a><a href="tel:+2349136001592">+234 913 600 1592</a></div>
 <p className="maintenance-foot">©️ 2026 VaPicha | A Product of Inclusive Village Ltd.</p>
 </main>;
}
