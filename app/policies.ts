// Privacy, cookie and IMS policies, adapted from docs/core-banking-site-export/policies.ts.
// Template text aligned with the Nigeria Data Protection Act 2023. Have a lawyer review it before publishing.
import { COMPANY } from './site-content'

export type PolicySection = { h: string; p?: string[]; ul?: string[]; table?: { head: string[]; rows: string[][] }; pAfter?: string[] }
export type Policy = { slug: 'privacy' | 'cookies' | 'ims'; title: string; summary: string; sections: PolicySection[] }

export const POLICIES: Policy[] = [
  {
    slug: 'privacy', title: 'Privacy Policy',
    summary: `How ${COMPANY.legalName} collects, uses, protects and shares personal data, and the rights you have under the Nigeria Data Protection Act 2023.`,
    sections: [
      { h: '1. Who we are', p: [`${COMPANY.legalName} ("VaPicha", "we", "us") provides the VaPicha platform to microfinance banks, cooperatives, lenders and other financial institutions. Inclusive Village Ltd is registered with the Nigeria Data Protection Commission (NDPC) as a data controller / processor of major importance. For personal data collected through this website, our marketing and our recruitment, we are the data controller. For data our customer institutions process on the platform about their own customers and staff, the institution is the data controller and VaPicha acts as their data processor under a written data processing agreement.`] },
      { h: '2. Data we collect', ul: [
        'Contact details you give us: name, job title, institution, email address and phone number.',
        'Enquiry and correspondence content, including demo requests and support messages.',
        'Recruitment data: CV, employment history, qualifications and references you provide.',
        'Technical data: IP address, browser type, device information and pages visited, collected through cookies (see our Cookie Policy).',
        'Platform data processed on behalf of customer institutions: customer identity and KYC data, account and transaction records, and staff records — processed only on the institution’s documented instructions.',
      ] },
      { h: '3. Why we use it and our lawful basis', table: { head: ['Purpose', 'Lawful basis (NDPA s.25)'], rows: [
        ['Responding to enquiries and demo requests', 'Legitimate interest / steps prior to a contract'],
        ['Providing and supporting the platform', 'Performance of a contract'],
        ['Recruitment and onboarding', 'Steps prior to a contract; legal obligation'],
        ['Security, fraud prevention and audit', 'Legitimate interest; legal obligation'],
        ['Marketing emails', 'Consent (you can withdraw at any time)'],
        ['Regulatory reporting and record keeping', 'Legal obligation'],
      ] } },
      { h: '4. How we protect your data', ul: [
        'Encryption in transit (TLS) and access controls based on least privilege.',
        'Two-factor authentication for staff transactions and customer payments; maker-checker on sensitive actions.',
        'A complete, tamper-evident audit trail of access and changes.',
        'Data protection impact assessments for high-risk processing and annual data protection audits filed as required by the Nigeria Data Protection Commission (NDPC).',
        'Staff confidentiality obligations, vetting and annual privacy and security training.',
      ] },
      { h: '5. Sharing and international transfers', p: ['We do not sell personal data. We share it only with service providers who help us run our business (hosting, email and form delivery, payment switches when a customer institution instructs us), professional advisers, and regulators or law enforcement where the law requires. Where data is transferred outside Nigeria, we rely on an adequacy decision of the NDPC or appropriate safeguards such as contractual clauses, as required by Part VIII of the NDPA.'] },
      { h: '6. How long we keep it', p: ['Enquiry data is kept for up to 24 months after our last contact. Recruitment data for unsuccessful candidates is kept for 12 months. Contract and financial records are kept for the periods required by Nigerian law (generally at least 6 years). Platform data is retained and deleted according to each customer institution’s instructions and applicable regulations.'] },
      { h: '7. Your rights', ul: [
        'Be informed and access a copy of your personal data.',
        'Correct inaccurate or incomplete data.',
        'Have data erased or restrict its processing where the law allows.',
        'Object to processing based on legitimate interest, including direct marketing.',
        'Data portability, and to withdraw consent at any time.',
        'Not to be subject to decisions based solely on automated processing with significant effects.',
        'Complain to the Nigeria Data Protection Commission.',
      ], pAfter: [`To exercise a right, email ${COMPANY.email}. We respond within the time required by law. If your data is held by an institution that uses our platform, please contact that institution — we will assist them.`] },
      { h: '8. Children', p: ['Our website and services are not directed at children under 18, and we do not knowingly collect their personal data.'] },
      { h: '9. Contact and updates', p: [`Data protection contact: ${COMPANY.email}, ${COMPANY.address}. We may update this policy; the date below shows the latest version. Effective ${COMPANY.policyDate}.`] },
    ],
  },
  {
    slug: 'cookies', title: 'Cookie Policy',
    summary: 'What cookies and similar technologies this website and the platform use, and how you can control them.',
    sections: [
      { h: '1. What are cookies?', p: ['Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage and pixels. They help websites work, remember your choices and understand how they are used.'] },
      { h: '2. What this website uses', table: { head: ['Category', 'Purpose', 'Example', 'Duration'], rows: [
        ['Preferences', 'Remember whether you chose light or dark mode. Stored in your browser’s local storage, not sent to us.', 'vapicha-theme', 'Until you clear it'],
      ] }, pAfter: ['This website does not use analytics, advertising or tracking cookies, so we do not show a cookie banner. If that changes, we will update this policy and ask for your consent first.'] },
      { h: '3. The VaPicha platform', p: ['When you sign in to the VaPicha platform (control.vapicha.africa), strictly necessary cookies are used for sign-in sessions and security. These are required for the platform to work.'] },
      { h: '4. Third parties', p: ['We load fonts from Google Fonts, which may receive your IP address to deliver them. Forms on this website are delivered by email through FormSubmit, which receives the details you enter. The WhatsApp button opens WhatsApp, which has its own privacy policy. We do not allow third parties to place advertising or tracking cookies on this website.'] },
      { h: '5. Your choices', ul: ['Most browsers let you block or delete cookies and local storage. Doing so resets your light/dark choice.', 'We do not sell data.'] },
      { h: '6. Contact', p: [`Questions about cookies: ${COMPANY.email}. Effective ${COMPANY.policyDate}.`] },
    ],
  },
  {
    slug: 'ims', title: 'Integrated Management System (IMS) Policy',
    summary: 'Our commitment to quality, information security, business continuity and service management across everything we build and run.',
    sections: [
      { h: '1. Purpose and scope', p: [`This policy sets the direction for ${COMPANY.legalName}'s Integrated Management System (IMS). It covers the design, development, hosting, implementation and support of the VaPicha platform and all supporting functions, people, locations and suppliers.`] },
      { h: '2. Frameworks', p: ['Our IMS is designed around the following internationally recognised standards and Nigerian regulatory requirements:'], ul: [
        'ISO 9001 — Quality management.',
        'ISO/IEC 27001 — Information security management.',
        'ISO 22301 — Business continuity management.',
        'ISO/IEC 20000-1 — IT service management.',
        'Nigeria Data Protection Act 2023, CBN Risk-Based Cybersecurity Framework and relevant CBN guidelines applicable to service providers to financial institutions.',
      ] },
      { h: '3. Our commitments', ul: [
        'Quality: deliver software and services that meet customer, regulatory and contractual requirements, measured through defects, uptime, implementation and satisfaction objectives.',
        'Information security: protect the confidentiality, integrity and availability of customer and company information through risk-based controls, including access control, encryption, 2FA, maker-checker, logging and secure development.',
        'Business continuity: maintain tested backup, recovery and continuity plans so critical services can be restored within agreed recovery objectives.',
        'Service management: run support, incident, problem and change management to agreed service levels, with transparent communication to customers.',
        'Privacy: process personal data lawfully, fairly and only for agreed purposes, in line with the NDPA.',
        'Compliance: meet all applicable legal, regulatory and contractual obligations.',
        'Continual improvement: set measurable objectives, monitor performance, conduct internal audits and management reviews, and act on findings.',
      ] },
      { h: '4. Roles and responsibilities', p: ['Executive management owns this policy, provides resources and reviews IMS performance at least annually. The IMS Manager coordinates implementation, risk assessments, audits and corrective actions. Every employee and contractor is responsible for following IMS procedures, completing required training and reporting incidents, weaknesses and improvement ideas promptly.'] },
      { h: '5. Suppliers', p: ['Suppliers with access to customer data or critical services are assessed before engagement and periodically after, and are bound by confidentiality, security and data protection obligations.'] },
      { h: '6. Communication and review', p: [`This policy is communicated to all staff, available to interested parties on request and on this website, and reviewed annually or after significant change. Approved by the Managing Director. Effective ${COMPANY.policyDate}.`] },
    ],
  },
]
