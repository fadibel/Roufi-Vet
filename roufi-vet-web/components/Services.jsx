import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CATEGORIES, LARGE_ANIMAL_SERVICES, SMALL_ANIMAL_SERVICES } from "@/lib/services";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const panels = [
  {
    ...CATEGORIES.small,
    image: "/assets/Team-Baanner.jpg",
    alt: "A small puppy lying in the grass",
    position: "object-[50%_55%]",
    services: SMALL_ANIMAL_SERVICES,
  },
  {
    ...CATEGORIES.large,
    image: "/assets/zoetis.jpg",
    alt: "A group of young cattle standing in a pasture",
    position: "object-[42%_60%]",
    services: LARGE_ANIMAL_SERVICES,
  },
];

const VISIBLE_CHIPS = 4;

const Services = () => {
  return (
    <section className="section-y bg-white">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="Our Services"
            title="Comprehensive services for large and small animals"
          />
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="type-lead text-stone-600">
              We offer comprehensive services for large and small animals, with a focus on preventative care such as
              annual wellness exams, vaccinations, nutritional counseling, and parasite prevention. Our skilled and
              caring medical team is also here when the animal you care about needs experienced diagnostics,
              orthopedic services, and more.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-2 lg:gap-5">
          {panels.map((panel) => {
            const extra = panel.services.length - VISIBLE_CHIPS;
            return (
              <StaggerItem key={panel.href}>
                <Link
                  href={panel.href}
                  className="group relative isolate flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[2rem] p-6 text-white sm:aspect-[16/11] sm:p-9 lg:aspect-[11/12] lg:p-10"
                >
                  <Image
                    src={panel.image}
                    alt={panel.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className={`-z-10 object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.05] ${panel.position}`}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/0 transition-opacity duration-700 group-hover:opacity-90"
                  />

                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="text-sm font-medium text-white/75">{panel.services.length} services</p>
                      <h3 className="type-h2 mt-2">{panel.shortTitle}</h3>
                    </div>
                    <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-stone-900 transition-[background-color,color,transform] duration-500 ease-out-expo group-hover:-rotate-45 group-hover:bg-roufi-green group-hover:text-white">
                      <ArrowRight className="size-5" aria-hidden="true" />
                    </span>
                  </div>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {panel.services.slice(0, VISIBLE_CHIPS).map((service) => (
                      <li
                        key={service.href}
                        className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[0.8125rem] font-medium text-white/90"
                      >
                        {service.shortTitle ?? service.title}
                      </li>
                    ))}
                    {extra > 0 && (
                      <li className="rounded-full px-1 py-1.5 text-[0.8125rem] font-medium text-white/70">
                        +{extra} more
                      </li>
                    )}
                  </ul>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
};

export default Services;
