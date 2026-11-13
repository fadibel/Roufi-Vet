import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CATEGORIES, getService } from "@/lib/services";
import ServiceImage from "@/components/ServiceImage";
import SectionHeading from "@/components/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const highlighted = ["willnesscare", "diagnostics", "surgery", "orthopedics", "ultrasoundandecho"].map((slug) =>
  getService("small", slug)
);
const farmhouse = getService("large", "farmhouse-call");

/** Editorial mix: one large feature tile and an indexed list of services. */
const FeaturedServices = () => {
  return (
    <section className="section-y bg-white">
      <div className="shell">
        <SectionHeading
          eyebrow="Featured Services"
          title="Wellness care or advanced medical treatment"
          intro="Our skilled and caring medical team is here whether your pet needs wellness care or advanced medical treatment."
        />

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <Link
              href={farmhouse.href}
              className="group relative isolate flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[2rem] bg-roufi-green-950 p-7 text-white sm:p-9"
            >
              <span
                aria-hidden="true"
                className="topo absolute -right-28 -top-24 -z-10 h-[30rem] w-[34rem] bg-roufi-light-green/[0.13] transition-transform duration-[1400ms] ease-out-expo group-hover:rotate-6 group-hover:scale-105"
              />
              <p className="eyebrow eyebrow-light">{CATEGORIES.large.title}</p>
              <h3 className="type-h2 mt-6">{farmhouse.title}</h3>
              <p className="mt-5 max-w-md text-[1.0625rem] leading-relaxed text-white/75">
                {farmhouse.summary} We can come to you to provide veterinary services for farm animals, cattle, and
                horses.
              </p>
              <div className="mt-auto pt-10">
                <ServiceImage
                  src={farmhouse.image}
                  alt={farmhouse.alt}
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="aspect-[401/220] rounded-[1.35rem]"
                />
                <span className="mt-6 inline-flex items-center gap-2 font-semibold">
                  <span className="link-underline">Learn about farmhouse calls</span>
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          </Reveal>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-2">{CATEGORIES.small.title}</p>
            <Stagger as="ol" className="border-t border-stone-200" stagger={0.07}>
              {highlighted.map((service, index) => (
                <StaggerItem as="li" key={service.href} className="border-b border-stone-200">
                  <Link
                    href={service.href}
                    className="group -mx-3 grid grid-cols-[auto_1fr_auto] items-center gap-5 rounded-2xl px-3 py-5 transition-colors duration-300 hover:bg-roufi-cream sm:gap-7 sm:py-6"
                  >
                    <ServiceImage
                      src={service.image}
                      alt=""
                      sizes="160px"
                      className="aspect-[4/3] w-24 rounded-2xl sm:w-36"
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-semibold tabular-nums tracking-[0.1em] text-roufi-red-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold leading-snug tracking-[-0.02em] text-stone-900 transition-colors duration-300 group-hover:text-roufi-green-700 sm:text-[1.375rem]">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 hidden text-[0.9375rem] leading-relaxed text-stone-500 sm:block">
                        {service.summary}
                      </p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-stone-200 text-stone-500 transition-[background-color,border-color,color,transform] duration-500 ease-out-expo group-hover:rotate-45 group-hover:border-roufi-green group-hover:bg-roufi-green group-hover:text-white">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal className="mt-8">
              <Link
                href={CATEGORIES.small.href}
                className="group inline-flex items-center gap-2 font-semibold text-roufi-green-700"
              >
                <span className="link-underline">View all small animal services</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
