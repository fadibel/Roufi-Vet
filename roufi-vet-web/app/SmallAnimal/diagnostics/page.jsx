import ServiceDetail from "@/components/ServiceDetail";
import { Lead, PullQuote } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "diagnostics");

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function DiagnosticsPage() {
  return (
    <ServiceDetail service={service}>
      <Lead>
        Accurate detection is key when it comes to treating your pet, and we offer complete diagnostics including
        digital radiology (x-rays) and ultrasound imaging. Ultrasound is an advanced, pain free, non-invasive
        diagnostic tool that uses high frequency sound waves to create a real time image of a pet’s internal
        structure.
      </Lead>
      <p>
        Quality x-rays aid our doctors in quickly diagnosing many disorders. From bones to organs and tumors to
        neurological diseases, advanced digital imaging services can provide potentially life-saving early detection
        of internal issues.
      </p>
      {/* Copy unchanged from the original page, including the clinic name it uses. */}
      <p>
        Plus, Buffalo Veterinary Clinic has an in-house laboratory that allows us to perform many diagnostic lab tests
        while you wait. We can perform blood screens, pre-anesthetic bloodwork, urinalysis, and other types of testing
        on site.
      </p>
      <p>
        While we offer an extensive range of on-site testing, your pet may need laboratory work beyond our scope. For
        those cases, we are happy to send blood work or other testing to an outside lab that will send results back to
        us.
      </p>
      <PullQuote>
        Our advanced diagnostic services save you time and money while providing priceless peace of mind.
      </PullQuote>
    </ServiceDetail>
  );
}
