import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import MeetOurTeam from "@/components/CallToAction";
import Services from "@/components/Services";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <div>

      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <CallToAction/>
      <Footer/>
    </div>
   
  );
}
