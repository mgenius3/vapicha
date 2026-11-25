// Drawn mock-ups of VaPicha screens for the product tour (illustrative data, not real customers).
// Adapted from docs/core-banking-site-export/screens/Shots.tsx without the charting library.
import type { ReactNode } from 'react';
import { ArrowDownLeft, ArrowUpRight, ShieldCheck, Zap, Tv, Smartphone, Wallet, CheckCircle2, Landmark, LayoutDashboard, Users, ArrowLeftRight, Receipt, FileBarChart } from 'lucide-react';
import type { Feature } from './site-content';

function Frame({ url, children }: { url: string; children: ReactNode }) {
 return <div className="shot"><div className="shot-bar"><i/><i/><i/><span>{url}</span></div><div className="shot-body" aria-hidden="true">{children}</div></div>;
}
const SIDE = [LayoutDashboard, Users, Wallet, ArrowLeftRight, Landmark, Receipt, FileBarChart];
function AppShell({ children, active = 0 }: { children: ReactNode; active?: number }) {
 return <div className="shot-app"><div className="shot-side"><span className="shot-mark"/>{SIDE.map((I,i)=><I key={i} size={14} className={i===active?'on':''}/>)}</div><div className="shot-main">{children}</div></div>;
}
const Stat = ({ label, value, tone }: { label: string; value: string; tone?: 'up'|'down' }) => <div className="shot-card shot-stat"><small>{label}</small><b className={tone||''}>{value}</b></div>;
const Bars = ({ values, labels }: { values: number[]; labels: string | string[] }) => <div className="shot-bars">{values.map((v,i)=><div key={i}><i style={{height:`${v}%`}}/><small>{labels[i]}</small></div>)}</div>;
const Row = ({ a, b, className }: { a: ReactNode; b: ReactNode; className?: string }) => <div className={'shot-row '+(className||'')}><span>{a}</span><span>{b}</span></div>;

function DashboardShot() {
 return <Frame url="control.vapicha.africa/dashboard"><AppShell>
  <p className="shot-title">Operations dashboard</p>
  <div className="shot-grid g4"><Stat label="Total deposits" value="₦4.82B"/><Stat label="Loan book" value="₦2.17B"/><Stat label="Inflow 24h" value="+₦86.4M" tone="up"/><Stat label="Outflow 24h" value="−₦41.9M" tone="down"/></div>
  <div className="shot-grid g-wide">
   <div className="shot-card"><p className="shot-sub">Deposit growth (₦M)</p><Bars values={[32,38,35,44,49,47,58,62,60,71,76,84]} labels="JFMAMJJASOND"/></div>
   <div className="shot-card"><p className="shot-sub">Recent postings</p>{([['Cash deposit','+₦250,000',true],['Transfer out','−₦1,200,000',false],['Loan repayment','+₦84,500',true],['Cable TV bill','−₦19,100',false]] as const).map(([n,a,c])=><Row key={n} a={<>{c?<ArrowDownLeft size={11} className="up"/>:<ArrowUpRight size={11}/>} {n}</>} b={<b>{a}</b>}/>)}</div>
  </div>
 </AppShell></Frame>;
}

function TellerShot() {
 return <Frame url="control.vapicha.africa/deposit"><AppShell active={2}>
  <p className="shot-title">Cash deposit</p>
  <div className="shot-grid g2">
   <div className="shot-card"><p className="shot-sub muted">Customer account</p><p><b>Adebayo Ogunlesi · 0123456785</b></p><div className="shot-grid g3"><Stat label="Balance" value="₦2.03M"/><Stat label="KYC" value="Tier 3"/><Stat label="Status" value="Active"/></div><Row className="shot-field" a="Amount" b={<b>₦250,000.00</b>}/><Row className="shot-field" a="Instrument" b="Cash · Till 03"/></div>
   <div className="shot-card"><p><b><ShieldCheck size={12}/> Authorise transaction</b></p><p className="muted">Enter the code from your token</p><div className="shot-code">{'418207'.split('').map((d,i)=><span key={i}>{d}</span>)}</div><div className="shot-btn">Authorise</div></div>
  </div>
 </AppShell></Frame>;
}

function LoanShot() {
 const rows = [['Performing','₦1.84B',85,'#3ccf8e'],['Watchlist','₦212M',10,'#f4c67c'],['Substandard','₦74M',4,'#f59e5b'],['Doubtful','₦31M',2,'#f87171']] as const;
 return <Frame url="control.vapicha.africa/loans"><AppShell active={4}>
  <p className="shot-title">Loan portfolio &amp; provisioning</p>
  <div className="shot-grid g3"><Stat label="Portfolio" value="₦2.17B"/><Stat label="PAR 30" value="4.8%"/><Stat label="Provision" value="₦48.6M"/></div>
  <div className="shot-card">{rows.map(([n,v,w,c])=><div key={n} className="shot-meter"><span>{n}</span><i><b style={{width:`${w}%`,background:c}}/></i><span>{v}</span></div>)}</div>
  <div className="shot-card shot-table"><div className="head"><span>Borrower</span><span>Principal</span><span>Due</span><span>Status</span></div>{[['Chinwe Okonkwo','₦1.5M','12 Mar','Current'],['Bello Stores Ltd','₦8.0M','28 Feb','Current'],['Emeka Nwosu','₦650K','03 Feb','31 DPD']].map(r=><div key={r[0]}>{r.map((c,i)=><span key={i} className={i===3&&c!=='Current'?'down':''}>{c}</span>)}</div>)}</div>
 </AppShell></Frame>;
}

function WebBankingShot() {
 return <Frame url="internet banking"><div className="shot-main">
  <Row a={<span className="shot-title">Good morning, Funmilayo</span>} b={<span className="shot-pill">Personal internet banking</span>}/>
  <div className="shot-grid g3"><div className="shot-card shot-balance"><small>Total balance</small><b>₦3,691,973.12</b></div><Stat label="Savings · 0145…" value="₦3.12M"/><Stat label="Current · 0187…" value="₦571K"/></div>
  <div className="shot-grid g2">
   <div className="shot-card"><p><b>Transfer</b></p><div className="shot-field">To · Zenith Bank · 2087654321</div><Row className="shot-field" a="Amount" b={<b>₦75,000</b>}/><Row className="muted" a="Fee + VAT" b="₦53.75"/></div>
   <div className="shot-card"><p><b><CheckCircle2 size={12} className="up"/> Transfer successful</b></p><p className="muted">Reference TRF-20260114-K3J9Q2</p><p className="muted">Confirmed with two-factor authentication</p><div className="shot-field center">Download receipt</div></div>
  </div>
 </div></Frame>;
}

function BillsShot() {
 const cats = [[Smartphone,'Airtime'],[Zap,'Electricity'],[Tv,'Cable TV'],[Wallet,'Data']] as const;
 return <Frame url="control.vapicha.africa/bills"><AppShell active={5}>
  <p className="shot-title">Bills payment</p>
  <div className="shot-grid g4">{cats.map(([I,n],i)=><div key={n} className={'shot-card shot-cat'+(i===1?' on':'')}><I size={14}/>{n}</div>)}</div>
  <div className="shot-grid g2">
   <div className="shot-card"><div className="shot-field">Ikeja Electric Prepaid</div><div className="shot-field">Meter 45012345678</div><Row a={<span className="muted">Customer</span>} b="TUNDE BAKARE"/><Row a={<span className="muted">Amount + fee</span>} b={<b>₦10,100.00</b>}/></div>
   <div className="shot-card center"><p className="muted">Token</p><p className="shot-token">4821-0937-5521-0846-3310</p><p className="muted">147.1 kWh</p></div>
  </div>
 </AppShell></Frame>;
}

function ReportsShot() {
 return <Frame url="control.vapicha.africa/reports"><AppShell active={6}>
  <p className="shot-title">Regulatory &amp; management reporting</p>
  <div className="shot-grid g3"><Stat label="Capital adequacy" value="21.4%"/><Stat label="Liquidity ratio" value="38.2%"/><Stat label="Returns due" value="2"/></div>
  <div className="shot-grid g2">
   <div className="shot-card"><p className="shot-sub">Net interest income (₦M)</p><Bars values={[58,71,87,100]} labels={['Q1','Q2','Q3','Q4']}/></div>
   <div className="shot-card">{([['Statement of position','Submitted'],['Loans by sector','Submitted'],['Prudential return','Due 15 Feb']] as const).map(([n,s])=><Row key={n} a={n} b={<span className={s.startsWith('Due')?'warn':'muted'}>{s}</span>}/>)}</div>
  </div>
 </AppShell></Frame>;
}

const SHOTS: Record<Feature['shot'], () => ReactNode> = { dashboard: DashboardShot, teller: TellerShot, loans: LoanShot, web: WebBankingShot, bills: BillsShot, reports: ReportsShot };
export function Screen({ name }: { name: Feature['shot'] }) { const S = SHOTS[name]; return <S/>; }
