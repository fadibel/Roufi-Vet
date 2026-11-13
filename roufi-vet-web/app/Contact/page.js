import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { CLINIC } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import HeroWords from "@/components/HeroWords";
import { Reveal } from "@/components/motion/Reveal";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions or need to schedule an appointment? Contact Roufi Vet Clinic in Hamma Bouziane, Constantine.",
};

const contactMethods = [
  ...CLINIC.phones.map((phone) => ({
    label: "Call",
    value: phone.display,
    href: phone.href,
    icon: Phone,
  })),
  { label: "Email", value: CLINIC.email, href: `mailto:${CLINIC.email}`, icon: Mail },
];

const Contact = () => {
  return (
    <>
      <section className="pt-hero relative isolate overflow-hidden bg-roufi-cream pb-14 lg:pb-20">
        <span
          aria-hidden="true"
          className="topo absolute -right-48 -top-6 -z-10 h-[40rem] w-[46rem] bg-roufi-red/[0.05]"
        />
        <div className="shell">
          <Breadcrumbs className="hero-rise" items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow hero-rise" style={{ "--d": "80ms" }}>
                Get in touch
              </p>
              <h1 className="type-display mt-6 text-stone-900">
                <HeroWords segments={[{ text: "Contact" }, { text: "Us", className: "text-roufi-green-700" }]} baseDelay={140} />
              </h1>
            </div>
            <p className="hero-rise type-lead text-stone-600 lg:col-span-5" style={{ "--d": "360ms" }}>
              Have questions or need to schedule an appointment? Reach out using the form below.
            </p>
          </div>

          <ul className="hero-rise mt-14 grid gap-3 sm:grid-cols-3" style={{ "--d": "480ms" }}>
            {contactMethods.map(({ label, value, href, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="group flex h-full items-center gap-4 rounded-[1.5rem] bg-white p-5 shadow-hairline transition-[box-shadow,transform] duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-roufi-red-50 text-roufi-red transition-colors duration-300 group-hover:bg-roufi-red group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-stone-400">{label}</span>
                    <span className="mt-1 block truncate text-[1.0625rem] font-semibold tracking-tight text-stone-900">
                      {value}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-stone-300 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-roufi-green"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-roufi-cream pb-20 lg:pb-32">
        <div className="shell grid gap-6 lg:grid-cols-12 lg:gap-6">
          <Reveal className="rounded-[2rem] bg-white p-6 shadow-hairline sm:p-10 lg:col-span-7 lg:p-12">
            <h2 className="type-h3 text-stone-900">Send Us a Message</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-[2rem] bg-roufi-green-950 p-8 text-white sm:p-10">
              <h2 className="type-h3">Our Information</h2>
              <address className="mt-8 space-y-6 not-italic">
                <p className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-roufi-light-green" aria-hidden="true" />
                  <span className="text-white/85">
                    {CLINIC.address.line1}
                    <br />
                    {CLINIC.address.line2}
                  </span>
                </p>
                <div className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-roufi-light-green" aria-hidden="true" />
                  <div className="space-y-1">
                    {CLINIC.phones.map((phone) => (
                      <a key={phone.href} href={phone.href} className="block font-semibold text-white hover:underline">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="flex gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-roufi-light-green" aria-hidden="true" />
                  <a href={`mailto:${CLINIC.email}`} className="break-all text-white/85 hover:text-white hover:underline">
                    {CLINIC.email}
                  </a>
                </p>
              </address>
            </div>

            <div className="relative min-h-[22rem] flex-1 overflow-hidden rounded-[2rem] bg-stone-200 shadow-hairline">
              <iframe
                title="Map showing the location of Roufi Vet Clinic"
                src={CLINIC.mapEmbed}
                className="absolute inset-0 size-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
