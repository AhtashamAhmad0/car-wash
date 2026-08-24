import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview"
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import { SectionHeading } from "../components/Services";
import { SERVICES } from "../data/data";



export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview/>
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <CTABanner />
    </>
  );
}
