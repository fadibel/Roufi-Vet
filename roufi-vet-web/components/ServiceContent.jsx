import { Check, Info } from "lucide-react";

import { cn } from "@/lib/utils";
import { PRIMARY_PHONE } from "@/lib/site";

/*
 * Building blocks for the individual service pages. Each page composes these
 * around its own copy, so pages share a system without sharing one layout.
 */

/** The clinic's main number as an inline tel: link. */
export function PhoneLink() {
  return (
    <a href={PRIMARY_PHONE.href} className="whitespace-nowrap">
      {PRIMARY_PHONE.display}
    </a>
  );
}

export function Lead({ children }) {
  return <p className="prose-lead">{children}</p>;
}

/** Checkmark list, one or two columns. */
export function CheckList({ items, columns = 2, className }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-3.5", columns === 2 && "sm:grid-cols-2", className)}>
      {items.map((item) => (
        <li key={typeof item === "string" ? item : item.key} className="flex items-start gap-3 leading-relaxed text-stone-700">
          <span className="mt-[0.3rem] grid size-5 shrink-0 place-items-center rounded-full bg-roufi-green-50 text-roufi-green-700">
            <Check className="size-3" strokeWidth={3} aria-hidden="true" />
          </span>
          <span>{typeof item === "string" ? item : item.content}</span>
        </li>
      ))}
    </ul>
  );
}

/** Compact tags, used for short service lists such as cattle care. */
export function TagList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-stone-200 bg-white px-4 py-2 text-[0.9375rem] font-medium text-stone-800 shadow-[0_1px_2px_rgb(28_25_23/0.04)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Numbered rows with a hairline between them. items: [{ key, content }] */
export function NumberedList({ items }) {
  return (
    <ol className="divide-y divide-stone-200 border-y border-stone-200">
      {items.map((item, index) => (
        <li key={item.key} className="grid grid-cols-[2.5rem_1fr] gap-4 py-6 sm:grid-cols-[3.5rem_1fr]">
          <span className="pt-0.5 text-sm font-semibold tabular-nums tracking-[0.08em] text-roufi-red-700">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="leading-[1.8] text-stone-600">{item.content}</div>
        </li>
      ))}
    </ol>
  );
}

/** Tinted aside for a note or tip within the copy. */
export function Callout({ icon: Icon = Info, label, children, tone = "green" }) {
  const tones = {
    green: "bg-roufi-green-50 text-roufi-green-800",
    cream: "bg-roufi-cream-100 text-roufi-brown",
    brown: "bg-roufi-brown-50 text-roufi-brown",
  };
  return (
    <aside className={cn("relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8", tones[tone])}>
      <p className="flex items-center gap-3">
        <span className="grid size-9 place-items-center rounded-full bg-white shadow-hairline">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.16em]">{label}</span>
      </p>
      <div className="mt-4 text-[1.0625rem] leading-relaxed text-stone-700 [&_a]:font-semibold [&_a]:text-roufi-green-700 [&_a]:underline [&_a]:decoration-roufi-green/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-roufi-green">
        {children}
      </div>
    </aside>
  );
}

/** Large closing statement. */
export function PullQuote({ children }) {
  return (
    <figure className="!mt-12 border-l-2 border-roufi-red pl-6">
      <blockquote className="type-h3 font-medium text-stone-900">{children}</blockquote>
    </figure>
  );
}

/** Vertical step sequence. steps: [{ label, content }] */
export function Steps({ steps }) {
  return (
    <ol className="relative !mt-10 space-y-10 before:absolute before:bottom-3 before:left-5 before:top-3 before:w-px before:bg-stone-200">
      {steps.map((step, index) => (
        <li key={step.label} className="relative grid grid-cols-[2.5rem_1fr] gap-5 sm:gap-7">
          <span className="relative z-10 grid size-10 place-items-center rounded-full border border-roufi-green/40 bg-white text-sm font-semibold text-roufi-green-700 shadow-[0_0_0_6px_#fff]">
            {index + 1}
          </span>
          <div>
            <h2 className="!mt-1.5 !text-lg !tracking-tight font-semibold text-stone-900">{step.label}</h2>
            <p className="mt-3 leading-[1.8] text-stone-600">{step.content}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Two-column grid of titled tiles. items: [{ title, icon?, content }] */
export function TileGrid({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map(({ title, icon: Icon, content }) => (
        <div key={title} className="rounded-[1.5rem] border border-stone-200 bg-white p-6">
          {Icon && (
            <span className="mb-5 grid size-11 place-items-center rounded-full bg-roufi-cream-100 text-roufi-red">
              <Icon className="size-5" aria-hidden="true" />
            </span>
          )}
          <h3 className="!mt-0 text-lg font-semibold leading-snug tracking-tight text-stone-900">{title}</h3>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-stone-600">{content}</p>
        </div>
      ))}
    </div>
  );
}
