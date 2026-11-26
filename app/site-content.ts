// Website copy for the inner pages, adapted from the core banking app's website export
// (docs/core-banking-site-export/siteData.ts). Company facts match the live landing page.
import {
  ShieldCheck, Cloud, Landmark, Zap, BarChart3, Users, Smartphone, Receipt, Building2, Scale, Wallet,
  BadgeCheck, Layers, Lock, Handshake, Lightbulb, HeartHandshake, Target, KeyRound, Mail, Plug, FileCheck2,
  Repeat, LifeBuoy, Award, type LucideIcon,
} from 'lucide-react';

export const COMPANY = {
  name: 'VaPicha',
  legalName: 'Inclusive Village Ltd',
  email: 'hello@vapicha.africa',
  phones: ['+234 911 110 0007', '+234 913 600 1592'],
  address: 'Lagos, Nigeria',
  policyDate: '25 November 2026',
};

type Item = { icon: LucideIcon; title: string; text: string };

export const ADVANTAGES: Item[] = [
  { icon: Scale, title: 'Built for Nigerian regulation', text: 'Regulatory returns, credit provisioning, KYC tier limits, stamp duty and audit trails are part of the platform — not bolted on.' },
  { icon: Cloud, title: 'Cloud-based, zero hardware', text: 'Run every branch from a browser. No servers, no installations, no upgrade weekends — new capabilities arrive automatically.' },
  { icon: ShieldCheck, title: 'Bank-grade controls', text: 'Maker-checker approvals, role-based access, transaction 2FA, AML monitoring and enforced day-close.' },
  { icon: Layers, title: 'One platform, every function', text: 'Core banking, lending, channels, accounting, HR & payroll and analytics share one ledger — reports always agree with the books.' },
  { icon: Zap, title: 'Live in days', text: 'Guided configuration, data migration and a parallel run get you from contract to go-live quickly and safely.' },
  { icon: Wallet, title: 'Naira subscription pricing', text: 'Predictable monthly plans that grow with you. Add modules, users and branches when you need them.' },
];

export type Solution = { id: string; icon: LucideIcon; title: string; summary: string; points: string[] };
export const SOLUTIONS: Solution[] = [
  { id: 'core', icon: Landmark, title: 'Core Banking & Accounts', summary: 'Customers, KYC/BVN, current and savings accounts, products, charges and a real-time ledger.', points: ['Individual, group and corporate customers', 'Configurable account products, fees, interest and penalties', 'NUBAN account numbers and KYC tier limits', 'Statements and transaction receipts with verification codes'] },
  { id: 'operations', icon: Building2, title: 'Branch Operations', summary: 'Teller tills and vaults, cash postings, transfers, reversals and disciplined business-day control.', points: ['Till and vault management with balancing', 'Deposits, withdrawals, intra- and inter-bank transfers', 'Maker-checker reversals and backdating', 'End-of-day, end-of-week and year-end closure'] },
  { id: 'lending', icon: BadgeCheck, title: 'Lending', summary: 'Loan origination to repayment and provisioning — for individual, group and wholesale on-lending.', points: ['Loan products, schedules, restructuring and write-off', 'Group lending including Adashe, Esusu and Ajo', 'Loan classification and provisioning reports', 'Multi-loan recovery, overdrafts and fixed deposits'] },
  { id: 'digital', icon: Smartphone, title: 'Digital Channels', summary: 'Internet banking, mobile apps, USSD, agency banking and cards for your customers.', points: ['Personal and corporate internet banking with 2FA', 'Corporate initiator/authoriser workflows', 'POS and agency banking', 'Card management and third-party integrations'] },
  { id: 'payments', icon: Receipt, title: 'Bills & Payments', summary: 'Airtime, data, electricity, cable TV and other bills across branch, agent and online channels.', points: ['Bills payment through leading Nigerian billers', 'Inward and outward interbank transfers', 'Automatic refunds when a payment fails', 'Tokens and PINs printed on receipts'] },
  { id: 'risk', icon: Lock, title: 'Risk, Compliance & Reporting', summary: 'AML transaction monitoring, regulatory returns, reconciliation and a complete audit trail.', points: ['Rule-based AML monitoring and alerts', 'Regulatory returns and prudential ratios', 'Financial, credit and operational reports', 'Reconciliation system'] },
  { id: 'people', icon: Users, title: 'HR & Payroll', summary: 'The employee lifecycle on the same platform that controls staff roles and permissions.', points: ['Employees, organisation, grades and leave', 'Payroll with PAYE, pension and NHF', 'Appraisals, training and recruitment', 'Exits and clearance'] },
  { id: 'analytics', icon: BarChart3, title: 'Analytics & Automation', summary: 'Scheduled jobs, standing orders, alerts and dashboards that keep operations running.', points: ['Interest accrual, dormancy and fee jobs', 'Standing orders and alert rules', 'Branch and management dashboards', 'Data upload and migration tools'] },
];

export const SEGMENTS = [
  { title: 'Microfinance banks', text: 'Unit, state and national MFBs, with one workspace across every branch.' },
  { title: 'Cooperatives', text: 'Member savings, contributions and loans with full transparency.' },
  { title: 'Fintech lenders', text: 'Digital lending workflows that connect to the rest of your stack.' },
  { title: 'NGOs, MFIs & savings groups', text: 'Mission-led lending with consistent processes and clear records.' },
];

export const IMPLEMENTATION: Item[] = [
  { icon: Cloud, title: 'Configure', text: 'Products, charges, chart of accounts, branches, roles and approval rules set up for your institution.' },
  { icon: Repeat, title: 'Migrate', text: 'Customers, balances, loans, deposits and ledger balances moved across from your current system.' },
  { icon: KeyRound, title: 'Train & parallel-run', text: 'Role-based training for your team, with results checked against your existing system.' },
  { icon: LifeBuoy, title: 'Go live & grow', text: 'Switch over with on-site, email, call and WhatsApp support, then add modules and branches as you grow.' },
];

export type Feature = { id: string; eyebrow: string; title: string; text: string; points: string[]; shot: 'dashboard' | 'teller' | 'loans' | 'web' | 'bills' | 'reports' };
export const FEATURES: Feature[] = [
  { id: 'dashboard', eyebrow: 'Command centre', title: 'See the whole institution at a glance', text: 'Deposits, loan book, inflows and outflows, branch performance and recent postings, all from the same ledger your accountants use.', points: ['Operations and management dashboards', 'Branch, product and officer views', 'Transaction monitoring with AML alerts'], shot: 'dashboard' },
  { id: 'teller', eyebrow: 'Branch operations', title: 'Fast, controlled counter service', text: 'Tellers find customers in seconds, see balances and KYC limits, and post deposits, withdrawals and transfers — each confirmed with a second factor.', points: ['Tills and vault with balancing and end-of-day checks', 'Maker-checker reversals', 'Printable receipts with verification codes'], shot: 'teller' },
  { id: 'lending', eyebrow: 'Lending', title: 'From application to provisioning', text: 'Book loans from configurable products, track repayment schedules and days past due, and keep the portfolio classified for reporting.', points: ['Restructuring, moratorium and write-off', 'Individual and group loans', 'Multi-loan recovery'], shot: 'loans' },
  { id: 'digital', eyebrow: 'Internet banking', title: 'Personal and corporate online banking', text: 'Customers check balances, download statements, transfer to any Nigerian bank and pay bills. Companies get initiator and authoriser roles.', points: ['Two-factor authentication on payments', 'Saved beneficiaries and daily limits', 'Receipts for every transaction'], shot: 'web' },
  { id: 'bills', eyebrow: 'Bills & payments', title: 'Bills payment on every channel', text: 'Airtime, data, electricity and cable TV — at the branch, through agents and online. Checked with the biller first, refunded automatically if it fails.', points: ['Leading Nigerian billers', 'Electricity tokens and PINs on the receipt', 'Automatic refunds'], shot: 'bills' },
  { id: 'reporting', eyebrow: 'Compliance', title: 'Reporting from live data', text: 'Regulatory returns, prudential ratios, financial statements and operational reports come straight from the ledger — no spreadsheets, no re-keying.', points: ['Financial, credit and operational reports', 'A complete audit trail of every action', 'End-of-day, week and year closure controls'], shot: 'reports' },
];

export const SECURITY: Item[] = [
  { icon: KeyRound, title: 'Hardware tokens', text: 'One-time-code tokens assigned to staff members.' },
  { icon: Smartphone, title: 'Authenticator apps', text: 'Google or Microsoft Authenticator for staff and customers.' },
  { icon: Mail, title: 'Email codes', text: 'One-time codes sent to the user’s sign-in address.' },
  { icon: ShieldCheck, title: 'Maker-checker', text: 'Two-person approval on sensitive actions and corporate payments.' },
  { icon: FileCheck2, title: 'Audit trail', text: 'Every posting, approval and setting change recorded.' },
  { icon: Plug, title: 'Integrations', text: 'Interbank transfers, billers and third-party services connected.' },
];

export const VALUES: Item[] = [
  { icon: HeartHandshake, title: 'Integrity', text: 'We handle other people’s money and data. We do what we say, and we say what we do.' },
  { icon: Target, title: 'Customer focus', text: 'Our customers’ members, borrowers, auditors and regulators matter to us too.' },
  { icon: Lightbulb, title: 'Craft', text: 'Financial software should be precise, fast and pleasant to use. We sweat the details.' },
  { icon: Handshake, title: 'Partnership', text: 'We succeed only when the institutions we serve grow — financially and in capability.' },
];

export const MILESTONES = [
  { year: 'Founded', text: 'Started by people frustrated by paper files and outdated systems in Nigerian lending.' },
  { year: 'Core launch', text: 'Core banking, teller operations, accounting and reporting go live for the first institutions.' },
  { year: 'Expansion', text: 'Lending, agency banking, HR & payroll and analytics added to the platform.' },
  { year: 'Digital', text: 'Internet banking, mobile apps, USSD, bills payment and transaction 2FA launched.' },
];

export const COMMITMENTS: Item[] = [
  { icon: ShieldCheck, title: 'Security first', text: 'An integrated management system guided by recognised information security and quality principles, and the Nigeria Data Protection Act 2023.' },
  { icon: Building2, title: 'Regulation by design', text: 'Nigerian regulatory requirements shape our product decisions from the start — not after an audit finding.' },
  { icon: Award, title: 'Partnership for the long term', text: 'Naira pricing, guided onboarding and a support team who stay with you after go-live.' },
];

export type Job = { id: string; title: string; team: string; location: string; type: string; summary: string; requirements: string[] };
export const JOBS: Job[] = [
  { id: 'se-backend', title: 'Senior Software Engineer, Core Ledger', team: 'Engineering', location: 'Lagos / Hybrid', type: 'Full-time', summary: 'Own the posting engine, reversals and ledger integrity that thousands of daily transactions depend on.', requirements: ['5+ years building transactional systems', 'Strong SQL and TypeScript', 'Experience with financial ledgers or payments is a plus'] },
  { id: 'fe-engineer', title: 'Frontend Engineer', team: 'Engineering', location: 'Lagos / Remote (Nigeria)', type: 'Full-time', summary: 'Build fast, accessible screens for tellers, credit officers and customers.', requirements: ['3+ years with React and TypeScript', 'An eye for clean, usable interfaces', 'Comfort with data-heavy tables and forms'] },
  { id: 'implementation', title: 'Implementation Consultant', team: 'Customer Success', location: 'Lagos, Abuja or Port Harcourt', type: 'Full-time', summary: 'Lead customer go-lives: configuration, data migration, training and parallel runs.', requirements: ['Banking or lending operations experience', 'Good understanding of Nigerian regulatory requirements', 'Excellent communication and training skills'] },
  { id: 'sales-exec', title: 'Enterprise Sales Executive', team: 'Sales', location: 'Lagos / Field', type: 'Full-time', summary: 'Win microfinance bank, cooperative and lender customers across Nigeria.', requirements: ['Track record selling software to financial institutions', 'Relationships with MFB executives', 'Consultative, numbers-driven approach'] },
  { id: 'compliance', title: 'Information Security & Compliance Analyst', team: 'Risk', location: 'Lagos', type: 'Full-time', summary: 'Run our integrated management system, audits and data-protection programme.', requirements: ['Experience with ISO 27001 or similar frameworks', 'Knowledge of the NDPA 2023', 'Attention to detail and documentation'] },
];

export const PERKS = ['Competitive salary and annual bonus', 'HMO for you and your family', 'Pension and learning budget', 'Hybrid working and modern equipment', 'Meaningful work powering financial inclusion'];

// Headline numbers for the home page (from the core banking website export).
export const STATS = [
  { value: '20+', label: 'Integrated banking modules' },
  { value: '4-eyes', label: 'Maker-checker on every sensitive action' },
  { value: '2FA', label: 'On every staff & customer transaction' },
  { value: '0', label: 'Servers for your institution to buy or run' },
];

// Subscription plans (from the core banking website export). Monthly prices, before 7.5% VAT.
export const PLANS = [
  { name: 'Starter', price: '₦250,000', for: 'Unit MFBs going digital', features: ['Core banking & accounts', 'Teller, till & vault', 'GL & financial accounting', 'Regulatory reporting', '10 users · 1 branch'] },
  { name: 'Growth', price: '₦600,000', for: 'State MFBs scaling up', featured: true, features: ['Everything in Starter', 'Loans, savings & investments', 'Agency banking & cards', 'AML monitoring & BI', '40 users · 5 branches'] },
  { name: 'Enterprise', price: '₦1,200,000', for: 'National MFBs & banks', features: ['Every module', 'HR & payroll, PFI lending', 'SME marketplace & open API', 'Priority support', '150 users · 25 branches'] },
];
export const PRICING_NOTE = 'Monthly prices shown before 7.5% VAT. Quarterly billing saves 5%; annual prepayment saves about 15%. A one-off implementation fee applies.';
