import React from "react";
import PageHeader from "../components/PageHeader";
import VehicleTypes from "../components/VehicleTypes";
import CTABanner from "../components/CTABanner";

export default function VehicleTypesPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <PageHeader
        crumb="Vehicle Types"
        eyebrow="Customized Care"
        title="Vehicle Classes & Pricing"
        text="Whether you drive a daily compact hatchback, a luxury executive sedan, an off-road SUV, or an exotic supercar — we have custom bay setups tailored for your vehicle."
      />
      <VehicleTypes />
      <CTABanner />
    </div>
  );
}