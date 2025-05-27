import React from "react";
import Footer from "@/components/Footer";
// import { Button } from "../../components/ui/Button";
import Link from "next/link";
import { Calendar, PawPrint, Phone } from "lucide-react";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";


const services = [

    {
        id: 2,
        title: "CATTLE",
        image: "/assets/Cattle.png",
        alt: "Dogs in a hallway",
        link: "/LargeAnimal/cattle" // ✅ Added missing link
    },
    {
        id: 3,
        title: "FARMHOUSE CALLS",
        image: "/assets/Farmhosue-Calls.png",
        alt: "Dog getting dental treatment",
        link: "/LargeAnimal/farmhouse-call" // ✅ Added missing link
    }
];

const Equine = () => {


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
                                src="/assets/Equine.png"
                                alt="Veterinarian with horse"
                                className="rounded-3xl  shadow-xl max-w-full md:max-w-md"
                            />
                        </div>
                    </div>
                </section>

                {/* Equine Services */}
                <section className="py-16 bg-white">
                    <div className="max-w-5xl mx-auto px-4 md:px-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-roufi-red mb-8">EQUINE</h2>

                        <p className="text-lg mb-8">
                            Roufi Veterinary Clinic is proud to provide a wide range of skilled veterinary care for your horse, including reproduction services.
                        </p>

                        <p className="text-lg mb-6">
                            In addition to routine wellness and preventative care, we offer:
                        </p>

                        <ul className="list-disc pl-8 mb-8 space-y-2">
                            <li className="text-lg">Vaccinations including rabies, West Nile virus, tetanus, rhinopneumonitis (herpes), equine influenza, strangles</li>
                            <li className="text-lg">Pre-purchase exams</li>
                            <li className="text-lg">Coggins testing and export documentation</li>
                            <li className="text-lg">Lameness, including diagnosis and management of equine lameness, and joint injections</li>
                            <li className="text-lg">Ophthalmic exams</li>
                            <li className="text-lg">In-house radiology</li>
                            <li className="text-lg">Dentistry/floats</li>
                            <li className="text-lg">Surgery</li>
                        </ul>

                        <p className="text-lg mb-8">
                            Our equine reproductive services include ultrasound diagnostics, routine castration, and a doctor who has a special interest, additional training and knowledge in breeding mares with both fresh and frozen semen.
                        </p>

                        <p className="text-lg mb-12">
                            To learn more about our equine services or to schedule an appointment for your horse, call us at +213 551.21.76.99
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

                {/* Other Large Animals Section */}
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

export default Equine;