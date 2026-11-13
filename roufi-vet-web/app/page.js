import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import About from "@/components/About";
import FeaturedServices from "@/components/FeaturedServices";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Services />
      <About />
      <FeaturedServices />
      <CallToAction />
    </>
  );
}
