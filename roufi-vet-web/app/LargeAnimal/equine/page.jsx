import { HeartPulse } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, CheckList, Lead, PhoneLink } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("large", "equine");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function EquinePage() {
  return (
    <ServiceDetail service={service}>
      <Lead>
        Roufi Veterinary Clinic is proud to provide a wide range of skilled veterinary care for your horse,
        including reproduction services.
      </Lead>
      <p className="font-medium text-stone-900">In addition to routine wellness and preventative care, we offer:</p>
      <CheckList
        items={[
          "Vaccinations including rabies, West Nile virus, tetanus, rhinopneumonitis (herpes), equine influenza, strangles",
          "Pre-purchase exams",
          "Coggins testing and export documentation",
          "Lameness, including diagnosis and management of equine lameness, and joint injections",
          "Ophthalmic exams",
          "In-house radiology",
          "Dentistry/floats",
          "Surgery",
        ]}
      />
      <Callout icon={HeartPulse} label="Equine reproduction" tone="brown">
        Our equine reproductive services include ultrasound diagnostics, routine castration, and a doctor who has a
        special interest, additional training and knowledge in breeding mares with both fresh and frozen semen.
      </Callout>
      <p>
        To learn more about our equine services or to schedule an appointment for your horse, call us at{" "}
        <PhoneLink />
      </p>
    </ServiceDetail>
  );
}
