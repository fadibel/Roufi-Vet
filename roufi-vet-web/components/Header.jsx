"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons for the menu

const Header = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navigation = [
        { id: "0", title: "Home", url: "/" },
        { id: "1", title: "About", url: "" },
        { id: "2", title: "Our Services", url: "" },
        { id: "3", title: "Pharmacy", url: "" },
        { id: "4", title: "Blog", url: "" }
    ];

    return (
        <div className={`fixed top-0 left-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} bg-white shadow-md z-50`}>
            <div className="flex justify-between items-center px-6 py-4 md:px-20">
                {/* Logo */}
                <div>
                    <Image src="/assets/logo.png" width={200} height={50} alt="logo" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-10">
                    {navigation.map((item) => (
                        <Link key={item.id} href={item.url} className="text-lg font-medium text-black hover:text-[#1a8b00]">
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="px-5 py-2 border border-black rounded-full hover:bg-[#1a8b00] text-lg font-semibold text-black">
                        Contact us
                    </button>
                    <button className="px-5 py-2 border border-[#ff0302] rounded-full text-lg font-semibold text-[#ff0302]">
                        Make Appointment
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`absolute top-0 left-0 w-full bg-white shadow-md transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden`}>
                <div className="flex flex-col items-center py-6">
                    {navigation.map((item) => (
                        <Link key={item.id} href={item.url} className="py-2 text-lg font-medium text-black" onClick={() => setMenuOpen(false)}>
                            {item.title}
                        </Link>
                    ))}
                    <button className="mt-4 px-5 py-2 border border-black rounded-full hover:bg-[#1a8b00] text-lg font-semibold text-black">
                        Contact us
                    </button>
                    <button className="mt-2 px-5 py-2 border border-[#ff0302] rounded-full text-lg font-semibold text-[#ff0302]">
                        Make Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;