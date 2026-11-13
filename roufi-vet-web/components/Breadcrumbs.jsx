import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/** items: [{ label, href }]; the last item is the current page. */
export default function Breadcrumbs({ items, tone = "light", className }) {
  const dark = tone === "dark";
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.8125rem]">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={cn("font-medium", dark ? "text-white" : "text-stone-900")}>
                  {item.label}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors",
                      dark ? "text-white/70 hover:text-white" : "text-stone-500 hover:text-roufi-green-700"
                    )}
                  >
                    {item.label}
                  </Link>
                  <ChevronRight
                    className={cn("size-3.5", dark ? "text-white/50" : "text-stone-400")}
                    aria-hidden="true"
                  />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
