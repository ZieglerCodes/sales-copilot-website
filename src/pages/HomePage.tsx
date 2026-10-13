import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Eye,
  LockKeyhole,
  MessageSquareText,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

import { EarlyAccessForm } from "../components/EarlyAccessForm";
import { PageMeta } from "../components/PageMeta";
import { ProductMockup } from "../components/ProductMockup";
import { brand } from "../config/brand";

const coachingCards = [
  {
    icon: <Eye className="h-5 w-5" />,
    label: "WHAT'S HAPPENING",
    title: "Understand the moment.",
    text: "Surface the context behind objections, uncertainty, buying signals, and shifts in the conversation while they are happening.",
  },
  {
    icon: <MessageSquareText className="h-5 w-5" />,
    label: "SAY",
    title: "Know how to respond.",
    text: "Get concise private suggestions that help you respond naturally instead of scrambling for the right wording.",
  },
  {
    icon: <Target className="h-5 w-5" />,
    label: "ASK",
    title: "Ask the question you almost missed.",
    text: "Catch gaps in discovery and surface high-value follow-up questions before the conversation moves on.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    label: "ALERT",
    title: "Catch what deserves attention.",
    text: "Flag affordability, spouse or decision-maker issues, existing coverage, compliance-sensitive moments, and closing opportunities.",
  },
];

const pricingFeatures = [
  "Real-time transcription",
  "Private AI coaching",
  "Objection detection",
  "Discovery prompts",
  "Buying-signal alerts",
  "Insurance sales playbook",
  `${brand.pricing.minutes} planned live-call minutes each month`,
  "Windows desktop application",
];

const faqs = [
  {
    question: "Does the prospect hear Sales Copilot?",
    answer:
      "No. Sales Copilot is designed as a private coaching layer for the salesperson. Coaching appears in the desktop application rather than being spoken into the call.",
  },
  {
    question: "Does Sales Copilot replace the salesperson?",
    answer:
      "No. It is designed to support human judgment, not replace it. The salesperson remains responsible for the conversation, recommendations, disclosures, and decisions.",
  },
  {
    question: "What kinds of sales conversations is it built for?",
    answer:
      "The initial product is being developed around life-insurance sales conversations, with an architecture that can support additional playbooks and sales environments later.",
  },
  {
    question: "Does Sales Copilot guarantee compliance?",
    answer:
      "No. AI-generated guidance may be incomplete or incorrect and does not replace legal, regulatory, carrier, brokerage, employer, or company requirements.",
  },
];

export default function HomePage() {
  return (
    <>
      <PageMeta title="Sales Copilot | Real-Time AI Sales Coaching" description={brand.description} />

      <main>
        <section className="relative overflow-hidden px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_38%)]" />

          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center rounded-full border border-blue-400/15 bg-blue-400/5 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-blue-300">
                PRIVATE REAL-TIME AI SALES COACHING
              </div>

              <h1 className="mt-7 text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Know what to say
                <span className="block text-slate-400">while the call is still happening.</span>
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-400 sm:text-xl">{brand.description}</p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/#early-access"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                >
                  Get Early Access
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/#how-it-works"
                  className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  See How It Works
                </Link>
              </div>

              <p className="mt-4 text-xs text-slate-600">Windows desktop application • Early access opening soon</p>
            </div>

            <div className="mx-auto mt-14 max-w-6xl">
              <ProductMockup />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">The problem</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The best time to coach a sales call is while it’s happening.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
              Post-call tools can tell you what happened. Sales Copilot is designed for the moment when the objection is live, the buying signal appears, or the discovery question has not been asked yet.
            </p>
          </div>
        </section>

        <section id="features" className="scroll-mt-24 px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Private coaching</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Your call. Your voice. Private coaching in the background.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {coachingCards.map((card) => (
                <FeatureCard key={card.label} {...card} />
              ))}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">How it works</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Built to sit beside the conversation—not in the way of it.
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <Step number="01" title="Start Sales Copilot" text="Open a live coaching session in the Windows app." />
              <Step number="02" title="Join your normal call" text="Continue using your normal sales workflow and meeting or calling software." />
              <Step number="03" title="Follow the conversation" text="Sales Copilot processes the live conversation and maintains rolling context." />
              <Step number="04" title="Get private coaching" text="See concise guidance about what is happening, what to say, what to ask, and what needs attention." />
            </div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Insurance-first</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Built first for insurance conversations.</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
                The first commercial playbook is being designed around the objections, discovery gaps, affordability concerns, and decision-maker issues that appear in life-insurance sales.
              </p>
            </div>

            <div className="space-y-3">
              {["I already have coverage through work.", "I need to talk to my spouse.", "That’s more than I wanted to spend.", "Let me think about it."].map((objection) => (
                <div key={objection} className="rounded-xl border border-white/10 bg-white/[0.025] px-5 py-4 text-slate-300">
                  “{objection}”
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-brand">
              <LockKeyhole className="h-9 w-9" />
            </div>

            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Privacy-minded product design</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">The AI stays in the background. You stay in control.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Sales Copilot is being designed as a private assistant for the salesperson. Production privacy disclosures will reflect the final product’s actual audio, transcription, retention, and data-processing behavior before launch.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-10 rounded-3xl border border-brand/20 bg-brand/5 p-7 sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Planned pricing</p>
                <h2 className="mt-4 text-3xl font-bold">One plan. Everything you need to start.</h2>

                <div className="mt-7">
                  <span className="text-5xl font-bold">${brand.pricing.monthly}</span>
                  <span className="ml-2 text-slate-500">/ month</span>
                </div>

                <Link to="/pricing" className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-300 transition hover:text-blue-200">
                  View pricing details
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {pricingFeatures.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm text-slate-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Common questions.</h2>

            <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq) => (
                <article key={faq.question} className="py-6">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="early-access" className="scroll-mt-24 px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <ShieldCheck className="h-8 w-8 text-brand" />
              <h2 className="mt-5 text-3xl font-bold tracking-tight">Don’t wait until the call is over to find out what you missed.</h2>
              <p className="mt-5 leading-7 text-slate-400">
                Join the early-access list for product updates, beta access opportunities, and launch information.
              </p>
            </div>

            <EarlyAccessForm />
          </div>
        </section>
      </main>
    </>
  );
}

function FeatureCard({ icon, label, title, text }: { icon: ReactNode; label: string; title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand">{icon}</div>
      <p className="mt-5 font-mono text-[10px] font-semibold tracking-[0.16em] text-blue-300">{label}</p>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </article>
  );
}

function Step({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
      <p className="font-mono text-xs font-semibold tracking-[0.15em] text-brand">{number}</p>
      <h3 className="mt-5 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </article>
  );
}
