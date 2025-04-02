
import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 bg-[#eaf0de]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to give your pet the 
                <span className="from-[#1a8b00]/30 to-[#ff0302]/30"> best care possible?</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Schedule an appointment today and join our family of happy, healthy pets. Whether it's routine care or specialized treatment, we're here for you every step of the way.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#ff0302] hover:bg-[#ff0000] text-white text-lg py-6 px-8 flex items-center gap-2">
                  <PhoneCall className="h-5 w-5" />
                  Call Now: +213 551.21.76.99
                </Button>
                
                <Button href="/BookAppointment" variant="outline" className="border-[#1a8b00] text-[#1a8b00] hover:bg-[#1a8b00]/10 text-lg py-6 px-8">
                  Book Online
                </Button>
              
              </div>
            </div>
            <div className="relative h-[300px] md:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" 
                alt="Veterinarian with pets" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a8b00]/30 to-[#ff0302]/30 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
  