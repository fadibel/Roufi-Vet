import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Armchair,
  Award,
  BedDouble,
  Check,
  HeartPulse,
  MessageSquare,
  Scissors,
  Stethoscope,
  Users,
} from "lucide-react";

import { CLINIC } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import Breadcrumbs from "@/components/Breadcrumbs";
import CallToAction from "@/components/CallToAction";
import HeroWords from "@/components/HeroWords";
import SectionHeading from "@/components/SectionHeading";
import ServiceImage from "@/components/ServiceImage";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

export const metadata = {
  title: "About",
  description:
    "Founded in 1992, Roufi Vet Clinic delivers compassionate, high-quality veterinary services. Meet Dr. Belkacemi Abdelkrim and learn about our facility.",
};

const values = [
  {
    title: "Compassion",
    icon: HeartPulse,
    text: "We treat every animal with kindness, gentleness, and respect, recognizing the unique bond between pets and their families.",
  },
  {
    title: "Excellence",
    icon: Award,
    text: "We are committed to providing the highest standard of veterinary care through continued education and advanced medical practices.",
  },
  {
    title: "Community",
    icon: Users,
    text: "We believe in building strong relationships with our clients and the community, fostering a sense of trust and partnership.",
  },
  {
    title: "Education",
    icon: MessageSquare,
    text: "We empower pet owners through education, providing the knowledge and resources needed for optimal pet health and wellness.",
  },
];

const facilityFeatures = [
  "Advanced diagnostic equipment",
  "Modern surgical suites",
  "Comfortable recovery areas",
  "Separate cat and dog wards",
  "Pet-friendly waiting areas",
];

const facilityAreas = [
  { label: "Examination Room", icon: Stethoscope },
  { label: "Surgery Suite", icon: Scissors },
  { label: "Recovery Area", icon: BedDouble },
  { label: "Waiting Room", icon: Armchair },
];

const About = () => {
  return (
    <>
      {/* Hero: our story */}
      <section className="pt-hero relative isolate overflow-hidden bg-roufi-cream pb-24 lg:pb-32">
        <span
          aria-hidden="true"
          className="topo absolute -left-48 bottom-0 -z-10 h-[36rem] w-[42rem] rotate-180 bg-roufi-green/[0.06]"
        />
        <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Breadcrumbs className="hero-rise" items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <p className="eyebrow hero-rise mt-10" style={{ "--d": "80ms" }}>
              About Roufi Vet
            </p>
            <h1 className="type-display mt-6 text-stone-900">
              <HeroWords segments={[{ text: "Our" }, { text: "Story", className: "text-roufi-green-700" }]} baseDelay={140} />
            </h1>
            <div className="hero-rise mt-9 space-y-5" style={{ "--d": "380ms" }}>
              <p className="type-lead text-stone-800">
                Founded in 1992, Roufi Vet Clinic has been providing exceptional veterinary care to pets and their
                families for over a decade. Our mission is to deliver compassionate, high-quality veterinary services
                that enhance the lives of animals and strengthen the bond between pets and their owners.
              </p>
              <p className="text-[1.0625rem] leading-relaxed text-stone-600">
                What started as a small practice has grown into a trusted veterinary center, serving thousands of pets
                annually. Our success is built on a foundation of expertise, empathy, and a genuine love for animals.
              </p>
            </div>
          </div>

          <div className="hero-rise relative lg:col-span-6" style={{ "--d": "200ms" }}>
            <div className="relative ml-auto w-[84%]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                <Image
                  src="/assets/GettyImages-184384329-56a001545f9b58eba4ae69d1.jpg"
                  alt="A veterinarian with a labrador puppy on the examination table"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 84vw"
                  className="animate-scale-in object-cover object-[60%_50%]"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 left-0 w-[52%] rounded-[1.6rem] bg-roufi-cream p-2 shadow-lift">
              <ServiceImage
                src="/assets/Meet-the-Team.png"
                alt="A woman with two horses"
                sizes="(min-width: 1024px) 280px, 50vw"
                className="aspect-[453/286] rounded-[1.2rem]"
              />
            </div>
            <div className="absolute left-0 top-8 grid size-28 place-items-center rounded-full bg-roufi-red text-center text-white shadow-lift sm:size-32">
              <span>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  Founded
                </span>
                <span className="mt-0.5 block text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
                  {CLINIC.founded}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="section-y bg-white">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)_+_2rem)]">
              <SectionHeading eyebrow="What guides us" title="Our Core Values" />
            </div>
          </div>
          <Stagger as="ol" className="border-t border-stone-200 lg:col-span-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <StaggerItem
                  as="li"
                  key={value.title}
                  className="group grid grid-cols-[auto_1fr] gap-6 border-b border-stone-200 py-9 sm:grid-cols-[4rem_auto_1fr] sm:gap-8 lg:py-11"
                >
                  <span className="hidden pt-2 text-sm font-semibold tabular-nums tracking-[0.08em] text-roufi-red-700 sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="grid size-14 place-items-center rounded-2xl bg-roufi-cream-100 text-roufi-red transition-transform duration-500 ease-out-expo group-hover:-rotate-6">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="type-h3 text-stone-900">{value.title}</h3>
                    <p className="mt-3 max-w-xl text-[1.0625rem] leading-relaxed text-stone-600">{value.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Meet our doctor */}
      <section className="frame bg-white pb-3 sm:pb-4 lg:pb-5">
        <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-roufi-green-950 text-white lg:rounded-[2.5rem]">
          <span
            aria-hidden="true"
            className="topo absolute -right-32 -top-20 -z-10 h-[40rem] w-[46rem] bg-roufi-light-green/[0.12]"
          />
          <div className="shell grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-12 lg:py-32">
            <Reveal className="lg:col-span-5">
              <p className="text-[clamp(6rem,4rem+8vw,11rem)] font-semibold leading-[0.85] tracking-[-0.06em] text-roufi-light-green">
                <CountUp to={33} suffix="+" />
              </p>
              <p className="mt-6 max-w-xs type-lead text-white/75">years of experience in veterinary medicine</p>
            </Reveal>
            <Reveal delay={0.12} className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow eyebrow-light">Meet Our Doctor</p>
              <h2 className="type-h1 mt-6">{CLINIC.veterinarian.name}</h2>
              <p className="mt-3 text-lg font-medium text-roufi-light-green">{CLINIC.veterinarian.role}</p>
              <p className="mt-8 type-lead text-white/80">{CLINIC.veterinarian.bio}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["Small animal care", "Large animal care", "Surgery"].map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="light" className="mt-10">
                <Link href="/BookAppointment">
                  Book Appointment
                  <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="section-y bg-white">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Inside the clinic" title="Our Facility" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-stone-600">
                Our modern veterinary facility is equipped with state-of-the-art technology and designed to provide a
                comfortable, stress-free environment for your pets. From our welcoming reception area to our clean,
                well-maintained examination rooms, every aspect of our clinic is centered around delivering exceptional
                care.
              </p>
              <ul className="mt-8 space-y-3.5">
                {facilityFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-stone-800">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-roufi-red-50 text-roufi-red">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Stagger as="ul" className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-7" stagger={0.08}>
            {facilityAreas.map(({ label, icon: Icon }, index) => (
              <StaggerItem
                as="li"
                key={label}
                className="group relative isolate flex aspect-square flex-col justify-between overflow-hidden rounded-[1.75rem] bg-roufi-cream p-5 sm:aspect-[5/4] sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="topo absolute -bottom-16 -right-16 -z-10 size-56 bg-roufi-green/[0.08] transition-transform duration-[1200ms] ease-out-expo group-hover:rotate-12 group-hover:scale-110"
                />
                <div className="flex items-start justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-white text-roufi-green shadow-hairline">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-stone-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-lg font-semibold leading-tight tracking-tight text-stone-900 sm:text-xl">
                  {label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
