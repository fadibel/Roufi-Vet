import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { CATEGORIES, LARGE_ANIMAL_SERVICES, SMALL_ANIMAL_SERVICES } from "@/lib/services";
import { FAQS, GENERAL_SERVICES } from "@/lib/general-services";
import { Button } from "@/components/ui/Button";
import Accordion from "@/components/Accordion";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import HeroWords from "@/components/HeroWords";
import SectionHeading from "@/components/SectionHeading";
import Service2 from "@/components/Service2";
import { CheckList } from "@/components/ServiceContent";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata = {
  title: "Our Services",
  description:
    "At Roufi Vet Clinic, we provide comprehensive care for animals of all types and ages. Explore our small and large animal services.",
};

const categories = [
  {
    ...CATEGORIES.small,
    image: "/assets/Team-Baanner.jpg",
    alt: "A small puppy lying in the grass",
    position: "object-[50%_55%]",
    services: SMALL_ANIMAL_SERVICES,
    intro:
      "RoufiVet Veterinary Clinic is proud to offer a comprehensive range of veterinary services to address the needs of small animals, including pocket pets and exotics.",
  },
  {
    ...CATEGORIES.large,
    image: "/assets/zoetis.jpg",
    alt: "A group of young cattle standing in a pasture",
    position: "object-[45%_60%]",
    services: LARGE_ANIMAL_SERVICES,
    intro: "RoufiVet Veterinary Clinic is proud to offer veterinary services for horses, cattle, and livestock.",
  },
];

function CategoryCard({ category }) {
  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-hairline">
      <Link href={category.href} className="group relative block aspect-[16/9] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-[1400ms] ease-out-expo group-hover:scale-[1.05]",
            category.position
          )}
        />
      </Link>
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <div className="flex items-start justify-between gap-6">
          <h2 className="type-h3 text-stone-900">
            <Link href={category.href} className="transition-colors hover:text-roufi-green-700">
              {category.title}
            </Link>
          </h2>
          <span className="shrink-0 rounded-full bg-roufi-cream-100 px-3 py-1 text-xs font-semibold tabular-nums text-stone-600">
            {category.services.length} services
          </span>
        </div>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone-500">{category.intro}</p>
        <ul className="mt-7 grid gap-x-6 border-t border-stone-200 pt-5 sm:grid-cols-2">
          {category.services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="group flex items-center justify-between gap-3 border-b border-stone-100 py-2.5 text-[0.9375rem] text-stone-700 transition-colors hover:text-roufi-green-700"
              >
                {service.title}
                <ArrowUpRight
                  className="size-3.5 shrink-0 text-stone-300 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-roufi-green"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href={category.href}
          className="group mt-8 inline-flex items-center gap-2 self-start font-semibold text-roufi-green-700"
        >
          <span className="link-underline">Explore {category.shortTitle.toLowerCase()}</span>
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

const ServicesPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-hero relative isolate overflow-hidden bg-roufi-cream pb-16 lg:pb-20">
        <span
          aria-hidden="true"
          className="topo absolute -right-40 -top-10 -z-10 h-[44rem] w-[50rem] bg-roufi-green/[0.07]"
        />
        <div className="shell">
          <Breadcrumbs
            className="hero-rise"
            items={[{ label: "Home", href: "/" }, { label: "Our Services" }]}
          />
          <p className="eyebrow hero-rise mt-10" style={{ "--d": "80ms" }}>
            Our Services
          </p>
          <h1 className="type-display mt-6 max-w-4xl text-stone-900">
            <HeroWords
              baseDelay={140}
              segments={[
                { text: "Our" },
                { text: "Veterinary", className: "text-roufi-red" },
                { text: "Services" },
              ]}
            />
          </h1>
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <p className="hero-rise type-lead text-stone-600 lg:col-span-7" style={{ "--d": "420ms" }}>
              At Roufi Vet Clinic, we provide comprehensive care for animals of all types and ages. Explore our range of
              services designed to keep your furry family members healthy and happy.
            </p>
            <div
              className="hero-rise flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end"
              style={{ "--d": "540ms" }}
            >
              <Button asChild size="lg">
                <Link href="/SmallAnimal">Small Animals</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/LargeAnimal">Large Animals</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by animal */}
      <section className="bg-roufi-cream pb-20 lg:pb-28">
        <Stagger className="shell grid gap-5 lg:grid-cols-2">
          {categories.map((category) => (
            <StaggerItem key={category.href}>
              <CategoryCard category={category} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Overview */}
      <Service2 />

      {/* Detailed services */}
      <section className="section-y border-t border-stone-200 bg-white">
        <div className="shell">
          <SectionHeading
            eyebrow="In detail"
            title={
              <>
                Detailed <span className="text-roufi-green-700">Service</span> Information
              </>
            }
            intro="Learn more about the comprehensive veterinary services we offer for your beloved pets."
          />

          <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
            <nav aria-label="Services on this page" className="hidden lg:col-span-3 lg:block">
              <ul className="sticky top-[calc(var(--header-h)_+_2rem)] space-y-1 border-l border-stone-200">
                {GENERAL_SERVICES.map((service) => (
                  <li key={service.id}>
                    <a
                      href={`#${service.id}`}
                      className="-ml-px block border-l-2 border-transparent py-2 pl-5 text-[0.9375rem] text-stone-500 transition-colors hover:border-roufi-green hover:text-stone-900"
                    >
                      {service.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="lg:col-span-9">
              {GENERAL_SERVICES.map((service, index) => {
                const Icon = service.icon;
                const red = service.accent === "red";
                return (
                  <Reveal
                    as="article"
                    key={service.id}
                    id={service.id}
                    className={cn(
                      "grid gap-6 py-12 sm:grid-cols-[auto_1fr] sm:gap-10",
                      index > 0 && "border-t border-stone-200",
                      index === 0 && "pt-0"
                    )}
                  >
                    <span
                      className={cn(
                        "grid size-16 place-items-center rounded-[1.25rem]",
                        red ? "bg-roufi-red-50 text-roufi-red" : "bg-roufi-green-50 text-roufi-green"
                      )}
                    >
                      <Icon className="size-8" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className={cn("type-h3", red ? "text-roufi-red-700" : "text-roufi-green-700")}>
                        {service.title}
                      </h3>
                      <p className="mt-4 text-[1.0625rem] leading-[1.8] text-stone-600">{service.description}</p>
                      <CheckList items={service.features} className="mt-7" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y bg-roufi-cream">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)_+_2rem)]">
              <SectionHeading
                eyebrow="FAQ"
                title={
                  <>
                    Frequently Asked <span className="text-roufi-red-700">Questions</span>
                  </>
                }
                intro="Find answers to common questions about our veterinary services."
              />
              <Reveal delay={0.1} className="mt-8">
                <Link href="/Contact" className="group inline-flex items-center gap-2 font-semibold text-roufi-green-700">
                  <span className="link-underline">Contact Us</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
          <Reveal className="lg:col-span-8">
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CallToAction
        variant="contact"
        title="Ready to Schedule an Appointment?"
        description="Our team is ready to provide your pet with the care they deserve. Book an appointment today or contact us with any questions."
        background="bg-roufi-cream"
      />
    </>
  );
};

export default ServicesPage;
