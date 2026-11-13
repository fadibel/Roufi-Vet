import ServiceDetail from "@/components/ServiceDetail";
import { CheckList, Lead } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "dentistry");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function DentistryPage() {
  return (
    <ServiceDetail service={service}>
      <Lead>
        Regular dental care is essential for keeping your pet healthy and happy. Dental disease is a common issue in
        small animals, and it can lead to serious health problems if left untreated. Periodic dental exams help
        maintain proper oral hygiene and prevent future complications.
      </Lead>

      {/* The list below is the "Dental Care" list from the Our Services page. */}
      <h2>Our dental services include</h2>
      <CheckList
        items={[
          "Professional teeth cleaning and polishing",
          "Digital dental X-rays",
          "Extractions and oral surgery",
          "Home care recommendations",
          "Dental-friendly treats and diets",
        ]}
      />
    </ServiceDetail>
  );
}
