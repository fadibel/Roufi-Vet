import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-[#fffcf7] from-white to-roufi-cream pt-10 pb-6 border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" to="/">
              <img 
                src="/assets/logo.png" 
                alt="Roufi Vet Logo" 
                className="h-16 mb-4"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Providing exceptional veterinary care with compassion and expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-[#1a8b00] text-white rounded-full hover:bg-[#1a8b00]/90 transition-colors">
                <Facebook className="h-5 w-5" />
                
              </a>
              <a href="#" className="p-2 bg-[#ff0302] text-white rounded-full hover:bg-[#ff0302]/90 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-[#1a8b00] text-white rounded-full hover:bg-[#1a8b00]/90 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1a8b00]">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/ServicesPage" className="hover:text-[#ff0302] transition-colors">Wellness Exams</a></li>
              <li><a href="/ServicesPage" className="hover:text-[/ServicesPageff0302] transition-colors">Vaccinations</a></li>
              <li><a href="/ServicesPage" className="hover:text-[#ff0302] transition-colors">Dental Care</a></li>
              <li><a href="/ServicesPage" className="hover:text-[#ff0302] transition-colors">Surgery</a></li>
              <li><a href="/ServicesPage" className="hover:text-[#ff0302] transition-colors">Emergency Care</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1a8b00]">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="/" className="hover:text-[#ff0302] transition-colors">Home</a></li>
              <li><a href="/About" className="hover:text-[#ff0302] transition-colors">About Us</a></li>
              <li><a href="/LargeAnimal" className="hover:text-[#ff0302] transition-colors">Large Animal</a></li>
              <li><a href="/SmallAnimal" className="hover:text-[#ff0302] transition-colors">Small Animal</a></li>
              <li><a href="/Contact" className="hover:text-[#ff0302] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 text-[#1a8b00]">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>CH3J+GJ9, Hamma Bouziane</li>
              <li>Constantine</li>
              <li className="font-medium text-[#ff0302]">+213 551.21.76.99</li>
              <li className="font-medium text-[#ff0302]">+213 771.12.40.91</li>
              <li>roufivet92@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Roufi Vet Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
