// Website copy and data for VaPicha (edit COMPANY to set real contact details).
import {
  ShieldCheck, Cloud, Landmark, Zap, BarChart3, Users, Smartphone, Receipt, Building2, Globe, Scale, Wallet,
  BadgeCheck, Layers, Lock, Handshake, Lightbulb, HeartHandshake, Target, type LucideIcon,
} from 'lucide-react'

export const COMPANY = {
  name: 'VaPicha',
  legalName: 'VaPicha Technologies Limited',
  product: 'VaPicha Core Banking Suite',
  tagline: 'The cloud core banking platform built for Nigerian banks',
  email: 'hello@vapicha.com',
  salesEmail: 'sales@vapicha.com',
  careersEmail: 'careers@vapicha.com',
  privacyEmail: 'privacy@vapicha.com',
  phone: '+234 (0) 700 VAPICHA',
  address: 'Victoria Island, Lagos, Nigeria',
  hours: 'Monday – Friday, 8:00am – 6:00pm WAT',
  policyDate: '1 January 2026',
}

export const NAV = [
  { to: '/site', label: 'Home', exact: true },
  { to: '/site/solutions', label: 'Solutions' },
  { to: '/site/product', label: 'Product' },
  { to: '/site/about', label: 'About us' },
  { to: '/site/careers', label: 'Careers' },
  { to: '/site/contact', label: 'Contact' },
]

export const STATS = [
  { value: '20+', label: 'Integrated banking modules' },
  { value: '4-eyes', label: 'Maker-checker on every sensitive action' },
  { value: '2FA', label: 'On every staff & customer transaction' },
  { value: '0', label: 'Servers for your bank to buy or run' },
]

export type Advantage = { icon: LucideIcon; title: string; text: string }
export const ADVANTAGES: Advantage[] = [
  { icon: Scale, title: 'Built for CBN regulation', text: 'Regulatory returns, credit provisioning, KYC tier limits, stamp duty and audit trails are native to the platform — not bolted on.' },
  { icon: Cloud, title: 'Cloud-native, zero hardware', text: 'Run every branch from a browser. No servers, no installations, no upgrade weekends — new capabilities arrive automatically.' },
  { icon: ShieldCheck, title: 'Bank-grade controls', text: 'Maker-checker approvals, role-based access, transaction 2FA (token, authenticator or email), AML monitoring and enforced day-close.' },
  { icon: Layers, title: 'One platform, every function', text: 'Core banking, lending, treasury, GL, channels, HR & payroll and analytics share one ledger — reports always agree with the books.' },
  { icon: Zap, title: 'Live in weeks', text: 'Guided configuration, batch data migration with tracers and a parallel run get you from contract to go-live fast and safely.' },
  { icon: Wallet, title: 'Subscription pricing', text: 'Predictable monthly or annual plans that grow with you. Add modules, users and branches only when you need them.' },
]

export type Solution = { id: string; icon: LucideIcon; title: string; summary: string; points: string[] }
export const SOLUTIONS: Solution[] = [
  { id: 'core', icon: Landmark, title: 'Core Banking & CASA', summary: 'Customers, KYC/BVN, current and savings accounts, products, charges and a real-time immutable ledger.', points: ['Individual, group and corporate customers with KYB', 'Configurable CASA products, fees, interest and penalties', 'NUBAN account numbers and KYC tier enforcement', 'Statements and full transaction receipts with verification codes'] },
  { id: 'operations', icon: Building2, title: 'Branch Operations', summary: 'Teller tills and vaults, cash postings, transfers, reversals and disciplined business-day control.', points: ['Till & vault management with balancing', 'Deposits, withdrawals, intra- and inter-bank transfers', 'Maker-checker reversals and backdating', 'End-of-day, end-of-week and year-end closure'] },
  { id: 'lending', icon: BadgeCheck, title: 'Lending & PFI On-lending', summary: 'Loan origination to repayment, provisioning and wholesale PFI facilities for development-finance programmes.', points: ['Loan products, schedules, restructuring and write-off', 'Prudential classification and provisioning reports', 'PFI onboarding, facilities and end-beneficiary tracking', 'Overdrafts, placements and fixed deposits'] },
  { id: 'digital', icon: Smartphone, title: 'Digital Channels', summary: 'Personal and corporate web banking, agency banking, cards and an open API for partners.', points: ['Web banking with authenticator 2FA', 'Corporate initiator/authoriser workflows by signing mandate', 'POS & agency banking with float and commission', 'ATM/debit card lifecycle and open API'] },
  { id: 'payments', icon: Receipt, title: 'Bills & Payments', summary: 'Airtime, data, electricity, cable TV, education and water bills across branch, agent and online channels.', points: ['Interswitch, eTranzact, Chams and VTPass bills routing', 'NIBSS NIP and EasyPay interbank transfers', 'Automatic fallback and instant refunds on failure', 'Tokens and PINs printed on receipts'] },
  { id: 'risk', icon: Lock, title: 'Risk, Compliance & Reporting', summary: 'AML transaction monitoring, CBN returns, executive analytics and a complete audit trail.', points: ['Rule-based AML monitoring and alerts', 'CBN regulatory returns and prudential ratios', 'Financial, credit, e-channel and operational reports', 'BI dashboards for the board and management'] },
  { id: 'people', icon: Users, title: 'HR & Payroll', summary: 'The full employee lifecycle on the same platform that drives banking roles and permissions.', points: ['Employees, organisation, grades and leave', 'Payroll with PAYE, pension and NHF schedules', 'Performance appraisals, training and recruitment', 'Employee relations, exits and clearance'] },
  { id: 'analytics', icon: BarChart3, title: 'Analytics & Automation', summary: 'Scheduled jobs, standing orders, alerts and real-time dashboards that keep the bank running itself.', points: ['Interest accrual, dormancy and fee jobs', 'Standing orders and alert rules', 'Operational and executive BI', 'Data upload & migration toolkit'] },
]

export const SEGMENTS = [
  { title: 'Microfinance banks', text: 'Unit, state and national MFBs — each licence tier maps to a plan.' },
  { title: 'Finance companies', text: 'Lending, collections and funding lines in one place.' },
  { title: 'Cooperatives & credit unions', text: 'Member savings, contributions and loans with full transparency.' },
  { title: 'Non-interest & commercial banks', text: 'Departmental and digital-channel deployments on a modern core.' },
]

export const PLANS = [
  { name: 'Starter', price: '₦250,000', for: 'Unit MFBs going digital', features: ['Core banking & CASA', 'Teller, till & vault', 'GL & financial accounting', 'Regulatory reporting', '10 users · 1 branch'] },
  { name: 'Growth', price: '₦600,000', for: 'State MFBs scaling up', featured: true, features: ['Everything in Starter', 'Loans, savings & investments', 'Agency banking & cards', 'AML monitoring & BI', '40 users · 5 branches'] },
  { name: 'Enterprise', price: '₦1,200,000', for: 'National MFBs & banks', features: ['Every module', 'HR & payroll, PFI lending', 'SME marketplace & open API', 'Priority support', '150 users · 25 branches'] },
]

export const VALUES = [
  { icon: HeartHandshake, title: 'Integrity', text: 'We handle other people’s money and data. We do what we say, and we say what we do.' },
  { icon: Target, title: 'Customer obsession', text: 'Our customers’ regulators, auditors and depositors are our customers too.' },
  { icon: Lightbulb, title: 'Craft', text: 'Banking software should be precise, fast and pleasant to use. We sweat the details.' },
  { icon: Handshake, title: 'Partnership', text: 'We succeed only when the banks we serve grow — financially and in capability.' },
]

export const MILESTONES = [
  { year: 'Founded', text: 'Started by bankers and engineers frustrated by legacy cores in Nigerian microfinance.' },
  { year: 'Core launch', text: 'Core banking, teller, GL and CBN reporting go live for the first institutions.' },
  { year: 'Expansion', text: 'Lending, PFI on-lending, agency banking, HR & payroll and BI added to the platform.' },
  { year: 'Digital', text: 'Web banking, bills payment, switch integrations and transaction 2FA launched.' },
]

export type Job = { id: string; title: string; team: string; location: string; type: string; summary: string; requirements: string[] }
export const JOBS: Job[] = [
  { id: 'se-backend', title: 'Senior Software Engineer, Core Ledger', team: 'Engineering', location: 'Lagos / Hybrid', type: 'Full-time', summary: 'Own the posting engine, reversals and GL integrity that thousands of daily transactions depend on.', requirements: ['5+ years building transactional systems', 'Strong SQL and TypeScript', 'Experience with financial ledgers or payments is a plus'] },
  { id: 'fe-engineer', title: 'Frontend Engineer', team: 'Engineering', location: 'Lagos / Remote (Nigeria)', type: 'Full-time', summary: 'Build fast, accessible screens for tellers, credit officers and bank customers.', requirements: ['3+ years with React and TypeScript', 'An eye for clean, usable interfaces', 'Comfort with data-heavy tables and forms'] },
  { id: 'implementation', title: 'Implementation Consultant', team: 'Customer Success', location: 'Lagos, Abuja or Port Harcourt', type: 'Full-time', summary: 'Lead bank go-lives: configuration, data migration, training and parallel runs.', requirements: ['Banking operations or core banking experience', 'Strong understanding of CBN requirements', 'Excellent communication and training skills'] },
  { id: 'sales-exec', title: 'Enterprise Sales Executive', team: 'Sales', location: 'Lagos / Field', type: 'Full-time', summary: 'Win microfinance and finance-company customers across Nigeria.', requirements: ['Track record selling software to financial institutions', 'Relationships with MFB executives', 'Consultative, numbers-driven approach'] },
  { id: 'compliance', title: 'Information Security & Compliance Analyst', team: 'Risk', location: 'Lagos', type: 'Full-time', summary: 'Run our integrated management system, audits and data-protection programme.', requirements: ['Experience with ISO 27001 or similar frameworks', 'Knowledge of the NDPA 2023', 'Attention to detail and documentation'] },
]

export const PERKS = ['Competitive salary and annual bonus', 'HMO for you and your family', 'Pension and learning budget', 'Hybrid working and modern equipment', 'Meaningful work powering financial inclusion']

export const FOOTER_LINKS = {
  company: [{ to: '/site/about', label: 'About us' }, { to: '/site/careers', label: 'Careers' }, { to: '/site/contact', label: 'Contact' }],
  platform: [{ to: '/site/solutions', label: 'Solutions' }, { to: '/site/product', label: 'Product tour' }, { to: '/site/solutions#pricing', label: 'Pricing' }],
  legal: [{ to: '/site/legal/privacy', label: 'Privacy policy' }, { to: '/site/legal/cookies', label: 'Cookie policy' }, { to: '/site/legal/ims', label: 'IMS policy' }],
}

export { Globe }
