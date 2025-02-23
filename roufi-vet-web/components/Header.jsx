// import { useLocation } from "react-router-dom";
"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

const Header = () => {


    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
        {
            id:"0",
            title:"Home",
            url:"/"
        },
        {
            id:"1",
            title:"About",
            url:""
        },
        {
            id:"2",
            title:"Our Services",
            url:""
        },
        {
            id:"3",
            title:"Pharmacy",
            url:""
        },
        {
            id:"4",
            title:"Blog",
            url:""
        }
    ]

    return (
          <div className={`fixed top-0 left-0 w-full transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"} bg-white shadow-md z-50`}>
            <div className="flex justify-between py-4">
                <div className="ml-20">
                    <Image src="/assets/logo.png" width={150} height={50} alt="logo" />
                </div>
                <div className="flex float-right gap-10 top-0 pr-20">
                    <div>
                        <button className="px-5 py-2 border border-black rounded-full hover:bg-[#1a8b00] text-lg font-semibold text-black">
                            Contact us
                        </button>
                        <button className="ml-4 px-5 py-2 border border-[#ff0302] rounded-full text-lg font-semibold text-[#ff0302]">
                            Make Appointment
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-[#1a8b00] py-4 flex justify-center">
                {navigation.map((item) => (
                    <Link key={item.id} href={item.url} className="mx-14 text-lg font-medium text-white">
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};



export default Header;