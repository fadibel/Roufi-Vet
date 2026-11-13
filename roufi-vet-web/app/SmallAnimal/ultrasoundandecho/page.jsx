import { Activity } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, Lead } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "ultrasoundandecho");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function UltrasoundPage() {
  return (
    <ServiceDetail service={service}>
      {/* Copy unchanged from the original page, including the names it uses. */}
      <Lead>
        RoufiVet Veterinary Clinic is proud to provide our patients and yours the most advanced diagnostic care
        possible by offering ultrasound and echocardiogram services. Dr. Gotfredson and Nicole Gotfredson, CVT are both
        clinical sonographers with additional training in performing and reading abdominal ultrasounds and
        echocardiograms.
      </Lead>
      <Callout icon={Activity} label="How ultrasound works">
        Using high-frequency sound waves, ultrasound is used to create real-time images of your pet’s internal organs
        and systems. Ultrasounds are generally non-invasive, using a hand-held scanner or probe to image your pet’s body
        and ultrasound gel to improve contact and get a more detailed picture. Light sedation may be needed to help the
        pet relax, as ultrasounds do require the patient to remain still.
      </Callout>
    </ServiceDetail>
  );
}
