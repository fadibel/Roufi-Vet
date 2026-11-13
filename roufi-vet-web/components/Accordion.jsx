"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accessible accordion. Answers stay in the DOM (for search engines) and are
 * hidden from assistive technology while collapsed.
 * items: [{ question, answer }]
 */
export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="border-t border-stone-300/70">
      {items.map((item, index) => {
        const isOpen = open === index;
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <div key={item.question} className="border-b border-stone-300/70">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left lg:py-7"
              >
                <span
                  className={cn(
                    "text-lg font-semibold tracking-[-0.015em] transition-colors duration-300 lg:text-xl",
                    isOpen ? "text-roufi-green-700" : "text-stone-900 group-hover:text-roufi-green-700"
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid size-10 shrink-0 place-items-center rounded-full border transition-[background-color,border-color,color,transform] duration-500 ease-out-expo",
                    isOpen
                      ? "rotate-45 border-roufi-green bg-roufi-green text-white"
                      : "border-stone-300 text-stone-600 group-hover:border-roufi-green group-hover:text-roufi-green-700"
                  )}
                >
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              inert={!isOpen ? true : undefined}
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="max-w-3xl pb-7 pr-14 text-[1.0625rem] leading-relaxed text-stone-600">
                {item.answer}
              </p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
