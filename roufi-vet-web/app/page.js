import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div>

      <Header/>
      <Hero/>
      <About/>
      <Services/>
    </div>
   
  );
}
