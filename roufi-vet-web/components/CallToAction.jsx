import Link from "next/link";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";

import { cn } from "@/lib/utils";
import { PRIMARY_PHONE } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Closing appointment band.
 *
 * variant="call": "Call Now" + "Book Online" (homepage copy).
 * variant="contact": "Book an Appointment" + "Contact Us" (services copy).
 */
const CallToAction = ({
  eyebrow = "Book a visit",
  title = "Ready to give your pet the best care possible?",
  description = "Schedule an appointment today and join our family of happy, healthy pets. Whether it's routine care or specialized treatment, we're here for you every step of the way.",
  variant = "call",
  background = "bg-white",
}) => {
  return (
    <section className={cn("frame pb-3 sm:pb-4 lg:pb-5", background)}>
      <div className="relative isolate overflow-hidden rounded-[1.75rem] bg-roufi-green-950 text-white lg:rounded-[2.5rem]">
        <span
          aria-hidden="true"
          className="topo absolute -right-24 top-1/2 -z-10 h-[46rem] w-[52rem] -translate-y-1/2 bg-roufi-light-green/[0.14]"
        />
        <span
          aria-hidden="true"
          className="topo absolute -bottom-56 -left-40 -z-10 h-[30rem] w-[34rem] rotate-180 bg-white/[0.05]"
        />
        <span
          aria-hidden="true"
          className="absolute -left-32 top-0 -z-10 size-[28rem] rounded-full bg-roufi-green/30 blur-[120px]"
        />

        <div className="shell grid gap-12 py-20 sm:py-24 lg:grid-cols-12 lg:items-end lg:py-32">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow eyebrow-light">{eyebrow}</p>
            <h2 className="type-h1 mt-6 max-w-3xl">{title}</h2>
            <p className="mt-6 max-w-xl type-lead text-white/75">{description}</p>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-5 lg:justify-self-end">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              {variant === "call" ? (
                <>
                  <Button asChild size="lg" variant="accent" className="sm:flex-1 lg:flex-none">
                    <a href={PRIMARY_PHONE.href}>
                      <PhoneCall />
                      Call Now: {PRIMARY_PHONE.display}
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="light" className="sm:flex-1 lg:flex-none">
                    <Link href="/BookAppointment">
                      Book Online
                      <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild size="lg" variant="light" className="sm:flex-1 lg:flex-none">
                    <Link href="/BookAppointment">
                      Book an Appointment
                      <ArrowRight className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline-light" className="sm:flex-1 lg:flex-none">
                    <Link href="/Contact">
                      <Mail />
                      Contact Us
                    </Link>
                  </Button>
                </>
              )}
            </div>
            {variant !== "call" && (
              <p className="mt-5 text-sm text-white/60 lg:text-right">
                Or call us directly at{" "}
                <a href={PRIMARY_PHONE.href} className="font-medium text-white underline-offset-4 hover:underline">
                  {PRIMARY_PHONE.display}
                </a>
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
