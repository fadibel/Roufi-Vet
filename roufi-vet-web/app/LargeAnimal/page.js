import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { cn } from "@/lib/utils";
import { CATEGORIES, LARGE_ANIMAL_SERVICES } from "@/lib/services";
import { PRIMARY_PHONE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import CallToAction from "@/components/CallToAction";
import HeroBanner from "@/components/HeroBanner";
import ServiceImage from "@/components/ServiceImage";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: CATEGORIES.large.title,
  description:
    "RoufiVet Veterinary Clinic is proud to offer veterinary services for horses, cattle, and livestock, including on-site farmhouse calls.",
};

// Short items from each service page, shown as tags under the summary.
const highlights = {
  equine: ["Pre-purchase exams", "Ophthalmic exams", "In-house radiology", "Dentistry/floats", "Surgery"],
  cattle: ["Vaccinations", "Breeding soundness", "Health certificates", "Dehorning", "C-sections"],
  "farmhouse-call": ["Farm animals", "Cattle", "Horses"],
};

const LargeAnimal = () => {
  return (
    <>
      <HeroBanner
        image="/assets/zoetis.jpg"
        alt="A group of young cattle standing in a pasture"
        tone="earth"
        eyebrow="Our Services"
        title={[{ text: "Large Animal" }, { text: "Services", className: "text-roufi-light-green" }]}
        objectPosition="45% 60%"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/ServicesPage" },
          { label: CATEGORIES.large.title },
        ]}
      />

      <section className="section-y bg-roufi-cream">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow !text-roufi-brown">Horses, cattle and livestock</p>
              <p className="type-h3 mt-6 font-medium leading-snug text-stone-900">
                RoufiVet Veterinary Clinic is proud to offer veterinary services for horses, cattle, and livestock. We
                know that getting these animals to the vet can be difficult, time-consuming, and in some cases
                impossible, which is why we offer on-site farmhouse calls so your animals can get the care they need.
              </p>
            </Reveal>
            <Reveal delay={0.12} className="self-end lg:col-span-4 lg:col-start-9">
              <p className="text-[1.0625rem] leading-relaxed text-stone-600">
                To learn more about our services or to schedule an appointment, call us at{" "}
                <a href={PRIMARY_PHONE.href} className="whitespace-nowrap font-semibold text-roufi-red-700 hover:underline">
                  {PRIMARY_PHONE.display}
                </a>
                . You can also{" "}
                <Link href="/BookAppointment" className="font-semibold text-roufi-green-700 hover:underline">
                  book a visit online
                </Link>
                .
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/BookAppointment">
                    Book Appointment
                    <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={PRIMARY_PHONE.href}>
                    <Phone />
                    Call us
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <ol className="mt-16 lg:mt-24">
            {LARGE_ANIMAL_SERVICES.map((service, index) => {
              const reversed = index % 2 === 1;
              return (
                <li key={service.href} className="border-t border-stone-300/70 last:border-b">
                  <Reveal className="grid items-center gap-8 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
                    <Link
                      href={service.href}
                      tabIndex={-1}
                      aria-hidden="true"
                      className={cn("group block lg:col-span-5", reversed && "lg:order-2 lg:col-start-8")}
                    >
                      <ServiceImage
                        src={service.image}
                        alt=""
                        sizes="(min-width: 1024px) 460px, 90vw"
                        className="aspect-[401/220] rounded-[1.75rem]"
                      />
                    </Link>
                    <div className={cn("lg:col-span-6", reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")}>
                      <span className="text-sm font-semibold tabular-nums tracking-[0.12em] text-roufi-brown">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h2 className="type-h2 mt-3 text-stone-900">
                        <Link href={service.href} className="transition-colors hover:text-roufi-green-700">
                          {service.title}
                        </Link>
                      </h2>
                      <p className="mt-5 type-lead text-stone-600">{service.summary}</p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {highlights[service.slug].map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-roufi-brown/20 bg-white px-3.5 py-1.5 text-[0.8125rem] font-medium text-roufi-brown"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={service.href}
                        className="group mt-8 inline-flex items-center gap-2 font-semibold text-roufi-green-700"
                      >
                        <span className="link-underline">Learn more about {service.title.toLowerCase()}</span>
                        <ArrowRight
                          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
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

export default LargeAnimal;
