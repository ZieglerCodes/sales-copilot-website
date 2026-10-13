import type { ReactNode } from "react";

import { PageMeta } from "../components/PageMeta";
import { brand } from "../config/brand";

export default function TermsPage() {
  return (
    <>
      <PageMeta title={`Terms | ${brand.name}`} description={`Pre-launch website terms for ${brand.name}.`} />

      <main className="px-5 pb-24 pt-36 lg:px-8 lg:pt-44">
        <article className="mx-auto max-w-3xl">
          <div className="mb-12 border-b border-white/10 pb-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Pre-launch website terms</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
            <p className="mt-5 leading-7 text-slate-400">
              These terms apply to the current informational website. Final commercial software terms should be reviewed and published before paid Sales Copilot access is offered.
            </p>
          </div>

          <TermsSection title="1. Website Purpose">
            <p>
              This website provides information about Sales Copilot, planned product capabilities, early-access opportunities, and planned pricing. Product features and commercial terms may change before launch.
            </p>
          </TermsSection>

          <TermsSection title="2. AI-Generated Guidance">
            <p>
              Sales Copilot is intended to provide AI-assisted sales coaching. AI-generated output may be incomplete, inaccurate, or inappropriate for a particular situation. Users remain responsible for evaluating suggestions and deciding what they communicate or do.
            </p>
          </TermsSection>

          <TermsSection title="3. Legal and Regulatory Responsibility">
            <p>
              Sales Copilot does not replace legal, regulatory, compliance, carrier, brokerage, employer, or professional guidance.
            </p>
          </TermsSection>

          <TermsSection title="4. Recording and Transcription">
            <p>
              Future users are responsible for obtaining any notice, disclosure, permission, or consent required before capturing, processing, recording, or transcribing communications.
            </p>
          </TermsSection>

          <TermsSection title="5. Website Forms">
            <p>
              Do not submit passwords, payment-card information, health information, or other highly sensitive data through the early-access or support forms.
            </p>
          </TermsSection>

          <TermsSection title="6. Pricing">
            <p>
              Any pricing currently displayed is planned launch pricing and is not an offer to charge or process payment through this static website.
            </p>
          </TermsSection>

          <TermsSection title="7. Intellectual Property">
            <p>
              Sales Copilot software, branding, interfaces, proprietary coaching systems, prompts, playbooks, and related materials remain protected intellectual property except where otherwise stated.
            </p>
          </TermsSection>
        </article>
      </main>
    </>
  );
}

function TermsSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-4 space-y-4 leading-7 text-slate-400">{children}</div>
    </section>
  );
}
