import type { ReactNode } from "react";
import { Check, CircleDollarSign, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router";

import { PageMeta } from "../components/PageMeta";
import { brand } from "../config/brand";

const included = [
  "Real-time conversation transcription",
  "Private AI coaching",
  "Objection detection",
  "Discovery prompts",
  "Buying-signal alerts",
  "Insurance sales playbook",
  `${brand.pricing.minutes} planned live-call minutes per month`,
  "Windows desktop application",
  "Product updates",
  "Customer support",
];

export default function PricingPage() {
  return (
    <>
      <PageMeta
        title={`Pricing | ${brand.name}`}
        description={`Planned Sales Copilot Professional pricing: private real-time coaching, transcription, objection detection, discovery prompts, and ${brand.pricing.minutes} live-call minutes.`}
      />

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.15),transparent_40%)]" />

          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Planned launch pricing</p>
            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">
              One plan.
              <span className="block text-slate-400">Everything you need to start.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              A straightforward plan built around the complete core Sales Copilot experience rather than artificial feature tiers.
            </p>
          </div>
        </section>

        <section className="px-5 pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-brand/30 bg-gradient-to-b from-brand/10 to-white/[0.025] p-8 sm:p-10">
              <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-brand/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-semibold tracking-[0.15em] text-blue-300">SALES COPILOT PROFESSIONAL</p>
                    <p className="mt-2 text-sm text-slate-500">Planned individual plan</p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight">${brand.pricing.monthly}</span>
                  <span className="pb-2 text-slate-500">/ month</span>
                </div>

                <div className="my-8 border-t border-white/10" />

                <div className="grid gap-3 sm:grid-cols-2">
                  {included.map((feature) => (
                    <div key={feature} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/#early-access"
                  className="mt-9 inline-flex w-full items-center justify-center rounded-lg bg-brand px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                >
                  Join Early Access
                </Link>

                <p className="mt-4 text-center text-xs leading-5 text-slate-600">
                  Pricing and included usage are planned launch terms and may change before commercial release. No payment is collected on this website.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            <ValueCard
              icon={<CircleDollarSign className="h-5 w-5" />}
              title="Understandable usage"
              description="The planned plan communicates included usage in live-call minutes rather than exposing technical AI-token limits."
            />
            <ValueCard
              icon={<Sparkles className="h-5 w-5" />}
              title="Core coaching together"
              description="Objection detection, discovery prompts, buying-signal alerts, and live coaching are designed as one cohesive workflow."
            />
            <ValueCard
              icon={<ShieldCheck className="h-5 w-5" />}
              title="No checkout yet"
              description="This front-end website does not collect payments. Commercial checkout and account access can be connected later."
            />
          </div>
        </section>
      </main>
    </>
  );
}

function ValueCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">{icon}</div>
      <h2 className="mt-5 font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
