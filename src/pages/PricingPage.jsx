import React from "react";
import PageHeader from "../components/PageHeader";
import Pricing from "../components/Pricing";
import CTABanner from "../components/CTABanner";

export default function PricingPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <PageHeader
        crumb="Pricing"
        eyebrow="Clear & Honest Rates"
        title="Transparent Wash & Detailing Rates"
        text="Choose your vehicle category and select from our quick rinse, premium foam treatment, or full restoration interior and ceramic packages."
      />
      <Pricing />
      <CTABanner />
    </div>
  );
}