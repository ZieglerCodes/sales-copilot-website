import type { ReactNode } from "react";

import { PageMeta } from "../components/PageMeta";
import { brand } from "../config/brand";

export default function PrivacyPage() {
  return (
    <>
      <PageMeta title={`Privacy | ${brand.name}`} description={`Website privacy information for ${brand.name}.`} />

      <main className="px-5 pb-24 pt-36 lg:px-8 lg:pt-44">
        <article className="mx-auto max-w-3xl">
          <div className="mb-12 border-b border-white/10 pb-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Website privacy notice</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
            <p className="mt-5 leading-7 text-slate-400">
              This page describes the current marketing website. A final product privacy policy should be published before commercial launch and should match the desktop application’s actual data flows.
            </p>
          </div>

          <LegalSection title="1. Information You Submit">
            <p>
              If you submit the early-access or support form, the site may collect the information you enter, such as your name, email address, role, topic, and message.
            </p>
          </LegalSection>

          <LegalSection title="2. Form Processing">
            <p>
              When this static site is deployed to Netlify with form handling enabled, form submissions may be processed and stored through Netlify’s form service. Do not submit sensitive personal or confidential information through these website forms.
            </p>
          </LegalSection>

          <LegalSection title="3. Product Data">
            <p>
              This website does not currently provide Sales Copilot account login, payment processing, live transcription, AI coaching, or software-download functionality. Privacy disclosures for those product features should be finalized when those systems are connected.
            </p>
          </LegalSection>

          <LegalSection title="4. Recording and Consent">
            <p>
              Future users of the Sales Copilot application will remain responsible for complying with applicable recording, transcription, privacy, consent, communications, employment, and industry-specific requirements.
            </p>
          </LegalSection>

          <LegalSection title="5. Security">
            <p>
              This website is designed as a static front end and does not embed privileged payment, database, AI-provider, or application-server credentials.
            </p>
          </LegalSection>

          <LegalSection title="6. Contact">
            <p>Use the Support page to contact Sales Copilot about privacy or website questions.</p>
          </LegalSection>
        </article>
      </main>
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-slate-400">{children}</div>
    </section>
  );
}
