import { Activity } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, Lead } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "painmanagement");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function PainManagementPage() {
  return (
    <ServiceDetail service={service}>
      {/* Copy unchanged from the original page, including the clinic name it uses. */}
      <Lead>
        Just like people, pets can suffer lingering effects and discomfort from an injury or a surgical procedure.
        Buffalo Veterinary Clinic takes treating pain seriously and offers several options to help pets feel better,
        including medication and laser therapy. We’ll develop a pain management program that’s customized for your
        pet’s condition and needs.
      </Lead>
      <Callout icon={Activity} label="Rehabilitation">
        Physical therapy can be especially effective as it is proven to speed recovery and improve strength and
        mobility. By using rehabilitation therapy and offering instruction on at-home techniques and other pain
        management options, your pet will benefit from our expert care.
      </Callout>
    </ServiceDetail>
  );
}
