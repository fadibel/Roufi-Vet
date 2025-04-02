import React from 'react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import HeroBanner from '@/components/HeroBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const LargeAnimal = () => {
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
        {
            id: 3,
            title: "FARMHOUSE CALLS",
            image: "/assets/Farmhosue-Calls.png",
            alt: "Dog getting dental treatment",
            link: "/LargeAnimal/farmhouse-call" // ✅ Added missing link
        }
    ];

    return (
        <div className="min-h-screen mt-20 bg-white">
            <Header />
            <HeroBanner
                image="/assets/zoetis.jpg"
                title={<>Large<br />ANIMAL SERVICES</>}
            />

            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    <p className="text-gray-800 mb-8 text-xl text-center">
                        RoufiVet Veterinary Clinic is proud to offer veterinary services for horses, cattle, and livestock. We know that getting these animals to the vet can be difficult, time-consuming, and in some cases impossible, which is why we offer on-site farmhouse calls so your animals can get the care they need.
                    </p>

                    <p className="text-gray-800 mb-12 text-lg">
                        To learn more about our services or to schedule an appointment, call us at <a href="tel:+213551217699" className="text-roufi-red hover:underline">+213 551217699</a>. You can also book a visit online.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LargeAnimal;
