import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-base leading-relaxed text-stone-900 shadow-[0_1px_2px_rgb(28_25_23/0.04)] transition-[border-color,box-shadow] duration-200 placeholder:text-stone-400 hover:border-stone-400 focus-visible:border-roufi-green focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-roufi-green/15 disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-roufi-red-700 aria-[invalid=true]:focus-visible:ring-roufi-red/15 sm:text-[0.9375rem]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };
