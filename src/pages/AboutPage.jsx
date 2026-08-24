import React from "react";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      {/* <PageHeader
        crumb="About"
        eyebrow="Our Legacy & Craft"
        title="Engineering Showroom Finishes"
        text="Discover the story behind ShineBay — where high-pressure precision foam, Swiss ceramic coatings, and dedicated technician passion intersect."
      /> */}
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </div>
  );
}