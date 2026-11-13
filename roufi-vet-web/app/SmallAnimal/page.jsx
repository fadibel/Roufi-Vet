import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { CATEGORIES, SMALL_ANIMAL_SERVICES } from "@/lib/services";
import { PRIMARY_PHONE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import CallToAction from "@/components/CallToAction";
import HeroBanner from "@/components/HeroBanner";
import ServiceCard from "@/components/ServiceCard";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata = {
  title: CATEGORIES.small.title,
  description:
    "RoufiVet Veterinary Clinic is proud to offer a comprehensive range of veterinary services to address the needs of small animals, including pocket pets and exotics.",
};

const SmallAnimal = () => {
  return (
    <>
      <HeroBanner
        image="/assets/Team-Baanner.jpg"
        alt="A small puppy lying in the grass"
        eyebrow="Our Services"
        title={[{ text: "Small Animal" }, { text: "Services", className: "text-roufi-light-green" }]}
        objectPosition="50% 55%"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services", href: "/ServicesPage" },
          { label: CATEGORIES.small.title },
        ]}
      />

      <section className="section-y bg-roufi-cream">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="eyebrow">{SMALL_ANIMAL_SERVICES.length} services</p>
              <p className="type-h3 mt-6 font-medium leading-snug text-stone-900">
                RoufiVet Veterinary Clinic is proud to offer a comprehensive range of veterinary services to address
                the needs of small animals, including pocket pets and exotics. Our skilled and caring medical team is
                here whether your pet needs wellness care or advanced medical treatment.
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

          <Stagger as="ul" className="mt-16 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3" stagger={0.06}>
            {SMALL_ANIMAL_SERVICES.map((service) => (
              <StaggerItem as="li" key={service.href}>
                <ServiceCard service={service} headingLevel="h2" />
              </StaggerItem>
            ))}
          </Stagger>
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

export default SmallAnimal;
