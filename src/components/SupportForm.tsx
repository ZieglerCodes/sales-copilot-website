import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

export function SupportForm() {
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
      <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-6">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
          <div>
            <h2 className="font-semibold">{localPreview ? "Form preview complete." : "Your message was submitted."}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {localPreview
                ? "Deploy to Netlify to receive real support-form submissions."
                : "Thank you for contacting Sales Copilot."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      name="support"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value="support" />
      <div className="hidden">
        <label>
          Do not fill this out:
          <input name="bot-field" />
        </label>
      </div>

      <Field label="Name" name="name" type="text" placeholder="Your name" required />
      <Field label="Email" name="email" type="email" placeholder="you@company.com" required />

      <div>
        <label htmlFor="topic" className="mb-2 block text-sm font-medium text-slate-300">
          Topic
        </label>
        <select
          id="topic"
          name="topic"
          required
          defaultValue=""
          className="w-full rounded-lg border border-white/10 bg-[#0d1525] px-4 py-3 text-white outline-none transition focus:border-brand"
        >
          <option value="" disabled>Select a topic</option>
          <option value="early-access">Early access</option>
          <option value="product">Product question</option>
          <option value="technical">Technical question</option>
          <option value="partnerships">Partnerships</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="How can we help?"
          className="w-full resize-y rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-brand"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
        {status !== "submitting" && <Send className="h-4 w-4" />}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-400">We couldn’t submit your message. Please try again.</p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-brand"
      />
    </div>
  );
}
