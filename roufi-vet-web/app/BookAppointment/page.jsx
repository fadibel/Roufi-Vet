import { Clock, Phone, Pill, Scissors, Stethoscope, Syringe } from "lucide-react";

import { CLINIC, PRIMARY_PHONE, SECONDARY_PHONE } from "@/lib/site";
import BookingForm from "@/components/BookingForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import HeroWords from "@/components/HeroWords";

export const metadata = {
  title: "Book Appointment",
  description:
    "Schedule a visit for your pet with our experienced veterinarians. We offer a wide range of services to keep your furry friends healthy and happy.",
};

// Sidebar content, unchanged from the original page.
const visitServices = [
  {
    title: "Regular Checkup",
    icon: Stethoscope,
    text: "A comprehensive health examination of your pet to ensure they are healthy.",
  },
  { title: "Vaccination", icon: Syringe, text: "Essential vaccines to protect your pet from common diseases." },
  {
    title: "Dental Care",
    icon: Pill,
    text: "Cleaning, polishing, and extraction services to maintain your pet's oral health.",
  },
  { title: "Surgery", icon: Scissors, text: "From routine spaying/neutering to complex procedures." },
  {
    title: "Grooming",
    icon: Scissors,
    iconClassName: "rotate-90",
    text: "Professional bathing, hair trimming, and nail clipping.",
  },
];

const BookAppointment = () => {
  return (
    <section className="pt-hero relative isolate overflow-hidden bg-roufi-cream pb-20 lg:pb-32">
      <span
        aria-hidden="true"
        className="topo absolute -right-48 -top-8 -z-10 h-[40rem] w-[46rem] bg-roufi-green/[0.07]"
      />
      <div className="shell">
        <Breadcrumbs className="hero-rise" items={[{ label: "Home", href: "/" }, { label: "Book Appointment" }]} />
        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow hero-rise" style={{ "--d": "80ms" }}>
              Book Appointment
            </p>
            <h1 className="type-h1 mt-6 text-stone-900">
              <HeroWords
                baseDelay={140}
                segments={[{ text: "Book Your Pet's" }, { text: "Appointment", className: "text-roufi-green-700" }]}
              />
            </h1>
          </div>
          <p className="hero-rise type-lead text-stone-600 lg:col-span-5" style={{ "--d": "360ms" }}>
            Schedule a visit for your pet with our experienced veterinarians. We offer a wide range of services to keep
            your furry friends healthy and happy.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:mt-16 lg:grid-cols-12">
          <div className="hero-rise lg:col-span-8" style={{ "--d": "460ms" }}>
            <BookingForm />
          </div>

          <aside
            className="hero-rise overflow-hidden rounded-[2rem] bg-white shadow-hairline lg:sticky lg:top-[calc(var(--header-h)_+_1.5rem)] lg:col-span-4"
            style={{ "--d": "560ms" }}
          >
            <div className="p-7 sm:p-8">
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-stone-900">Our Services</h2>
              <p className="mt-1 text-[0.9375rem] text-stone-500">What to expect during your visit</p>
              <ul className="mt-7 space-y-5">
                {visitServices.map(({ title, icon: Icon, iconClassName, text }) => (
                  <li key={title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-roufi-green-50 text-roufi-green">
                      <Icon className={`size-[18px] ${iconClassName ?? ""}`} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-stone-900">{title}</h3>
                      <p className="mt-0.5 text-sm leading-relaxed text-stone-500">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-stone-200 p-7 sm:p-8">
              <h3 className="flex items-center gap-2 font-semibold text-stone-900">
                <Clock className="size-4 text-roufi-red" aria-hidden="true" />
                Clinic Hours
              </h3>
              <dl className="mt-4 space-y-2 text-[0.9375rem]">
                {CLINIC.hours.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4">
                    <dt className="text-stone-500">{row.days}:</dt>
                    <dd className="font-medium tabular-nums text-stone-900">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-roufi-green-950 p-7 text-white sm:p-8">
              <p className="text-[0.9375rem] leading-relaxed text-white/75">
                For emergencies outside our regular hours, please call our emergency line:
              </p>
              <a
                href={PRIMARY_PHONE.href}
                className="mt-3 inline-flex items-center gap-2.5 text-xl font-semibold tracking-tight text-white hover:underline"
              >
                <Phone className="size-5 text-roufi-light-green" aria-hidden="true" />
                {PRIMARY_PHONE.display}
              </a>
            </div>

            <div className="bg-roufi-cream p-6 text-center">
              <p className="text-sm font-semibold text-roufi-brown">Need help?</p>
              <p className="mt-0.5 text-sm text-stone-600">
                Call us at{" "}
                <a href={SECONDARY_PHONE.href} className="font-semibold text-stone-900 hover:underline">
                  {SECONDARY_PHONE.display}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
