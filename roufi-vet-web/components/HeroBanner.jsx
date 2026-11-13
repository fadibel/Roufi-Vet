import Image from "next/image";

import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroWords from "@/components/HeroWords";
import { Parallax } from "@/components/motion/Parallax";

const TONES = {
  green: "bg-gradient-to-t from-roufi-green-950/85 via-roufi-green-950/30 to-black/10",
  earth: "bg-gradient-to-t from-roufi-brown-900/90 via-roufi-brown-900/35 to-black/10",
};

/**
 * Framed full-width photographic banner used by the Small and Large Animal
 * section pages.
 */
const HeroBanner = ({
  image,
  alt = "",
  eyebrow,
  title,
  breadcrumbs,
  tone = "green",
  objectPosition = "50% 50%",
  children,
}) => {
  return (
    <section className="frame bg-roufi-cream pt-[calc(var(--header-h)_+_0.25rem)]">
      <div className="relative isolate flex min-h-[30rem] items-end overflow-hidden rounded-[1.75rem] bg-roufi-green-950 sm:min-h-[34rem] lg:min-h-[40rem] lg:rounded-[2.5rem]">
        <Parallax className="-z-10">
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="animate-scale-in object-cover"
            style={{ objectPosition }}
          />
        </Parallax>
        <div aria-hidden="true" className={cn("absolute inset-0 -z-10", TONES[tone])} />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent"
        />

        <div className="shell relative pb-10 pt-28 sm:pb-14 lg:pb-20">
          {breadcrumbs && (
            <Breadcrumbs items={breadcrumbs} tone="dark" className="hero-rise mb-8" />
          )}
          {eyebrow && (
            <p className="eyebrow eyebrow-light hero-rise" style={{ "--d": "120ms" }}>
              {eyebrow}
            </p>
          )}
          <h1 className="type-display mt-5 max-w-4xl text-white">
            <HeroWords segments={typeof title === "string" ? [{ text: title }] : title} baseDelay={180} />
          </h1>
          {children && (
            <div className="hero-rise mt-8" style={{ "--d": "520ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
