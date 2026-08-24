import React from "react";
import PageHeader from "../components/PageHeader";
import Gallery from "../components/Gallery";
import CTABanner from "../components/CTABanner";

export default function GalleryPage() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-100">
      <PageHeader
        crumb="Gallery"
        eyebrow="Proof Of Perfection"
        title="Showroom Transformation Gallery"
        text="Take a look at the mirror-like reflections, ceramic paint finishes, deep foam cleans, and spotless interior detailing we craft every single day."
      />
      <Gallery />
      <CTABanner />
    </div>
  );
}