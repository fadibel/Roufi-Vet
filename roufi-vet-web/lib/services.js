// Single source for the small- and large-animal service listings.
// Titles, routes and images are unchanged from the original pages.
// Each `summary` is a sentence taken from that service's own page.

export const CATEGORIES = {
  small: {
    key: "small",
    title: "Small Animal Services",
    shortTitle: "Small Animals",
    href: "/SmallAnimal",
  },
  large: {
    key: "large",
    title: "Large Animal Services",
    shortTitle: "Large Animals",
    href: "/LargeAnimal",
  },
};

export const SMALL_ANIMAL_SERVICES = [
  {
    slug: "exotic-pocketpets",
    title: "Exotic & Pocket Pets",
    image: "/assets/Pocket-Pets-Exotics.png",
    alt: "Two white rabbits resting side by side",
    summary:
      "Pocket pets and exotics deserve the best of care, just like other pet companions.",
  },
  {
    slug: "diagnostics",
    title: "Diagnostics",
    image: "/assets/Diagnostics.png",
    alt: "A dog and a cat standing together in a stone hallway",
    summary:
      "Accurate detection is key when it comes to treating your pet, and we offer complete diagnostics including digital radiology (x-rays) and ultrasound imaging.",
  },
  {
    slug: "dentistry",
    title: "Dentistry",
    image: "/assets/Service-Block-1.png",
    alt: "A spaniel chewing a dental treat",
    summary:
      "Regular dental care is essential for keeping your pet healthy and happy.",
  },
  {
    slug: "surgery",
    title: "Surgery",
    image: "/assets/Surgery.png",
    alt: "A cat wearing a clear recovery cone",
    summary:
      "Our veterinary team will walk you through the entire process, giving you the tools to make informed decisions regarding your pet’s treatment options.",
  },
  {
    slug: "willnesscare",
    title: "Wellness Care",
    image: "/assets/Wellness-Care.png",
    alt: "A cat peering over a wooden fence in the grass",
    summary: "Preventative care is your pet's first line of defense.",
  },
  {
    slug: "orthopedics",
    title: "Orthopedics",
    image: "/assets/Orthopedics.png",
    alt: "A veterinarian holding a cat beside a golden retriever",
    summary:
      "Orthopedic surgical services including ACL (aka CCL) repair, femoral head ostectomy (FHO), luxating patella repair and fracture repair.",
  },
  {
    slug: "painmanagement",
    title: "Pain Management",
    image: "/assets/Pain-Management-Laser-Therapy.png",
    alt: "A dog wearing protective goggles during laser therapy",
    summary:
      "Just like people, pets can suffer lingering effects and discomfort from an injury or a surgical procedure.",
  },
  {
    slug: "ultrasoundandecho",
    title: "Ultrasound and Echocardiograms",
    image: "/assets/Ultrasound.png",
    alt: "A veterinarian performing an ultrasound on a cat",
    summary:
      "Using high-frequency sound waves, ultrasound is used to create real-time images of your pet’s internal organs and systems.",
  },
  {
    slug: "tta",
    title: "Tibial Tuberosity Advancement (TTA)",
    shortTitle: "TTA",
    image: "/assets/TTA.png",
    alt: "A curly-coated dog with a bandaged front leg",
    summary:
      "TTA surgery requires specialized equipment and training and is less invasive than other kinds of ACL surgery.",
  },
  {
    slug: "tplo",
    title: "Tibial Plateau Leveling Osteotomy (TPLO)",
    shortTitle: "TPLO",
    image: "/assets/TPLO.png",
    alt: "A young dog resting with a bandaged leg",
    summary:
      "TPLO (Tibial Plateau Leveling Osteotomy) surgery is a common procedure used to treat a torn cranial cruciate ligament (CCL) in a dog’s knee.",
  },
].map((service) => ({
  ...service,
  category: "small",
  href: `/SmallAnimal/${service.slug}`,
}));

export const LARGE_ANIMAL_SERVICES = [
  {
    slug: "equine",
    title: "Equine",
    image: "/assets/Equine.png",
    alt: "A rider standing with a saddled chestnut horse",
    summary:
      "Roufi Veterinary Clinic is proud to provide a wide range of skilled veterinary care for your horse, including reproduction services.",
  },
  {
    slug: "cattle",
    title: "Cattle",
    image: "/assets/Cattle.png",
    alt: "Tagged cattle standing close together",
    summary:
      "At Roufi Veterinary Clinic, we offer a wide range of services for cattle.",
  },
  {
    slug: "farmhouse-call",
    title: "Farmhouse Calls",
    image: "/assets/Farmhosue-Calls.png",
    alt: "A handler with a horse inside a stable",
    summary:
      "Getting large animals and livestock to the vet can be difficult, time-consuming, and in some cases impossible.",
  },
].map((service) => ({
  ...service,
  category: "large",
  href: `/LargeAnimal/${service.slug}`,
}));

export const ALL_SERVICES = [...SMALL_ANIMAL_SERVICES, ...LARGE_ANIMAL_SERVICES];

export function getService(category, slug) {
  const list = category === "large" ? LARGE_ANIMAL_SERVICES : SMALL_ANIMAL_SERVICES;
  const service = list.find((item) => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${category}/${slug}`);
  return service;
}

export function getRelatedServices(service) {
  const list = service.category === "large" ? LARGE_ANIMAL_SERVICES : SMALL_ANIMAL_SERVICES;
  return list.filter((item) => item.slug !== service.slug);
}
