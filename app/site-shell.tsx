'use client';
// Shared header, footer and page chrome for every VaPicha page.
import { useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, Linkedin, Instagram } from 'lucide-react';
import './redesign.css';
import './dark-theme.css';
import './contact-compliance.css';
import './theme.css';
import './pages.css';
import ThemeToggle from './theme-toggle';
import Maintenance from './maintenance';
import { COMPANY } from './site-content';

export const MAINTENANCE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

const NAV = [
 { href: '/solutions', label: 'Solutions' },
 { href: '/product', label: 'Product' },
 { href: '/#pricing', label: 'Pricing' },
 { href: '/about', label: 'About us' },
 { href: '/contact', label: 'Contact' },
];

const FOOTER = [
 { title: 'THE PLATFORM', links: [['/#platform', 'What we do'], ['/solutions', 'Solutions'], ['/product', 'Product tour'], ['/#pricing', 'Our plans'], ['/#security', 'Security & compliance']] },
 { title: 'COMPANY', links: [['/about', 'About us'], ['/careers', 'Careers'], ['/contact', 'Contact'], ['/#faqs', 'FAQs']] },
 { title: 'LEGAL', links: [['/legal/privacy', 'Privacy policy'], ['/legal/cookies', 'Cookie policy'], ['/legal/ims', 'IMS policy']] },
];

export function Logo() {
 return <Link href="/" aria-label="VaPicha home" className="brand footer-logo"><img className="brand-dark" src="/logo-white.png" alt="VaPicha"/><img className="brand-light" src="/logo.png" alt="VaPicha"/></Link>;
}

export function Header() {
 const [menu, setMenu] = useState(false);
 const pathname = usePathname();
 return <header id="top"><nav className="nav container"><Logo/><div className={'navlinks '+(menu?'open':'')}>{NAV.map(n=><Link key={n.href} href={n.href} aria-current={pathname===n.href?'page':undefined} onClick={()=>setMenu(false)}>{n.label}</Link>)}</div><ThemeToggle/><div className="nav-auth"><a className="sign-in" href="https://control.vapicha.africa/">Sign in</a><a className="button" href="https://control.vapicha.africa/auth/organization-signup">Sign up <ArrowUpRight size={16}/></a></div><button className="mobile-menu" aria-expanded={menu} aria-label={menu?'Close navigation':'Open navigation'} onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></nav></header>;
}

export function Footer() {
 return <footer><div className="container"><div className="footer-main footer-main-wide"><div className="footer-brand"><Logo/><p>lending software as a service for all lenders</p><span className="location"><span/> Lagos, Nigeria · Built with purpose.</span></div>
 {FOOTER.map(col=><div key={col.title}><h4>{col.title}</h4>{col.links.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div>)}
 <div><h4>LET’S CONNECT</h4><a href={'mailto:'+COMPANY.email}>{COMPANY.email} <ArrowUpRight size={12}/></a>{COMPANY.phones.map(p=><a key={p} href={'tel:'+p.replace(/\s/g,'')}>{p}</a>)}<div className="footer-social"><a href="#" aria-label="VaPicha on LinkedIn"><Linkedin size={15}/></a><a href="#" aria-label="VaPicha on X"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a><a href="#" aria-label="VaPicha on Instagram"><Instagram size={15}/></a></div></div>
 </div><div className="footer-bottom"><span>©️ 2026 VaPicha | A Product of Inclusive Village Ltd. All rights reserved.</span><span>Built for Nigeria. Designed for lenders. <ArrowUpRight size={12}/></span></div></div></footer>;
}

export function WhatsAppButton() {
 return <a className="whatsapp-button" href="https://wa.me/2349111100007" target="_blank" rel="noopener noreferrer" aria-label="Chat with VaPicha on WhatsApp (opens in a new tab)"><svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 .9A15 15 0 0 0 3.1 23.5L1 31l7.7-2A15 15 0 1 0 16 .9Zm0 27.3c-2.2 0-4.3-.6-6.2-1.7l-.4-.2-4.6 1.2L6 23l-.3-.5A12.3 12.3 0 1 1 16 28.2Zm6.8-9.2c-.4-.2-2.2-1.1-2.5-1.2-.4-.1-.6-.2-.9.2l-1.2 1.4c-.2.3-.4.3-.8.1-2.2-1.1-3.6-2-5-4.5-.4-.7.4-.6 1.1-2 .1-.3 0-.5 0-.7l-1.2-2.8c-.3-.7-.6-.6-.9-.6h-.7c-.3 0-.7.1-1 .5s-1.3 1.3-1.3 3.1 1.4 3.5 1.6 3.7c.2.3 2.6 4 6.3 5.6 2.3 1 3.2 1.1 4.3.9.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5Z"/></svg><span>Let’s chat</span></a>;
}

/** Wraps an inner page with the header and footer, or shows the maintenance screen. */
export function SiteShell({ children }: { children: ReactNode }) {
 if (MAINTENANCE) return <Maintenance/>;
 return <><a className="skip-link" href="#main-content">Skip to content</a><Header/><main id="main-content" className="subpage">{children}</main><Footer/><WhatsAppButton/></>;
}

export function Eyebrow({ children }: { children: ReactNode }) { return <div className="eyebrow"><span/>{children}</div>; }

export function PageHero({ eyebrow, title, accent, text, children }: { eyebrow: string; title: string; accent?: string; text: string; children?: ReactNode }) {
 return <section className="page-hero"><div className="container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}{accent&&<><br/><span>{accent}</span></>}</h1><p>{text}</p>{children}</div></section>;
}

export function SectionHeading({ eyebrow, title, accent, text, center }: { eyebrow: string; title: string; accent?: string; text?: string; center?: boolean }) {
 return <div className={'page-heading'+(center?' center':'')}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}{accent&&<><br/><span>{accent}</span></>}</h2>{text&&<p>{text}</p>}</div>;
}

export function CtaBand({ title = 'The next chapter of your lending starts here.', text = 'Tell us about your institution. We’ll show you what’s possible with VaPicha.' }: { title?: string; text?: string }) {
 return <section className="cta-section"><div className="container cta-inner"><div className="cta-circles"/><div><Eyebrow>LESS FRICTION. MORE FORWARD.</Eyebrow><h2>{title}</h2><p>{text}</p><Link className="button button-white" href="/contact">Let’s talk lending <ArrowUpRight size={18}/></Link><span className="cta-note">A real conversation. With real people.</span></div><div className="cta-symbol" aria-hidden="true">↗</div></div></section>;
}
