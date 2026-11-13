import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ServiceDetail from "@/components/ServiceDetail";
import ServiceImage from "@/components/ServiceImage";
import { TileGrid } from "@/components/ServiceContent";
import { getService } from "@/lib/services";

const service = getService("small", "orthopedics");
const procedures = [getService("small", "tplo"), getService("small", "tta")];

export const metadata = {
  title: service.title,
  description: service.summary,
};

export default function OrthopedicsPage() {
  return (
    <ServiceDetail service={service}>
      <h2 className="!mt-0">Orthopedic Surgical Services We Provide Include:</h2>
      <TileGrid
        items={[
          {
            title: "ACL (aka CCL) Repair",
            content: "We offer several surgical options to treat cranial cruciate ligament (CCL) injuries in dogs.",
          },
          {
            title: "Femoral Head Ostectomy (FHO)",
            content:
              "This surgery involves removing the head and neck of the femur to alleviate pain from hip dysplasia or severe fractures.",
          },
          {
            title: "Luxating Patella Repair",
            content: "This procedure corrects the dislocation of the kneecap, a common issue in many dog breeds.",
          },
          {
            title: "Fracture Repair",
            content:
              "We provide comprehensive fracture repair services to ensure proper healing and restore function to broken bones.",
          },
        ]}
      />

      <h2>About ACL Repair</h2>
      <p>
        It’s not uncommon for dogs—especially older and overweight dogs—to rupture their cranial cruciate ligaments
        (CCL). These injuries are akin to ACL injuries in humans, and ‘ACL’ and ‘CCL’ are often used interchangeably in
        reference to dogs. But no matter what you call it, when a dog ruptures this ligament their knee joint becomes
        unstable, and they limp on the affected limb. Because CCL tears cause significant mobility issues for pets,
        treating these injuries as quickly as possible is essential.
      </p>
      {/* Copy unchanged from the original page, including the clinic name it uses. */}
      <p>
        At Buffalo Veterinary Clinic, we’re proud to provide two surgical options for ACL repair: tibial plateau
        leveling osteotomy (TPLO) and tibial tuberosity advancement (TTA). There are many factors to consider when
        determining which procedure is best for your dog, and your Buffalo veterinarian will help guide you every step
        of the way so that you can make an informed decision.
      </p>

      <h3>Learn more about each of these procedures</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {procedures.map((procedure) => (
          <Link
            key={procedure.href}
            href={procedure.href}
            className="group flex items-center gap-4 rounded-[1.4rem] border border-stone-200 bg-white p-2.5 pr-4 transition-[border-color,box-shadow] duration-300 hover:border-roufi-green hover:shadow-soft"
          >
            <ServiceImage
              src={procedure.image}
              alt=""
              sizes="120px"
              className="aspect-[4/3] w-24 shrink-0 rounded-[1rem]"
            />
            <span className="min-w-0 flex-1 text-[0.9375rem] font-semibold leading-snug text-stone-900">
              {procedure.title}
            </span>
            <ArrowUpRight
              className="size-4 shrink-0 text-stone-400 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-roufi-green"
              aria-hidden="true"
            />
          </Link>
        ))}
      </div>
    </ServiceDetail>
  );
}
