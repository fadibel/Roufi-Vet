import Link from "next/link";
import { Bone } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, Lead, Steps } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "tplo");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function TploPage() {
  return (
    <ServiceDetail service={service}>
      <Lead>
        TPLO (Tibial Plateau Leveling Osteotomy) surgery is a common procedure used to treat a torn cranial cruciate
        ligament (CCL) in a dog’s knee. It has a high success rate and generally helps dogs return to better functional
        levels and develop less joint arthritis later in life. TPLO surgery also requires specialized equipment and
        training to perform.
      </Lead>
      <Steps
        steps={[
          {
            label: "How it works",
            content:
              "TPLO surgery focuses on changing the angle of the tibia to prevent the knee from sliding out of place. The surgeon makes an intricate cut in the top of the tibia, rotates it to a new position, and secures it with a metal plate and screws. This adjustment stabilizes the knee joint, allowing the dog to walk more comfortably and regain strength over time.",
          },
          {
            label: "Recovery",
            content:
              "Recovery after TPLO surgery typically includes several weeks of restricted activity, followed by a gradual return to normal exercise. Most dogs show significant improvement and can return to an active lifestyle within a few months.",
          },
        ]}
      />
      <Callout icon={Bone} label="ACL repair options">
        Read about <Link href="/SmallAnimal/tta">Tibial Tuberosity Advancement (TTA)</Link> or see all of our{" "}
        <Link href="/SmallAnimal/orthopedics">orthopedic surgical services</Link>.
      </Callout>
    </ServiceDetail>
  );
}
