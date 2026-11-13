import { MapPin } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, Lead, PhoneLink } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("large", "farmhouse-call");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function FarmhouseCallPage() {
  return (
    <ServiceDetail service={service}>
      {/* Copy unchanged from the original page, including the clinic name it uses. */}
      <Lead>
        Getting large animals and livestock to the vet can be difficult, time-consuming, and in some cases
        impossible. That’s why Buffalo Veterinary Clinic offers farmhouse calls so your farm animals can get the care
        they need as soon as possible.
      </Lead>
      <Callout icon={MapPin} label="We come to you" tone="brown">
        We can come to you to provide veterinary services for farm animals, cattle, and horses.
      </Callout>
      <p className="font-medium text-stone-900">
        Have questions or want to make an appointment? Give us a call at <PhoneLink />
      </p>
    </ServiceDetail>
  );
}
