import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/Card";
import { 
  HeartPulse, 
  Stethoscope, 
  Scissors, 
  PawPrint, 
  Pill, 
  ShieldCheck 
} from "lucide-react";

const serviceItems = [
  {
    title: "Wellness Exams",
    description: "Comprehensive check-ups to ensure your pet's health and happiness.",
    icon: <HeartPulse className="h-12 w-12 text-[#ff0302]" />,
  },
  {
    title: "Vaccinations",
    description: "Preventative care to protect your pet from common diseases.",
    icon: <ShieldCheck className="h-12 w-12 text-[#1a8b00]" />,
  },
  {
    title: "Dental Care",
    description: "Professional cleaning and treatments for optimal oral health.",
    icon: <Stethoscope className="h-12 w-12 text-[#ff0302]" />,
  },
  {
    title: "Grooming",
    description: "Expert grooming services to keep your pet looking their best.",
    icon: <Scissors className="h-12 w-12 text-[#1a8b00]" />,
  },
  {
    title: "Surgery",
    description: "State-of-the-art surgical procedures with exceptional care.",
    icon: <PawPrint className="h-12 w-12 text-[#ff0302]" />,
  },
  {
    title: "Pharmacy",
    description: "Full-service pharmacy for all your pet's medication needs.",
    icon: <Pill className="h-12 w-12 text-[#1a8b00]" />,
  },
];

const Services = () => {
  return (
    <section className="relative bg-[#fffcf7] py-20 text-center mx-3">
      <div className="relative z-10 max-w-[80rem] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a8b00]">
          OUR SERVICES
        </h2>
        <p className="text-[#0D2C40] text-lg mt-5 leading-relaxed">
          We offer comprehensive services for large and small animals, with a focus on
          preventative care such as annual wellness exams, vaccinations, nutritional
          counseling, and parasite prevention. Our skilled and caring medical team is
          also here when the animal you care about needs experienced diagnostics,
          orthopedic services, and more.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
          {serviceItems.map((service, index) => (
            <Card
              key={index}
              className="border border-gray-100 hover:shadow-md transition-shadow group overflow-hidden"
            >
              <div className="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r   group-hover:w-full transition-all duration-300"></div>
              <CardHeader className="flex flex-row items-start gap-4 pb-2">
                <div className="mt-1 bg-gray-100 p-3 rounded-lg">{service.icon}</div>
                <div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
