"use client";

import { useState } from "react";
import { Icon } from "@/components/icons";

const topics = [
  "General enquiry",
  "Partnership / donor",
  "Procurement / vendor",
  "Media / press",
  "Careers",
  "Report a concern",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="grid place-items-center rounded-3xl border border-brand-600/20 bg-brand-50 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white">
          <Icon.check className="h-7 w-7" />
        </span>
        <h3 className="mt-4 font-display text-xl font-bold text-ink">Thank you — message received</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          A member of the PHD team will be in touch within two working days. For urgent
          humanitarian matters, please call our head office directly.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-800 ring-1 ring-brand-600/20 hover:bg-brand-50"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-3xl border border-black/5 bg-white p-7 card-shadow lg:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Organisation" name="org" />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <label className="mt-4 block">
        <span className="text-sm font-semibold text-ink">Topic</span>
        <select
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-paper px-4 py-2.5 text-ink focus:border-brand-600 focus:outline-none"
          defaultValue=""
          required
        >
          <option value="" disabled>Choose a topic…</option>
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </label>
      <label className="mt-4 block">
        <span className="text-sm font-semibold text-ink">Message</span>
        <textarea
          rows={5}
          required
          className="mt-1.5 w-full resize-y rounded-xl border border-black/10 bg-paper px-4 py-3 text-ink placeholder:text-ink-soft/70 focus:border-brand-600 focus:outline-none"
          placeholder="How can we help?"
        />
      </label>
      <label className="mt-4 flex items-start gap-2 text-sm text-ink-soft">
        <input type="checkbox" required className="mt-1 accent-brand-700" />
        <span>I consent to PHD storing my details to respond to this enquiry, in line with its privacy policy.</span>
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-700 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-800"
      >
        Send message <Icon.arrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">
        {label}{required && <span className="text-coral-600"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-black/10 bg-paper px-4 py-2.5 text-ink focus:border-brand-600 focus:outline-none"
      />
    </label>
  );
}
