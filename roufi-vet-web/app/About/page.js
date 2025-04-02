
import React from "react";

import Footer from "@/components/Footer";
import { Award, HeartPulse, Users, MessageSquare } from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#fffcf7] mt-20 from-[#FFF9F0] to-white py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a8b00]">Our Story</h1>
                <p className="text-lg text-gray-700 mb-6">
                  Founded in 1992, Roufi Vet Clinic has been providing exceptional veterinary care to pets and their families for over a decade. Our mission is to deliver compassionate, high-quality veterinary services that enhance the lives of animals and strengthen the bond between pets and their owners.
                </p>
                <p className="text-lg text-gray-700">
                  What started as a small practice has grown into a trusted veterinary center, serving thousands of pets annually. Our success is built on a foundation of expertise, empathy, and a genuine love for animals.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="/assets/logo.png" 
                  alt="Roufi Vet Team" 
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a8b00]">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-[#1a8b00]/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#FFF9F0] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <HeartPulse className="text-[#ff0302] h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a8b00]">Compassion</h3>
                  <p className="text-gray-600">We treat every animal with kindness, gentleness, and respect, recognizing the unique bond between pets and their families.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#1a8b00]/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#FFF9F0] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Award className="text-[#ff0302] h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a8b00]">Excellence</h3>
                  <p className="text-gray-600">We are committed to providing the highest standard of veterinary care through continued education and advanced medical practices.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#1a8b00]/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#FFF9F0] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="text-[#ff0302] h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a8b00]">Community</h3>
                  <p className="text-gray-600">We believe in building strong relationships with our clients and the community, fostering a sense of trust and partnership.</p>
                </CardContent>
              </Card>
              
              <Card className="border-[#1a8b00]/20 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-[#FFF9F0] p-3 w-14 h-14 flex items-center justify-center mb-4">
                    <MessageSquare className="text-[#ff0302] h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-[#1a8b00]">Education</h3>
                  <p className="text-gray-600">We empower pet owners through education, providing the knowledge and resources needed for optimal pet health and wellness.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gradient-to-tl from-[#FFF9F0] to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a8b00]">Meet Our Doctor</h2>
            
            <div className="grid grid-cols-1  gap-8">
             
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-48 h-48 overflow-hidden rounded-full border-4 border-[#1a8b00]">
                  <div className="w-full h-full bg-[#FFF9F0] flex items-center justify-center">
                    <span className="text-6xl text-[#1a8b00] font-bold">DR</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-[#1a8b00]">Dr. Belkacemi Abdelkrim</h3>
                <p className="text-[#ff0302] font-medium"> Veterinarian</p>
                <p className="mt-2 text-2xl  text-gray-600">
                  Dr. Belkacemi has over 33 years of experience in veterinary medicine, specializing in small and large animal care and surgery.
                </p>
              </div>
              
            </div>
            
            {/* <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our dedicated team of professionals is committed to providing your pets with the best possible care. Each member brings unique skills and a shared passion for animal welfare.
              </p>
            </div> */}
          </div>
        </section>

        {/* Facility Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#1a8b00]">Our Facility</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Our modern veterinary facility is equipped with state-of-the-art technology and designed to provide a comfortable, stress-free environment for your pets. From our welcoming reception area to our clean, well-maintained examination rooms, every aspect of our clinic is centered around delivering exceptional care.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#ff0302]">●</div>
                    <span className="text-gray-700">Advanced diagnostic equipment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#ff0302]">●</div>
                    <span className="text-gray-700">Modern surgical suites</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#ff0302]">●</div>
                    <span className="text-gray-700">Comfortable recovery areas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#ff0302]">●</div>
                    <span className="text-gray-700">Separate cat and dog wards</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-[#ff0302]">●</div>
                    <span className="text-gray-700">Pet-friendly waiting areas</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-[#FFF9F0] rounded-lg flex items-center justify-center">
                  <span className="text-[#1a8b00] text-center px-4">Examination Room</span>
                </div>
                <div className="aspect-square bg-[#FFF9F0] rounded-lg flex items-center justify-center">
                  <span className="text-[#1a8b00] text-center px-4">Surgery Suite</span>
                </div>
                <div className="aspect-square bg-[#FFF9F0] rounded-lg flex items-center justify-center">
                  <span className="text-[#1a8b00] text-center px-4">Recovery Area</span>
                </div>
                <div className="aspect-square bg-[#FFF9F0] rounded-lg flex items-center justify-center">
                  <span className="text-[#1a8b00] text-center px-4">Waiting Room</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
  