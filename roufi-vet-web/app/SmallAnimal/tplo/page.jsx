
import React from "react";
// import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { Button } from "../../components/ui/Button";
import Link from "next/link";
import { Phone, Calendar, Cow } from "lucide-react";

import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/Button";

const tplo = () => {
    const services = [
        {
            id: 1,
            title: "EXOTIC & POCKET PETS",
            image: "/assets/Pocket-Pets-Exotics.png",
            alt: "Cat and rabbit together",
            link: "/SmallAnimal/exotic-pocketpets"
        },
        {
            id: 2,
            title: "DIAGNOSTICS",
            image: "/assets/Diagnostics.png",
            alt: "Dogs in a hallway",
            link: "/SmallAnimal/diagnostics"
        },
        {
            id: 3,
            title: "DENTISTRY",
            image: "/assets/Service-Block-1.png",
            alt: "Dog getting dental treatment",
            link: "/SmallAnimal/dentistry"
        },
        {
            id: 4,
            title: "SURGERY",
            image: "/assets/surgery.png",
            alt: "Cat with cone collar",
            link: "/SmallAnimal/surgery"
        },
        {
            id: 5,
            title: "WELLNESS CARE",
            image: "/assets/Wellness-Care.png",
            alt: "Dog looking over fence",
            link: "/SmallAnimal/willnesscare"
        },
        {
            id: 6,
            title: "ORTHOPEDICS",
            image: "/assets/Orthopedics.png",
            alt: "Veterinarian examining a golden retriever",
            link: "/SmallAnimal/orthopedics"
        },
        {
            id: 7,
            title: "PAIN MANAGEMENT",
            image: "/assets/Pain-Management-Laser-Therapy.png",
            alt: "Dog receiving treatment",
            link: "/SmallAnimal/painmanagement"
        },
        {
            id: 8,
            title: "ULTRASOUND AND ECHOCARDIOGRAMS",
            image: "/assets/Ultrasound.png",
            alt: "Dog getting ultrasound",
            link: "/SmallAnimal/ultrasoundandecho"
        },
        {
            id: 9,
            title: "TIBIAL TUBEROSITY ADVANCEMENT (TTA)",
            image: "/assets/TTA.png",
            alt: "Dog paw with bandage",
            link: "/SmallAnimal/tta"
        },
        // {
        //     id: 10,
        //     title: "TIBIAL PLATEAU LEVELING OSTEOTOMY (TPLO)",
        //     image: "/assets/TPLO.png",
        //     alt: "Dog recovering from surgery",
        //     link: "/SmallAnimal/tplo"
        // }
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
                                <span className="text-5xl md:text-6xl lg:text-7xl">SMALL ANIMAL</span>
                            </h1>
                        </div>
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <img
                                src="/assets/TPLO.png"
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
                            <h2 className="text-4xl md:text-5xl font-bold text-roufi-red">Tibial Plateau Leveling Osteotomy (TPLO)</h2>
                        </div>

                        <p className="text-lg mb-8">
                            TPLO (Tibial Plateau Leveling Osteotomy) surgery is a common procedure used to treat a torn cranial cruciate ligament (CCL) in a dog’s knee. It has a high success rate and generally helps dogs return to better functional levels and develop less joint arthritis later in life. TPLO surgery also requires specialized equipment and training to perform.</p>
                        <p className="text-lg mb-12 font-medium">
                            TPLO surgery focuses on changing the angle of the tibia to prevent the knee from sliding out of place. The surgeon makes an intricate cut in the top of the tibia, rotates it to a new position, and secures it with a metal plate and screws. This adjustment stabilizes the knee joint, allowing the dog to walk more comfortably and regain strength over time.</p>
                        <p className="text-lg mb-12 font-medium">
                            Recovery after TPLO surgery typically includes several weeks of restricted activity, followed by a gradual return to normal exercise. Most dogs show significant improvement and can return to an active lifestyle within a few months.                        </p>


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
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-roufi-red mb-6">Other Large Animal Services</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">



                            {services.map((service) => (
                                <Link key={service.id} href={service.link || "/SmallAnimal"}>
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

export default tplo;
