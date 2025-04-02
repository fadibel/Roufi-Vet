
import React from "react";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import ServicesSection from "@/components/Services";
import { Button } from "../../components/ui/Button";
import Link from "next/link";
import { HeartPulse, Stethoscope, Scissors, PawPrint, Pill, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Service2 from "@/components/Service2";

const ServicesPage = () => {
  // Additional detailed service information
  const detailedServices = [
    {
      title: "Wellness Exams",
      description:
        "Our comprehensive wellness exams are the foundation of preventative care for your pet. During these checkups, our veterinarians perform a thorough physical examination, checking everything from eyes and ears to heart and lungs. We'll discuss nutrition, behavior, and any concerns you might have about your pet's health.",
      icon: <HeartPulse className="h-16 w-16 text-roufi-red" />,
      features: [
        "Complete physical examination",
        "Preventative health recommendations",
        "Nutrition and weight assessment",
        "Behavior consultation",
        "Age-appropriate health screenings"
      ]
    },
    {
      title: "Vaccinations",
      description:
        "Protecting your pet from preventable diseases is one of the most important things you can do for their health. Our vaccination protocols are tailored to your pet's age, lifestyle, and risk factors. We use the latest vaccine technology to ensure safety and effectiveness.",
      icon: <ShieldCheck className="h-16 w-16 text-roufi-green" />,
      features: [
        "Core and lifestyle-based vaccines",
        "Personalized vaccination schedules",
        "Low-stress handling techniques",
        "Digital vaccine records",
        "Vaccination certificates for travel or boarding"
      ]
    },
    {
      title: "Dental Care",
      description:
        "Dental health is crucial to your pet's overall wellbeing. Our dental services include teeth cleaning, polishing, extractions when necessary, and digital dental X-rays. We also provide guidance on at-home dental care to maintain your pet's oral health between professional cleanings.",
      icon: <Stethoscope className="h-16 w-16 text-roufi-red" />,
      features: [
        "Professional teeth cleaning and polishing",
        "Digital dental X-rays",
        "Extractions and oral surgery",
        "Home care recommendations",
        "Dental-friendly treats and diets"
      ]
    },
    {
      title: "Grooming",
      description:
        "Our professional grooming services help keep your pet clean, comfortable, and healthy. From basic baths to complete makeovers, our skilled groomers provide services tailored to your pet's breed, coat type, and temperament. We use gentle, pet-friendly products and techniques.",
      icon: <Scissors className="h-16 w-16 text-roufi-green" />,
      features: [
        "Breed-specific styling",
        "Medicated baths",
        "Nail trimming",
        "Ear cleaning",
        "Specialized care for senior pets"
      ]
    },
    {
      title: "Surgery",
      description:
        "Our veterinary surgical team is experienced in a wide range of procedures, from routine spay/neuter to more complex soft tissue and orthopedic surgeries. We use state-of-the-art equipment and monitoring to ensure your pet's safety and comfort throughout their procedure.",
      icon: <PawPrint className="h-16 w-16 text-roufi-red" />,
      features: [
        "Pre-surgical consultations",
        "Advanced anesthesia monitoring",
        "Pain management protocols",
        "Post-operative care instructions",
        "Follow-up examinations"
      ]
    },
    {
      title: "Pharmacy",
      description:
        "Our full-service pharmacy provides convenient access to all the medications your pet might need. Our veterinarians can advise on proper dosing, potential side effects, and drug interactions. We offer both prescription medications and over-the-counter products.",
      icon: <Pill className="h-16 w-16 text-roufi-green" />,
      features: [
        "Prescription medications",
        "Prescription diets",
        "Flea, tick, and heartworm preventatives",
        "Supplements and vitamins",
        "Compounded medications"
      ]
    }
  ];

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

  return (
    <div className="min-h-screen mt-20 flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-roufi-cream to-white py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-roufi-red">Veterinary</span> Services
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              At Roufi Vet Clinic, we provide comprehensive care for animals of all types and ages.
              Explore our range of services designed to keep your furry family members healthy and happy.
            </p>
            <div className="md:flex justify-center gap-8 ">
              <Link href="/SmallAnimal">
                <Button className="bg-roufi-green hover:bg-roufi-green/90 py-6 px-10 text-lg text-white">
                  Small Animals
                </Button>
              </Link>
              <Link href="/LargeAnimal">
                <Button className="bg-roufi-green mt-4 md:mt-0 hover:bg-roufi-green/90 py-6 px-10 text-lg text-white">
                  Large Animals
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Services Overview */}
       <Service2/>
        {/* Detailed Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Detailed <span className="text-roufi-green">Service</span> Information
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Learn more about the comprehensive veterinary services we offer for your beloved pets.
              </p>
            </div>

            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  <div className="md:w-1/3 bg-roufi-cream/30 rounded-xl p-8 flex justify-center">
                    <div className="bg-white p-8 rounded-full shadow-sm">
                      {service.icon}
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4 text-roufi-red">{service.title}</h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-roufi-green"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-roufi-cream/30">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-roufi-red">Questions</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our veterinary services.
              </p>
            </div>

            <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3 text-roufi-green">
                  How often should I bring my pet in for a wellness exam?
                </h3>
                <p className="text-gray-600">
                  We recommend annual wellness exams for adult pets and twice-yearly exams for senior pets (generally over 7 years for dogs and over 10 years for cats). Puppies and kittens need more frequent visits during their first year.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3 text-roufi-green">
                  What vaccinations does my pet need?
                </h3>
                <p className="text-gray-600">
                  Vaccination needs vary based on your pet's age, lifestyle, and risk factors. Core vaccines for dogs usually include rabies, distemper, parvovirus, and adenovirus. For cats, core vaccines typically include rabies, feline viral rhinotracheitis, calicivirus, and panleukopenia.
                </p>
              </div>

              <div className="border-b pb-6">
                <h3 className="text-xl font-semibold mb-3 text-roufi-green">
                  How do I prepare my pet for surgery?
                </h3>
                <p className="text-gray-600">
                  For most procedures, you'll need to withhold food for 8-12 hours before surgery, though water is usually allowed until a few hours before. We'll provide detailed pre-operative instructions during your consultation, including any medication adjustments needed.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-semibold mb-3 text-roufi-green">
                  Do you offer emergency services?
                </h3>
                <p className="text-gray-600">
                  We provide urgent care during our regular business hours. For emergencies outside our operating hours, we work closely with local 24-hour emergency veterinary hospitals and can direct you to the nearest facility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Schedule an <span className="text-roufi-red">Appointment?</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg mb-8">
              Our team is ready to provide your pet with the care they deserve.
              Book an appointment today or contact us with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/BookAppointment">
                <Button className="bg-roufi-green hover:bg-roufi-green/90 text-white w-full sm:w-auto">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/Contact">
                <Button variant="outline" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
