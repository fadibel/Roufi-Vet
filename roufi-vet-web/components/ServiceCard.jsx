import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import ServiceImage from "@/components/ServiceImage";

/**
 * Image card linking to a service page.
 * `service` comes from lib/services.js.
 */
const ServiceCard = ({ service, className, showSummary = true, headingLevel = "h3" }) => {
  const Heading = headingLevel;
  return (
    <Link
      href={service.href}
      className={cn(
        "group flex h-full flex-col rounded-[1.75rem] bg-white p-2.5 shadow-hairline transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift",
        className
      )}
    >
      <ServiceImage
        src={service.image}
        alt={service.alt}
        className="aspect-[401/220] rounded-[1.35rem]"
      />
      <div className="flex flex-1 flex-col px-3.5 pb-4 pt-5">
        <div className="flex items-start justify-between gap-4">
          <Heading className="text-[1.1875rem] font-semibold leading-snug tracking-[-0.015em] text-stone-900">
            {service.title}
          </Heading>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-stone-200 text-stone-500 transition-[background-color,border-color,color,transform] duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-roufi-green group-hover:bg-roufi-green group-hover:text-white">
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </span>
        </div>
        {showSummary && (
          <p className="mt-2.5 line-clamp-3 text-[0.9375rem] leading-relaxed text-stone-500">
            {service.summary}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
