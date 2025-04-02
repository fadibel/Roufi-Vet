
import React from "react";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "../../components/ui/Button";
import Link from "next/link";
import { Phone, Calendar, Cow} from "lucide-react";

import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const Farmhousecall = () => {

    const services = [
        {
            id: 1,
            title: "EQUINE",
            image: "/assets/Equine.png",
            alt: "Cat and rabbit together",
            link: "/LargeAnimal/equine"
        },
        {
            id: 2,
            title: "CATTLE",
            image: "/assets/Cattle.png",
            alt: "Dogs in a hallway",
            link: "/LargeAnimal/cattle" // ✅ Added missing link
        },
    ];
  return (
    <div className="min-h-screen mt-20 flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-roufi-green text-white py-16 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                OUR<br />
                                <span className="text-5xl md:text-6xl lg:text-7xl">LARGE ANIMAL</span>
                            </h1>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <img
                                src="/assets/Farmhosue-Calls.png"
                                alt="Veterinarian with horse"
                                className="rounded-3xl  shadow-xl max-w-full md:max-w-md"
                            />
                        </div>
                    </div>
                </section>

        {/* Cattle Services Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8">
            <div className="flex items-center gap-3 mb-6">
              {/* <Cow className="h-8 w-8 text-roufi-green" /> */}
              <h2 className="text-4xl md:text-5xl font-bold text-roufi-red">Farmhouse Calls</h2>
            </div>
            
            <p className="text-lg mb-8">
            Getting large animals and livestock to the vet can be difficult, time-consuming, and in some cases impossible. That’s why Buffalo Veterinary Clinic offers farmhouse calls so your farm animals can get the care they need as soon as possible. We can come to you to provide veterinary services for farm animals, cattle, and horses.            </p>
            
            <p className="text-lg mb-12 font-medium">
              Have questions or want to make an appointment? Give us a call at +213 551.21.76.99
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/BookAppointment">
                <Button className="bg-roufi-green hover:bg-roufi-green/90 text-white">
                  <Calendar className="mr-2 h-4 w-4" /> Book an Appointment
                </Button>
              </Link>
              <Link href="/Contact">
                <Button variant="outline" className="border-roufi-green text-roufi-green hover:bg-roufi-green/10">
                  <Phone className="mr-2 h-4 w-4" /> Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-roufi-cream/30">
                    <div className="max-w-5xl mx-auto px-4 md:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-roufi-red mb-6">Other Large Animal Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">



                            {services.map((service) => (
                                <Link key={service.id} href={service.link || "/LargeAnimal"}>
                                    <ServiceCard
                                        title={service.title}
                                        image={service.image}
                                        alt={service.alt}
                                    />
                                </Link>
                            ))}
                        </div>


                        <div className="text-center mt-12">
                            <p className="text-xl mb-6">
                                Our experienced veterinary team is committed to providing the highest quality care for all large animals.
                            </p>

                        </div>
                    </div>
                </section>
      </main>
      <Footer />
    </div>
  );
};

export default Farmhousecall;
