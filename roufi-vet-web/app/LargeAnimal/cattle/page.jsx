import ServiceDetail from "@/components/ServiceDetail";
import { Lead, PhoneLink, TagList } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("large", "cattle");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function CattlePage() {
  return (
    <ServiceDetail service={service}>
      <Lead>At Roufi Veterinary Clinic, we offer a wide range of services for cattle including:</Lead>
      <TagList
        items={[
          "Wellness/preventative care",
          "Semen testing",
          "X-rays/ultrasounds",
          "Vaccinations",
          "Breeding soundness",
          "Health certificates",
          "Calf scours",
          "Trich testing",
          "Dehorning",
          "C-sections",
        ]}
      />
      <p className="!mt-10 font-medium text-stone-900">
        Have questions or want to make an appointment? Give us a call at <PhoneLink />
      </p>
    </ServiceDetail>
  );
}
