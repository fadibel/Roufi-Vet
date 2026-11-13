// Clinic information, kept in one place so every page shows the same values.
// All values are copied verbatim from the original pages.

export const CLINIC = {
  name: "Roufi Vet Clinic",
  shortName: "Roufi Vet",
  tagline: "Providing exceptional veterinary care with compassion and expertise.",
  heroHeadline: "Where hometown values meet veterinary expertise",
  address: {
    line1: "CH3J+GJ9, Hamma Bouziane",
    line2: "Constantine",
  },
  phones: [
    { display: "+213 551.21.76.99", href: "tel:+213551217699" },
    { display: "+213 771.12.40.91", href: "tel:+213771124091" },
  ],
  email: "roufivet92@gmail.com",
  founded: 1992,
  veterinarian: {
    name: "Dr. Belkacemi Abdelkrim",
    role: "Veterinarian",
    bio: "Dr. Belkacemi has over 33 years of experience in veterinary medicine, specializing in small and large animal care and surgery.",
  },
  hours: [
    { days: "Saturday - Thursday", time: "8:00 AM - 7:00 PM" },
    { days: "Friday", time: "9:00 AM - 12:00 AM" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9413703293035!2d6.579031276537687!3d36.4037937723628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f1777d902c0b2d%3A0x8e486636d2eeef13!2sRoufi%20vet!5e1!3m2!1sen!2sdz!4v1743279623991!5m2!1sen!2sdz",
  // Placeholder links, unchanged from the original footer.
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export const PRIMARY_PHONE = CLINIC.phones[0];
export const SECONDARY_PHONE = CLINIC.phones[1];

export const NAVIGATION = [
  { title: "Home", url: "/" },
  { title: "About", url: "/About" },
  { title: "Our Services", url: "/ServicesPage" },
  { title: "Contact", url: "/Contact" },
];
