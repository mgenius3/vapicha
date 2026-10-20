import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VaPicha — More lending. Less paperwork.', description: 'Lending software built for Nigerian microfinance banks, cooperatives and fintechs. Originate, manage and report loans in one connected platform.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" data-theme="dark" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem('vapicha-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch(e){}`}}/>{children}</body></html>; }
