
import React from 'react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import HeroBanner from '@/components/HeroBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const SmallAnimal = () => {
    const services = [
        {
            id: 1,
            title: "EXOTIC & POCKET PETS",
            image: "/assets/Pocket-Pets-Exotics.png",
            alt: "Cat and rabbit together"
        },
        {
            id: 2,
            title: "DIAGNOSTICS",
            image:"/assets/Diagnostics.png",
            alt: "Dogs in a hallway"
        },
        {
            id: 3,
            title: "DENTISTRY",
            image: "/assets/Service-Block-1.png",
            alt: "Dog getting dental treatment"
        },
        {
            id: 4,
            title: "SURGERY",
            image: "/assets/surgery.png",
            alt: "Cat with cone collar"
        },
        {
            id: 5,
            title: "WELLNESS CARE",
            image: "/assets/Wellness-Care.png",
            alt: "Dog looking over fence"
        },
        {
            id: 6,
            title: "ORTHOPEDICS",
            image: "/assets/Orthopedics.png",
            alt: "Veterinarian examining a golden retriever"
        },
        {
            id: 7,
            title: "PAIN MANAGEMENT",
            image: "/assets/Pain-Management-Laser-Therapy.png",
            alt: "Dog receiving treatment"
        },
        {
            id: 8,
            title: "ULTRASOUND AND ECHOCARDIOGRAMS",
            image: "/assets/Ultrasound.png",
            alt: "Dog getting ultrasound"
        },
        {
            id: 9,
            title: "TIBIAL TUBEROSITY ADVANCEMENT (TTA)",
            image: "/assets/TTA.png",
            alt: "Dog paw with bandage"
        },
        {
            id: 10,
            title: "TIBIAL PLATEAU LEVELING OSTEOTOMY (TPLO)",
            image: "/assets/TPLO.png",
            alt: "Dog recovering from surgery"
        }
    ];

    return (
        <div className="min-h-screen mt-20 bg-white">
            <Header />
            <HeroBanner
                image="/assets/Team-Baanner.jpg"
                title={<>SMALL<br />ANIMAL SERVICES</>}
            />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <p className="text-gray-800 mb-8 text-xl text-center">
                        RoufiVet Veterinary Clinic is proud to offer a comprehensive range of veterinary services to address the needs of small animals, including pocket pets and exotics. Our skilled and caring medical team is here whether your pet needs wellness care or advanced medical treatment.
                    </p>

                    <p className="text-gray-800 mb-12 text-lg">
                        To learn more about our services or to schedule an appointment, call us at <a href="tel:+213551217699" className="text-roufi-red hover:underline">+213 551217699</a>. You can also book a visit online.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                title={service.title}
                                image={service.image}
                                alt={service.alt}
                            />
                        ))}
                    </div>

                    {/* <div className="mt-16 text-center">
                        <Link href="/BookAppointment">
                            <button className="px-6 py-3 border bg-[#1a8b00] rounded-full text-base font-medium text-white">
                                Book Appointment
                            </button>
                        </Link>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SmallAnimal;