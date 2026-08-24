import React from "react";
import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import CTABanner from "../components/CTABanner";

export default function ServicesPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <PageHeader
        crumb="Services"
        eyebrow="Precision Auto Care"
        title="Explore Detailing Services"
        text="Choose from basic foam maintenance washes to deep multi-stage paint restorations and long-lasting ceramic protection coatings."
      />
      <Services />
      <CTABanner />
    </div>
  );
}