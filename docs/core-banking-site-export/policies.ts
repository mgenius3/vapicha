// Privacy, cookie and integrated management system (IMS) policies for the VaPicha website.
// Template text aligned with the Nigeria Data Protection Act 2023 — have counsel review before publishing.
import { COMPANY } from './siteData'

export type PolicySection = { h: string; p?: string[]; ul?: string[]; table?: { head: string[]; rows: string[][] }; pAfter?: string[] }
export type Policy = { slug: 'privacy' | 'cookies' | 'ims'; title: string; summary: string; sections: PolicySection[] }

export const POLICIES: Policy[] = [
  {
    slug: 'privacy', title: 'Privacy Policy',
    summary: `How ${COMPANY.legalName} collects, uses, protects and shares personal data, and the rights you have under the Nigeria Data Protection Act 2023.`,
    sections: [
      { h: '1. Who we are', p: [`${COMPANY.legalName} ("VaPicha", "we", "us") provides the ${COMPANY.product} to banks and financial institutions. For personal data collected through this website, our marketing and our recruitment, we are the data controller. For data our customers (banks) process on the platform about their own customers and staff, the bank is the data controller and VaPicha acts as their data processor under a written data processing agreement.`] },
      { h: '2. Data we collect', ul: [
        'Contact details you give us: name, job title, institution, email address and phone number.',
        'Enquiry and correspondence content, including demo requests and support messages.',
        'Recruitment data: CV, employment history, qualifications and references you provide.',
        'Technical data: IP address, browser type, device information and pages visited, collected through cookies (see our Cookie Policy).',
        'Platform data processed on behalf of banks: customer identity and KYC data, account and transaction records, and staff records — processed only on the bank’s documented instructions.',
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
      { h: '5. Sharing and international transfers', p: ['We do not sell personal data. We share it only with service providers who help us run our business (hosting, email, payment switches when a bank instructs us), professional advisers, and regulators or law enforcement where the law requires. Where data is transferred outside Nigeria, we rely on an adequacy decision of the NDPC or appropriate safeguards such as contractual clauses, as required by Part VIII of the NDPA.'] },
      { h: '6. How long we keep it', p: ['Enquiry data is kept for up to 24 months after our last contact. Recruitment data for unsuccessful candidates is kept for 12 months. Contract and financial records are kept for the periods required by Nigerian law (generally at least 6 years). Platform data is retained and deleted according to each bank’s instructions and banking regulations.'] },
      { h: '7. Your rights', ul: [
        'Be informed and access a copy of your personal data.',
        'Correct inaccurate or incomplete data.',
        'Have data erased or restrict its processing where the law allows.',
        'Object to processing based on legitimate interest, including direct marketing.',
        'Data portability, and to withdraw consent at any time.',
        'Not to be subject to decisions based solely on automated processing with significant effects.',
        'Complain to the Nigeria Data Protection Commission.',
      ], pAfter: [`To exercise a right, email ${COMPANY.privacyEmail}. We respond within the time required by law. If your data is held by a bank that uses our platform, please contact that bank — we will assist them.`] },
      { h: '8. Children', p: ['Our website and services are not directed at children under 18, and we do not knowingly collect their personal data.'] },
      { h: '9. Contact and updates', p: [`Data Protection Officer: ${COMPANY.privacyEmail}, ${COMPANY.address}. We may update this policy; the date below shows the latest version. Effective ${COMPANY.policyDate}.`] },
    ],
  },
  {
    slug: 'cookies', title: 'Cookie Policy',
    summary: 'What cookies and similar technologies we use on this website and the platform, and how you can control them.',
    sections: [
      { h: '1. What are cookies?', p: ['Cookies are small text files placed on your device when you visit a website. Similar technologies include local storage and pixels. They help websites work, remember your choices and understand how they are used.'] },
      { h: '2. Cookies we use', table: { head: ['Category', 'Purpose', 'Examples', 'Duration'], rows: [
        ['Strictly necessary', 'Sign-in sessions, security (CSRF protection), load balancing and remembering your cookie choice. Always on.', 'Session cookie, XSRF token, vp-cookie-consent', 'Session – 12 months'],
        ['Preferences', 'Remember settings such as light/dark mode and saved table filters.', 'Theme preference, deck settings', 'Up to 12 months'],
        ['Analytics', 'Understand which pages are visited so we can improve the website. Only with your consent.', 'Aggregated page-view statistics', 'Up to 13 months'],
      ] } },
      { h: '3. Your choices', ul: [
        'Use the cookie banner to accept all cookies or necessary cookies only. You can change your choice any time with the “Cookie settings” link in the footer.',
        'Most browsers let you block or delete cookies. Blocking strictly necessary cookies will stop sign-in and secure features working.',
        'We do not use advertising cookies or sell data collected through cookies.',
      ] },
      { h: '4. Third parties', p: ['We load fonts from Google Fonts, which may receive your IP address to deliver them. We do not allow third parties to place advertising or tracking cookies on this website.'] },
      { h: '5. Contact', p: [`Questions about cookies: ${COMPANY.privacyEmail}. Effective ${COMPANY.policyDate}.`] },
    ],
  },
  {
    slug: 'ims', title: 'Integrated Management System (IMS) Policy',
    summary: 'Our commitment to quality, information security, business continuity and service management across everything we build and run.',
    sections: [
      { h: '1. Purpose and scope', p: [`This policy sets the direction for ${COMPANY.legalName}'s Integrated Management System (IMS). It covers the design, development, hosting, implementation and support of the ${COMPANY.product} and all supporting functions, people, locations and suppliers.`] },
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
        'Business continuity: maintain tested backup, recovery and continuity plans so critical banking services can be restored within agreed recovery objectives.',
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
