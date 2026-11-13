import Link from "next/link";
import { Bone } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, Lead, Steps } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "tta");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function TtaPage() {
  return (
    <ServiceDetail service={service}>
      <Lead>
        TTA surgery requires specialized equipment and training and is less invasive than other kinds of ACL surgery.
        During TTA surgery, the tibia is cut, repositioned, and stabilized in a new position that effectively changes
        the biodynamics of the joint, so a cruciate ligament is no longer needed.
      </Lead>
      <Steps
        steps={[
          {
            label: "How it works",
            content:
              "The theory behind this procedure is that when the cruciate ligament has been torn, the tibial plateau (the top of the tibia) and the patellar ligament should be repositioned at 90 degrees to one another to combat the shearing force generated as the dog walks. To make this happen, the tibial tuberosity (front of the tibia where the patellar ligament attaches) is separated and anchored in its new position by a steel bone plate.",
          },
          {
            label: "Recovery",
            content:
              "After TTA surgery, dogs typically need several weeks of limited activity to allow the bone to heal correctly. Physical therapy may be recommended to help restore strength and movement in the joint. Most dogs show significant improvement within a few months, often returning to their normal level of activity.",
          },
        ]}
      />
      <Callout icon={Bone} label="ACL repair options">
        Read about <Link href="/SmallAnimal/tplo">Tibial Plateau Leveling Osteotomy (TPLO)</Link> or see all of our{" "}
        <Link href="/SmallAnimal/orthopedics">orthopedic surgical services</Link>.
      </Callout>
    </ServiceDetail>
  );
}
