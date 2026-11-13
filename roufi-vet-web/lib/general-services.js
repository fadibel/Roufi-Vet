import { HeartPulse, Pill, PawPrint, Scissors, ShieldCheck, Stethoscope } from "lucide-react";

// Content of the "Our Services" page, unchanged from the original.
// `short` is the overview card text; `description` and `features` are the
// detailed section.
export const GENERAL_SERVICES = [
  {
    id: "wellness-exams",
    title: "Wellness Exams",
    icon: HeartPulse,
    accent: "red",
    short: "Comprehensive check-ups to ensure your pet's health and happiness.",
    description:
      "Our comprehensive wellness exams are the foundation of preventative care for your pet. During these checkups, our veterinarians perform a thorough physical examination, checking everything from eyes and ears to heart and lungs. We'll discuss nutrition, behavior, and any concerns you might have about your pet's health.",
    features: [
      "Complete physical examination",
      "Preventative health recommendations",
      "Nutrition and weight assessment",
      "Behavior consultation",
      "Age-appropriate health screenings",
    ],
  },
  {
    id: "vaccinations",
    title: "Vaccinations",
    icon: ShieldCheck,
    accent: "green",
    short: "Preventative care to protect your pet from common diseases.",
    description:
      "Protecting your pet from preventable diseases is one of the most important things you can do for their health. Our vaccination protocols are tailored to your pet's age, lifestyle, and risk factors. We use the latest vaccine technology to ensure safety and effectiveness.",
    features: [
      "Core and lifestyle-based vaccines",
      "Personalized vaccination schedules",
      "Low-stress handling techniques",
      "Digital vaccine records",
      "Vaccination certificates for travel or boarding",
    ],
  },
  {
    id: "dental-care",
    title: "Dental Care",
    icon: Stethoscope,
    accent: "red",
    short: "Professional cleaning and treatments for optimal oral health.",
    description:
      "Dental health is crucial to your pet's overall wellbeing. Our dental services include teeth cleaning, polishing, extractions when necessary, and digital dental X-rays. We also provide guidance on at-home dental care to maintain your pet's oral health between professional cleanings.",
    features: [
      "Professional teeth cleaning and polishing",
      "Digital dental X-rays",
      "Extractions and oral surgery",
      "Home care recommendations",
      "Dental-friendly treats and diets",
    ],
  },
  {
    id: "grooming",
    title: "Grooming",
    icon: Scissors,
    accent: "green",
    short: "Expert grooming services to keep your pet looking their best.",
    description:
      "Our professional grooming services help keep your pet clean, comfortable, and healthy. From basic baths to complete makeovers, our skilled groomers provide services tailored to your pet's breed, coat type, and temperament. We use gentle, pet-friendly products and techniques.",
    features: [
      "Breed-specific styling",
      "Medicated baths",
      "Nail trimming",
      "Ear cleaning",
      "Specialized care for senior pets",
    ],
  },
  {
    id: "surgery",
    title: "Surgery",
    icon: PawPrint,
    accent: "red",
    short: "State-of-the-art surgical procedures with exceptional care.",
    description:
      "Our veterinary surgical team is experienced in a wide range of procedures, from routine spay/neuter to more complex soft tissue and orthopedic surgeries. We use state-of-the-art equipment and monitoring to ensure your pet's safety and comfort throughout their procedure.",
    features: [
      "Pre-surgical consultations",
      "Advanced anesthesia monitoring",
      "Pain management protocols",
      "Post-operative care instructions",
      "Follow-up examinations",
    ],
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    icon: Pill,
    accent: "green",
    short: "Full-service pharmacy for all your pet's medication needs.",
    description:
      "Our full-service pharmacy provides convenient access to all the medications your pet might need. Our veterinarians can advise on proper dosing, potential side effects, and drug interactions. We offer both prescription medications and over-the-counter products.",
    features: [
      "Prescription medications",
      "Prescription diets",
      "Flea, tick, and heartworm preventatives",
      "Supplements and vitamins",
      "Compounded medications",
    ],
  },
];

export const FAQS = [
  {
    question: "How often should I bring my pet in for a wellness exam?",
    answer:
      "We recommend annual wellness exams for adult pets and twice-yearly exams for senior pets (generally over 7 years for dogs and over 10 years for cats). Puppies and kittens need more frequent visits during their first year.",
  },
  {
    question: "What vaccinations does my pet need?",
    answer:
      "Vaccination needs vary based on your pet's age, lifestyle, and risk factors. Core vaccines for dogs usually include rabies, distemper, parvovirus, and adenovirus. For cats, core vaccines typically include rabies, feline viral rhinotracheitis, calicivirus, and panleukopenia.",
  },
  {
    question: "How do I prepare my pet for surgery?",
    answer:
      "For most procedures, you'll need to withhold food for 8-12 hours before surgery, though water is usually allowed until a few hours before. We'll provide detailed pre-operative instructions during your consultation, including any medication adjustments needed.",
  },
  {
    question: "Do you offer emergency services?",
    answer:
      "We provide urgent care during our regular business hours. For emergencies outside our operating hours, we work closely with local 24-hour emergency veterinary hospitals and can direct you to the nearest facility.",
  },
];
