import Link from "next/link";

import ServiceDetail from "@/components/ServiceDetail";
import { Lead, NumberedList, PhoneLink } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "willnesscare");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function WellnessCarePage() {
  return (
    <ServiceDetail service={service}>
      <Lead>
        Preventative care is your pet&apos;s first line of defense. Annual exams help by preventing, diagnosing, and
        treating disease in its early stages, often before any noticeable symptoms begin. The earlier treatment
        starts, the more effective it is, keeping your pet from unnecessary pain and suffering.
      </Lead>

      <h2>Puppy and Kitten Care</h2>
      <p>
        Do you have a new puppy or kitten? Congratulations! We can help your furry baby start off on the right paw
        with these important services:
      </p>
      <NumberedList
        items={[
          {
            key: "vaccinations",
            content: (
              <p>
                <strong>Vaccinations</strong> with boosters are especially important for young puppies and kittens as
                they do not have full immunity from many serious infectious diseases. For example, the parvo virus in
                dogs and panleukopenia in cats are both deadly gastrointestinal diseases. It&apos;s critical to ensure
                your puppy or kitten has completed the entire series of combo vaccinations to keep him or her
                protected.
              </p>
            ),
          },
          {
            key: "wellness",
            content: (
              <p>
                <strong>A wellness visit</strong> is important because this exam helps us detect possible health
                problems early. Common, treatable problems can be found before they are noticed by their owners.
              </p>
            ),
          },
          {
            key: "spay",
            content: (
              <p>
                <strong>Spaying or neutering</strong> your pet has health benefits, in addition to helping with pet
                overpopulation. Spaying your puppy or kitten before her first heat offers the best protection from
                uterine infections and breast tumors. Neutering your male pet helps prevent testicular cancer and
                certain prostate problems.
              </p>
            ),
          },
          {
            key: "microchip",
            content: (
              <p>
                <strong>A microchip</strong> provides secure, reliable, and permanent identification, which greatly
                increases the likelihood that your pet, if lost, will be returned to you.
              </p>
            ),
          },
          {
            key: "parasites",
            content: (
              <p>
                <strong>Fleas, ticks, and heartworm-carrying mosquitoes</strong> are out in full force all year long.
                We can help you choose the best parasite preventions for your new pet.
              </p>
            ),
          },
        ]}
      />
      <p>
        We are also happy to answer any nutritional and behavioral questions you may have about your new friend. Give
        us a call at <PhoneLink /> to schedule an appointment or <Link href="/BookAppointment">book one online</Link>.
      </p>
    </ServiceDetail>
  );
}
