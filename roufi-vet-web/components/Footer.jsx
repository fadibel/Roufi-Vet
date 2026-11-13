import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { CLINIC } from "@/lib/site";

const SOCIAL_ICONS = { Facebook, Instagram, Twitter };

// Destinations are unchanged from the original footer.
const serviceLinks = [
  { label: "Wellness Exams", href: "/ServicesPage" },
  { label: "Vaccinations", href: "/ServicesPage" },
  { label: "Dental Care", href: "/ServicesPage" },
  { label: "Surgery", href: "/ServicesPage" },
  { label: "Emergency Care", href: "/ServicesPage" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Large Animal", href: "/LargeAnimal" },
  { label: "Small Animal", href: "/SmallAnimal" },
  { label: "Contact", href: "/Contact" },
];

function FooterHeading({ children }) {
  return (
    <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-roufi-green-700">
      {children}
    </h2>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="link-underline text-[0.9375rem] text-stone-600 transition-colors hover:text-stone-950"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-roufi-cream">
      <span
        aria-hidden="true"
        className="topo absolute -right-40 -top-24 -z-10 hidden h-[34rem] w-[38rem] bg-roufi-green/[0.07] md:block"
      />

      <div className="shell pb-10 pt-16 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="Roufi Vet, home" className="inline-block rounded-lg">
              <Image
                src="/assets/logo.png"
                alt="Roufi Vet Logo"
                width={12332}
                height={4266}
                sizes="220px"
                className="h-[4.5rem] w-auto"
              />
            </Link>
            <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-stone-600">{CLINIC.tagline}</p>
            <ul className="mt-7 flex gap-2.5" aria-label="Social media">
              {CLINIC.social.map(({ label, href }) => {
                const Icon = SOCIAL_ICONS[label];
                return (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="grid size-11 place-items-center rounded-full border border-stone-300/80 text-stone-700 transition-[background-color,border-color,color] duration-300 hover:border-roufi-green hover:bg-roufi-green hover:text-white"
                    >
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <FooterLinks title="Services" links={serviceLinks} />
            <FooterLinks title="Quick Links" links={quickLinks} />
          </div>

          <div className="lg:col-span-4">
            <FooterHeading>Contact</FooterHeading>
            <address className="mt-5 space-y-5 not-italic">
              <p className="flex gap-3 text-[0.9375rem] leading-relaxed text-stone-600">
                <MapPin className="mt-1 size-4 shrink-0 text-roufi-red" aria-hidden="true" />
                <span>
                  {CLINIC.address.line1}
                  <br />
                  {CLINIC.address.line2}
                </span>
              </p>
              <div className="flex gap-3">
                <Phone className="mt-1.5 size-4 shrink-0 text-roufi-red" aria-hidden="true" />
                <div className="space-y-1">
                  {CLINIC.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="block text-lg font-semibold tracking-tight text-stone-900 transition-colors hover:text-roufi-red-700"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
              <a
                href={`mailto:${CLINIC.email}`}
                className="group flex items-center gap-3 text-[0.9375rem] text-stone-600 transition-colors hover:text-stone-950"
              >
                <Mail className="size-4 shrink-0 text-roufi-red" aria-hidden="true" />
                <span className="link-underline">{CLINIC.email}</span>
              </a>
            </address>
            <Link
              href="/BookAppointment"
              className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-semibold text-roufi-green-700"
            >
              <span className="link-underline">Book Appointment</span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-stone-300/60 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Roufi Vet Clinic. All rights reserved.</p>
          <p>
            {CLINIC.address.line1.split(", ")[1]}, {CLINIC.address.line2}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
