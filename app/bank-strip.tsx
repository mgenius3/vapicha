'use client';

import { useState } from 'react';
import { Pause, Play } from 'lucide-react';
import './bank-strip.css';
import bankLogos from './bank-logos.json';

// Commercial banks plus selected fintech providers.
// https://www.cbn.gov.ng/supervision/Inst-DM.html
// Bank listing is not independent verification of a VaPicha partnership.
const banks = [
  ['OPay', 'OP'],
  ['PalmPay', 'PP'],
  ['Moniepoint', 'MP'],
  ['Kuda', 'KU'],
  ['Access Bank', 'AC'],
  ['Alpha Morgan Bank', 'AM'],
  ['Citibank Nigeria', 'CI'],
  ['Ecobank Nigeria', 'EC'],
  ['Fidelity Bank', 'FI'],
  ['First Bank of Nigeria', 'FB'],
  ['First City Monument Bank', 'FC'],
  ['Globus Bank', 'GL'],
  ['Guaranty Trust Bank', 'GT'],
  ['Keystone Bank', 'KB'],
  ['NOVA Bank', 'NO'],
  ['Optimus Bank', 'OP'],
  ['Parallex Bank', 'PA'],
  ['Polaris Bank', 'PO'],
  ['Premium Trust Bank', 'PT'],
  ['Providus Bank', 'PR'],
  ['Signature Bank', 'SI'],
  ['Stanbic IBTC Bank', 'IB'],
  ['Standard Chartered Bank Nigeria', 'SC'],
  ['Sterling Bank', 'ST'],
  ['SunTrust Bank Nigeria', 'SU'],
  ['Tatum Bank', 'TA'],
  ['Titan Trust Bank', 'TT'],
  ['Union Bank of Nigeria', 'UN'],
  ['United Bank for Africa', 'UB'],
  ['Unity Bank', 'UT'],
  ['Wema Bank', 'WE'],
  ['Zenith Bank', 'ZE'],
] as const;

export default function BankStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <section className="bank-strip" aria-labelledby="partners-heading">
      <div className="container bank-strip-layout">
        <div className="bank-strip-heading">
          <span className="partner-kicker"><i /> CONNECTED FOR MORE</span>
          <h2 id="partners-heading">Auto Direct Debit partnering Banks</h2>
          <button
            className="bank-motion-control"
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
            aria-label={paused ? 'Resume bank scrolling' : 'Pause bank scrolling'}
          >
            {paused ? <Play size={11} /> : <Pause size={11} />}
            {paused ? 'Resume scrolling' : 'Pause scrolling'}
          </button>
        </div>
        <div
          className="bank-marquee"
          tabIndex={0}
          role="region"
          aria-label="Nigerian banks and fintech providers. Scroll horizontally to explore."
        >
          <div className="bank-track" data-paused={paused}>
            {[0, 1].map(copy => (
              <ul className="bank-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                {banks.map(([name]) => (
                  <li className="bank-name" key={name}>
                    <span className="bank-logo"><img src={bankLogos[name]} alt="" width="64" height="64"/></span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
