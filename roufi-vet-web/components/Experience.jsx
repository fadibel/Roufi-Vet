import { CLINIC } from "@/lib/site";
import { ALL_SERVICES } from "@/lib/services";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

// Every figure comes from the site's own content: the founding year and the
// veterinarian's experience (About page), and the number of service pages.
const stats = [
  { value: <>{CLINIC.founded}</>, label: "Founded", detail: "Locally owned and operated" },
  { value: <CountUp to={33} suffix="+" />, label: "Years of experience", detail: CLINIC.veterinarian.name },
  { value: <CountUp to={ALL_SERVICES.length} />, label: "Services", detail: "For small and large animals" },
  { value: <>On-site</>, label: "Farmhouse calls", detail: "For horses, cattle and livestock" },
];

const Experience = () => {
  return (
    <section className="section-y relative bg-roufi-cream">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Welcome to Roufi Vet Veterinary Clinic</p>
            <h2 className="type-h2 mt-6 text-stone-900">
              Our treatment expertise ranges from animals as small as{" "}
              <span className="text-roufi-green-700">hamsters</span> to as large as{" "}
              <span className="text-roufi-red-700">draft horses</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="space-y-5 text-[1.0625rem] leading-relaxed text-stone-600 lg:col-span-5 lg:pt-14">
            <p>
              Whatever their size, we’re dedicated to providing the best veterinary care to animals in Roufi Vet and
              surrounding areas. We take pride in delivering personalized, compassionate care to our patients in a
              comfortable veterinary facility that is locally owned and operated or with our dedicated farmhouse
              service.
            </p>
            <p className="font-medium text-stone-900">
              Whether it’s routine vaccinations or a complex medical problem, we’re here for you and the animals you
              care about.
            </p>
          </Reveal>
        </div>

        <Stagger
          as="dl"
          className="mt-16 grid grid-cols-2 border-t border-stone-300/70 lg:mt-24 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <StaggerItem
              key={stat.label}
              className={[
                "flex flex-col-reverse justify-end gap-3 py-8 pr-4 sm:py-10",
                index % 2 === 1 ? "border-l border-stone-300/70 pl-5 sm:pl-8" : "",
                index >= 2 ? "border-t border-stone-300/70 lg:border-t-0" : "",
                index === 2 ? "lg:border-l lg:pl-8" : "",
              ].join(" ")}
            >
              <dt>
                <span className="block text-sm font-semibold text-stone-900">{stat.label}</span>
                <span className="mt-1 block text-[0.8125rem] leading-snug text-stone-500">{stat.detail}</span>
              </dt>
              <dd className="flex items-start gap-1.5 whitespace-nowrap text-[clamp(1.875rem,1.3rem+2.6vw,3.75rem)] font-semibold leading-none tracking-[-0.04em] text-stone-900">
                {stat.value}
                <span className="mt-1 size-2 shrink-0 rounded-full bg-roufi-red" aria-hidden="true" />
              </dd>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

export default Experience;
