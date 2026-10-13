import { AlertTriangle, MessageSquareText, Mic2, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function ProductMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0c1422] shadow-2xl shadow-blue-950/30">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0a111d] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        </div>

        <div className="hidden font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 sm:block">
          SALES COPILOT — LIVE SESSION
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Listening
        </div>
      </div>

      <div className="grid min-h-[430px] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-slate-500">
            <Mic2 className="h-4 w-4" />
            LIVE TRANSCRIPT
          </div>

          <div className="space-y-5">
            <Transcript role="AGENT" text="Before we look at options, what do you already have in place today?" />
            <Transcript role="CLIENT" text="I have coverage through work already, so I'm not sure I really need anything else." />
            <Transcript role="AGENT" text="That makes sense. A lot of people I speak with already have something through work." />
            <Transcript role="CLIENT" text="Yeah, I just don't want to pay for the same thing twice." />
          </div>
        </div>

        <div className="p-5">
          <div className="mb-5 flex items-center gap-2 text-xs font-medium text-blue-300">
            <Sparkles className="h-4 w-4" />
            PRIVATE COACHING
          </div>

          <div className="space-y-3">
            <CoachingCard label="WHAT'S HAPPENING" icon={<MessageSquareText className="h-4 w-4" />}>
              Client is relying on employer-provided coverage. Explore portability and whether the benefit follows them after a job change.
            </CoachingCard>

            <CoachingCard label="SAY">
              “That’s completely understandable. A lot of people I speak with already have something through work.”
            </CoachingCard>

            <CoachingCard label="ASK">
              “If you changed jobs tomorrow, would that coverage stay with you?”
            </CoachingCard>

            <CoachingCard label="ALERT" tone="warning" icon={<AlertTriangle className="h-4 w-4" />}>
              Clarify existing coverage before recommending additional protection.
            </CoachingCard>
          </div>
        </div>
      </div>
    </div>
  );
}

function Transcript({ role, text }: { role: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-slate-600">{role}</p>
      <p className="mt-1.5 text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}

function CoachingCard({
  label,
  children,
  icon,
  tone = "normal",
}: {
  label: string;
  children: ReactNode;
  icon?: ReactNode;
  tone?: "normal" | "warning";
}) {
  return (
    <article
      className={[
        "rounded-xl border p-4",
        tone === "warning" ? "border-amber-400/15 bg-amber-400/5" : "border-white/10 bg-white/[0.025]",
      ].join(" ")}
    >
      <div
        className={[
          "flex items-center gap-2 font-mono text-[10px] font-semibold tracking-[0.14em]",
          tone === "warning" ? "text-amber-300" : "text-blue-300",
        ].join(" ")}
      >
        {icon}
        {label}
      </div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{children}</div>
    </article>
  );
}
