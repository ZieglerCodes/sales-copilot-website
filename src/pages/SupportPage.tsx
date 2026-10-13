import type { ReactNode } from "react";
import { HelpCircle, MessageSquare, Monitor } from "lucide-react";

import { PageMeta } from "../components/PageMeta";
import { SupportForm } from "../components/SupportForm";
import { brand } from "../config/brand";

export default function SupportPage() {
  return (
    <>
      <PageMeta title={`Support | ${brand.name}`} description="Contact Sales Copilot with product, technical, partnership, or early-access questions." />

      <main className="px-5 pb-24 pt-36 lg:px-8 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">Support</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">How can we help?</h1>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Have a question about Sales Copilot, early access, compatibility, partnerships, or the product direction? Send a message below.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-4">
              <SupportCard
                icon={<HelpCircle className="h-5 w-5" />}
                title="Product questions"
                description="Questions about how Sales Copilot works or whether it fits your sales workflow."
              />
              <SupportCard
                icon={<Monitor className="h-5 w-5" />}
                title="Technical questions"
                description="Questions about Windows, installation plans, audio, or the desktop application."
              />
              <SupportCard
                icon={<MessageSquare className="h-5 w-5" />}
                title="Early access & partnerships"
                description="Beta interest, launch updates, partnerships, or other business questions."
              />
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
              <SupportForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function SupportCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <div className="flex h-9 w-9 items-center justify-center text-brand">{icon}</div>
      <h2 className="mt-3 font-semibold">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
    </article>
  );
}
