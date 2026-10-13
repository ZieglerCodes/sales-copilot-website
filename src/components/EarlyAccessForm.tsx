import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function EarlyAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [localPreview, setLocalPreview] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;

    if (import.meta.env.DEV) {
      form.reset();
      setLocalPreview(true);
      setStatus("success");
      return;
    }

    const formData = new FormData(form);
    const encoded = new URLSearchParams();
    formData.forEach((value, key) => encoded.append(key, String(value)));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encoded.toString(),
      });

      if (!response.ok) throw new Error("Submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-5">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <h3 className="font-semibold text-white">{localPreview ? "Form preview complete." : "You’re on the list."}</h3>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {localPreview
                ? "When this site is deployed to Netlify, submissions will appear in Netlify Forms."
                : "Your early-access request was submitted."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      name="early-access"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input type="hidden" name="form-name" value="early-access" />
      <div className="hidden">
        <label>
          Do not fill this out:
          <input name="bot-field" />
        </label>
      </div>

      <input
        type="text"
        name="name"
        required
        placeholder="Your name"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-brand"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="you@company.com"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-brand"
      />
      <input
        type="text"
        name="role"
        required
        placeholder="What do you sell?"
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-brand"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting..." : "Get Early Access"}
        {status !== "submitting" && <ArrowRight className="h-4 w-4" />}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">We couldn’t submit your request. Please try again.</p>
      )}
    </form>
  );
}
