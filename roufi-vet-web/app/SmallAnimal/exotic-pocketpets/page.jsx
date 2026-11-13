import { Info } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import { Callout, Lead } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "exotic-pocketpets");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function ExoticPocketPetsPage() {
  return (
    <ServiceDetail service={service}>
      {/* Copy unchanged from the original page, including the clinic name it uses. */}
      <Lead>
        Pocket pets and exotics deserve the best of care, just like other pet companions. At Buffalo Veterinary
        Clinic, we’re happy to see rabbits, hamsters and other pocket pets, too. These little buddies are fun
        companions, but they require regular care and attention to be healthy. They can also carry disease, so you must
        be aware of proper handling and hygiene.
      </Lead>
      <p>
        We know that coming to the vet can be a stressful experience for our patients, particularly exotics and pocket
        pets. We’re very sensitive to this, and we will do whatever we can to reduce stress during your visit.
      </p>
      <Callout icon={Info} label="Before your visit">
        If possible, plan to bring your pet to us in its regular enclosure. Don’t clean it before coming in—that way
        your pet will be surrounded by familiar smells. The enclosure will also retain samples for diagnostic testing,
        if needed to better evaluate your pet.
      </Callout>
    </ServiceDetail>
  );
}
