import ServiceDetail from "@/components/ServiceDetail";
import { Lead, PullQuote } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "surgery");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function SurgeryPage() {
  return (
    <ServiceDetail service={service}>
      {/* Copy unchanged from the original page, including the clinic name it uses. */}
      <Lead>
        Surgery is often the most effective way to treat many serious injuries and disorders, and Buffalo Veterinary
        Clinic is proud to perform surgeries in state-of-the-art facilities with cutting-edge equipment. We offer a
        full range of surgical services ranging from standard spaying and neutering to advanced, highly specialized
        procedures.
      </Lead>
      <p>
        Our veterinary team will walk you through the entire process, giving you the tools to make informed decisions
        regarding your pet’s treatment options.
      </p>
      <PullQuote>
        We understand surgery is a stressful time for any pet owner, and we’re available every step of the way to
        answer questions and put your mind at ease.
      </PullQuote>
    </ServiceDetail>
  );
}
