import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";

import { CLINIC, PRIMARY_PHONE } from "@/lib/site";
import { CATEGORIES } from "@/lib/services";
import { Button } from "@/components/ui/Button";
import HeroWords from "@/components/HeroWords";
import ServiceImage from "@/components/ServiceImage";
import { Parallax } from "@/components/motion/Parallax";

const categoryCards = [
  {
    ...CATEGORIES.small,
    image: "/assets/GettyImages-184384329-56a001545f9b58eba4ae69d1.jpg",
    position: "object-[62%_60%]",
  },
  {
    ...CATEGORIES.large,
    image: "/assets/Meet-the-Team.png",
    position: "object-[38%_40%]",
  },
];

const Hero = () => {
  return (
    <section className="frame bg-roufi-cream pt-[calc(var(--header-h)_+_0.25rem)]">
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-roufi-green-950 lg:rounded-[2.5rem]">
        <Parallax className="-z-10">
          <Image
            src="/assets/Hero.png"
            alt="A young cow standing in a green pasture"
            fill
            priority
            sizes="100vw"
            className="animate-scale-in object-cover object-[66%_50%]"
          />
        </Parallax>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-roufi-green-950/85 via-roufi-green-950/45 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/55 via-black/5 to-transparent"
        />

        <div className="shell flex min-h-[clamp(38rem,calc(100svh_-_var(--header-h)_-_1rem),56rem)] flex-col justify-end pb-8 pt-28 sm:pb-12 lg:pb-14">
          <div className="grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8 xl:col-span-7">
              <p className="eyebrow eyebrow-light hero-rise">
                {CLINIC.name} · Hamma Bouziane, Constantine
              </p>
              <h1 className="type-display mt-6 text-white">
                <HeroWords
                  baseDelay={140}
                  segments={[
                    { text: "Where hometown values meet" },
                    { text: "veterinary expertise", className: "text-roufi-light-green" },
                  ]}
                />
              </h1>
              <p className="hero-rise mt-7 max-w-xl type-lead text-white/80" style={{ "--d": "640ms" }}>
                We’re a small-town neighborhood clinic that offers all the advantages of modern veterinary
                technology.
              </p>
              <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": "760ms" }}>
                <Button asChild size="lg">
                  <Link href="/BookAppointment">
                    Book Appointment
                    <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline-light">
                  <a href={PRIMARY_PHONE.href}>
                    <Phone />
                    {PRIMARY_PHONE.display}
                  </a>
                </Button>
              </div>
            </div>

            <nav
              aria-label="Services by animal"
              className="hero-rise hidden gap-3 md:flex lg:col-span-4 lg:justify-end xl:col-span-5"
              style={{ "--d": "920ms" }}
            >
              {categoryCards.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group w-[13.25rem] rounded-[1.5rem] bg-white p-2 text-stone-900 shadow-lift transition-transform duration-500 ease-out-expo hover:-translate-y-1"
                >
                  <ServiceImage
                    src={card.image}
                    alt=""
                    sizes="212px"
                    className="aspect-[4/3] rounded-[1.1rem]"
                    imageClassName={card.position}
                  />
                  <span className="flex items-center justify-between px-2 pb-1.5 pt-3 text-[0.9375rem] font-semibold">
                    {card.shortTitle}
                    <ArrowUpRight className="size-4 text-stone-400 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-roufi-green" />
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
