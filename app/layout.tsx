import type { Metadata } from 'next';
import './globals.css';
// All site styles load here, once, in this order. Importing them from pages lets the production build reorder them, which breaks the dark theme.
import './redesign.css';
import './product-motion.css';
import './bank-strip.css';
import './dark-theme.css';
import './contact-compliance.css';
import './theme.css';
import './maintenance.css';
import './pages.css';
export const metadata: Metadata = { title: 'VaPicha — More lending. Less paperwork.', description: 'Lending software built for Nigerian microfinance banks, cooperatives and fintechs. Originate, manage and report loans in one connected platform.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" data-theme="dark" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem('vapicha-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`}}/>{children}</body></html>; }
