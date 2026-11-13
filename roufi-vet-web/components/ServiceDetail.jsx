import Link from "next/link";
import { ArrowRight, Calendar, Mail, MapPin, Phone } from "lucide-react";

import { CATEGORIES, getRelatedServices } from "@/lib/services";
import { CLINIC } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import HeroWords from "@/components/HeroWords";
import RelatedCarousel from "@/components/RelatedCarousel";
import ServiceCard from "@/components/ServiceCard";
import ServiceImage from "@/components/ServiceImage";
import { Reveal } from "@/components/motion/Reveal";

function ServiceHero({ service, category }) {
  const large = service.category === "large";
  return (
    <section className="pt-hero relative isolate overflow-hidden bg-roufi-cream pb-16 lg:pb-24">
      <span
        aria-hidden="true"
        className={`topo absolute -right-48 top-16 -z-10 h-[42rem] w-[48rem] ${
          large ? "bg-roufi-brown/[0.08]" : "bg-roufi-green/[0.07]"
        }`}
      />
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <Breadcrumbs
            className="hero-rise"
            items={[
              { label: "Home", href: "/" },
              { label: "Our Services", href: "/ServicesPage" },
              { label: category.title, href: category.href },
              { label: service.shortTitle ?? service.title },
            ]}
          />
          <p
            className={`eyebrow hero-rise mt-10 ${large ? "!text-roufi-brown" : ""}`}
            style={{ "--d": "80ms" }}
          >
            {category.title}
          </p>
          <h1 className="type-h1 mt-5 text-stone-900">
            <HeroWords segments={[{ text: service.title }]} baseDelay={140} step={60} />
          </h1>
          <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "480ms" }}>
            <Button asChild size="lg">
              <Link href="/BookAppointment">
                <Calendar />
                Book an Appointment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/Contact">
                <Phone />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <div className="hero-rise lg:col-span-5" style={{ "--d": "220ms" }}>
          <div className="relative mx-auto max-w-[30rem]">
            <span
              aria-hidden="true"
              className={`absolute -inset-3 -rotate-3 rounded-[2.25rem] sm:-inset-4 ${
                large ? "bg-roufi-brown/15" : "bg-roufi-green/15"
              }`}
            />
            <ServiceImage
              src={service.image}
              alt={service.alt}
              priority
              sizes="(min-width: 1024px) 480px, 90vw"
              className="relative aspect-[401/220] rounded-[1.75rem] shadow-lift"
            />
            <span
              aria-hidden="true"
              className="absolute -bottom-2 -right-2 size-5 rounded-full border-4 border-roufi-cream bg-roufi-red"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingCard() {
  return (
    <div className="rounded-[1.75rem] bg-roufi-cream p-7 shadow-hairline sm:p-8">
      <p className="eyebrow">Book a visit</p>
      <p className="mt-5 text-xl font-semibold leading-snug tracking-[-0.02em] text-stone-900">
        Have questions or want to make an appointment?
      </p>
      <p className="mt-2 text-[0.9375rem] text-stone-500">Give us a call at</p>
      <ul className="mt-3 space-y-1">
        {CLINIC.phones.map((phone) => (
          <li key={phone.href}>
            <a
              href={phone.href}
              className="inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-stone-900 transition-colors hover:text-roufi-red-700"
            >
              <Phone className="size-4 text-roufi-red" aria-hidden="true" />
              {phone.display}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-7 grid gap-2.5">
        <Button asChild>
          <Link href="/BookAppointment">
            Book an Appointment
            <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/Contact">
            <Mail />
            Contact Us
          </Link>
        </Button>
      </div>
      <p className="mt-7 flex items-start gap-2.5 border-t border-stone-300/60 pt-6 text-sm leading-relaxed text-stone-500">
        <MapPin className="mt-0.5 size-4 shrink-0 text-roufi-red" aria-hidden="true" />
        {CLINIC.address.line1}, {CLINIC.address.line2}
      </p>
    </div>
  );
}

function RelatedServices({ service, category }) {
  const related = getRelatedServices(service);
  const large = service.category === "large";
  const label = large ? "Large" : "Small";

  return (
    <section className="section-y overflow-hidden bg-roufi-cream">
      <div className="shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className={`eyebrow ${large ? "!text-roufi-brown" : ""}`}>{category.title}</p>
            <h2 className="type-h2 mt-5 text-stone-900">Other {label} Animal Services</h2>
          </Reveal>
          <Link
            href={category.href}
            className="group inline-flex shrink-0 items-center gap-2 font-semibold text-roufi-green-700"
          >
            <span className="link-underline">View all</span>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 lg:mt-12">
          {related.length > 3 ? (
            <RelatedCarousel label={`Other ${label.toLowerCase()} animal services`}>
              {related.map((item) => (
                <li key={item.href} className="w-[80vw] max-w-[20.5rem] shrink-0 snap-start sm:w-[20.5rem]">
                  <ServiceCard service={item} />
                </li>
              ))}
            </RelatedCarousel>
          ) : (
            <ul className="grid gap-5 sm:grid-cols-2 lg:max-w-4xl">
              {related.map((item) => (
                <li key={item.href}>
                  <ServiceCard service={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        <Reveal className="mt-10 max-w-2xl">
          <p className="type-lead text-stone-600">
            Our experienced veterinary team is committed to providing the highest quality care for all{" "}
            {label.toLowerCase()} animals.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Layout for an individual service page.
 * Children are the page's own copy, composed from components/ServiceContent.
 */
export default function ServiceDetail({ service, children }) {
  const category = CATEGORIES[service.category];
  return (
    <>
      <ServiceHero service={service} category={category} />

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-12">
          <article className="prose-roufi lg:col-span-7">{children}</article>
          <aside className="lg:col-span-5 xl:col-span-4 xl:col-start-9">
            <div className="lg:sticky lg:top-[calc(var(--header-h)_+_1.5rem)]">
              <BookingCard />
            </div>
          </aside>
        </div>
      </section>

      <RelatedServices service={service} category={category} />

      <CallToAction
        variant="contact"
        eyebrow="Book a visit"
        title="Ready to Schedule an Appointment?"
        description="Our team is ready to provide your pet with the care they deserve. Book an appointment today or contact us with any questions."
        background="bg-roufi-cream"
      />
    </>
  );
}
