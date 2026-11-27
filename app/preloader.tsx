'use client';
// Full-screen logo shown while the site first loads. Not shown again when moving between pages.
import { useEffect, useState } from 'react';

const MIN_MS = 600; // long enough to avoid a flash
const MAX_MS = 4000; // never hold the page behind a slow image

export default function Preloader() {
 const [done, setDone] = useState(false);
 const [gone, setGone] = useState(false);

 useEffect(() => {
  const start = performance.now();
  let minTimer: number | undefined;
  const finish = () => { minTimer = window.setTimeout(() => setDone(true), Math.max(0, MIN_MS - (performance.now() - start))); };
  const maxTimer = window.setTimeout(() => setDone(true), MAX_MS);
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish, { once: true });
  return () => { window.removeEventListener('load', finish); window.clearTimeout(minTimer); window.clearTimeout(maxTimer); };
 }, []);

 // Remove the overlay once the fade has finished.
 useEffect(() => {
  if (!done) return;
  const timer = window.setTimeout(() => setGone(true), 400);
  return () => window.clearTimeout(timer);
 }, [done]);

 if (gone) return null;
 return <div className={'preloader'+(done?' done':'')} aria-hidden="true"><img className="brand-dark" src="/logo-icon-white.png" alt="" width="130" height="128"/><img className="brand-light" src="/logo-icon-green.png" alt="" width="137" height="134"/></div>;
}
