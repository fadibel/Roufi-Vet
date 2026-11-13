import { ArrowDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { GENERAL_SERVICES } from "@/lib/general-services";
import SectionHeading from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

/**
 * "Our Services" overview: six general services in a hairline grid. Each tile
 * jumps to its detailed section further down the Services page.
 */
const Service2 = () => {
  return (
    <section className="section-y bg-white">
      <div className="shell">
        <SectionHeading
          eyebrow="At a glance"
          title="Our Services"
          intro="We offer comprehensive services for large and small animals, with a focus on preventative care such as annual wellness exams, vaccinations, nutritional counseling, and parasite prevention. Our skilled and caring medical team is also here when the animal you care about needs experienced diagnostics, orthopedic services, and more."
        />

        <Stagger
          as="ul"
          className="mt-14 grid overflow-hidden rounded-[2rem] border border-stone-200 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          stagger={0.06}
        >
          {GENERAL_SERVICES.map((service) => {
            const Icon = service.icon;
            const red = service.accent === "red";
            return (
              <StaggerItem
                as="li"
                key={service.id}
                className="-mb-px -mr-px border-b border-r border-stone-200"
              >
                <a
                  href={`#${service.id}`}
                  className="group flex h-full flex-col p-7 transition-colors duration-300 hover:bg-roufi-cream sm:p-9"
                >
                  <span
                    className={cn(
                      "grid size-14 place-items-center rounded-2xl transition-transform duration-500 ease-out-expo group-hover:-rotate-6 group-hover:scale-105",
                      red ? "bg-roufi-red-50 text-roufi-red" : "bg-roufi-green-50 text-roufi-green"
                    )}
                  >
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-stone-900">{service.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-stone-500">{service.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-roufi-green-700">
                    Details
                    <ArrowDown
                      className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Service2;
