import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Stethoscope } from "lucide-react";

import { CLINIC } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import ServiceImage from "@/components/ServiceImage";
import { Reveal } from "@/components/motion/Reveal";

/** Homepage preview of the clinic story and its veterinarian. */
const About = () => {
  return (
    <section className="section-y relative isolate overflow-hidden bg-roufi-cream">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-[url('/assets/Welcome-Topography-Pattern.png')] bg-cover bg-top opacity-90 mix-blend-multiply"
      />

      <div className="shell grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <Reveal className="relative pb-10 lg:col-span-6 lg:pb-0" y={40}>
          <div className="relative ml-auto w-[86%] sm:w-[78%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/assets/GettyImages-184384329-56a001545f9b58eba4ae69d1.jpg"
                alt="A veterinarian with a labrador puppy on the examination table"
                fill
                sizes="(min-width: 1024px) 38vw, 80vw"
                className="object-cover object-[60%_50%]"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-[56%] rounded-[1.6rem] bg-white p-2 shadow-lift sm:w-[46%]">
            <ServiceImage
              src="/assets/Meet-the-Team.png"
              alt="A woman with two horses"
              sizes="(min-width: 1024px) 260px, 45vw"
              className="aspect-[453/286] rounded-[1.2rem]"
            />
          </div>

          <div className="absolute left-0 top-6 max-w-[15rem] rounded-2xl bg-white/95 p-4 shadow-lift sm:top-10 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-roufi-green text-white">
                <Stethoscope className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[0.9375rem] font-semibold leading-tight text-stone-900">
                  {CLINIC.veterinarian.name}
                </p>
                <p className="mt-0.5 text-[0.8125rem] text-stone-500">{CLINIC.veterinarian.role}</p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal>
            <p className="eyebrow">About Roufi Vet</p>
            <h2 className="type-h2 mt-5 text-stone-900">Our Story</h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-stone-600">
            <p>
              Founded in 1992, Roufi Vet Clinic has been providing exceptional veterinary care to pets and their
              families for over a decade. Our mission is to deliver compassionate, high-quality veterinary services
              that enhance the lives of animals and strengthen the bond between pets and their owners.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <blockquote className="mt-8 border-l-2 border-roufi-red pl-5">
              <p className="text-[1.0625rem] font-medium leading-relaxed text-stone-900">{CLINIC.veterinarian.bio}</p>
            </blockquote>
          </Reveal>
          <Reveal delay={0.22} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button asChild size="lg">
              <Link href="/BookAppointment">Book Appointment</Link>
            </Button>
            <Link href="/About" className="group inline-flex items-center gap-2 font-semibold text-stone-900">
              <span className="link-underline">Read our story</span>
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
