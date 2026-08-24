import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/data";

// Unsplash Car Care Image Mapping for dynamic fallback
const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1200&auto=format&fit=crop", // Foam Wash
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1200&auto=format&fit=crop", // Interior Detailing
  "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop", // Paint Correction
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1200&auto=format&fit=crop", // Ceramic Coating
  "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1200&auto=format&fit=crop", // Engine Bay Wash
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop", // Wheel & Tire Care
];

export default function Services() {
  const [filter, setFilter] = useState("all");

  // Fallback services array if data source is missing
  const serviceList = SERVICES && SERVICES.length > 0 ? SERVICES : [];

  return (
    <section className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-blue-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Icons.Sparkles size={13} className="text-cyan-400" />
              What We Offer
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Car Wash & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Detailing Packages</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            From quick high-pressure exterior rinses to complete ceramic multi-stage paint correction treatments.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {serviceList.map((s, idx) => {
            const IconComponent = Icons[s.icon] || Icons.Droplets;
            const cardImg = s.image || SERVICE_IMAGES[idx % SERVICE_IMAGES.length];

            return (
              <div
                key={s.id || idx}
                className="group relative bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between backdrop-blur-xl"
              >
                {/* Image Section with Overlay */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={cardImg}
                    alt={s.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    {/* Icon Badge */}
                    <div className="p-2.5 rounded-2xl bg-slate-950/80 border border-slate-700/80 text-cyan-400 backdrop-blur-md shadow-lg">
                      <IconComponent size={20} />
                    </div>

                    {/* Tag Badge */}
                    {s.tag && (
                      <span className="font-mono text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 px-3 py-1 rounded-full shadow-md">
                        {s.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                      {s.description}
                    </p>
                  </div>

                  {/* Price and Duration Details */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-cyan-400 font-mono font-semibold">
                          Rs.
                        </span>
                        <span className="font-display text-2xl font-extrabold text-white">
                          {typeof s.price === "number" ? s.price.toLocaleString() : s.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <Icons.Clock size={12} className="text-slate-500" />
                        <span>{s.duration} min duration</span>
                      </div>
                    </div>

                    {/* Action Link */}
                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-2 bg-slate-950 hover:bg-cyan-400 border border-slate-800 hover:border-cyan-300 text-slate-200 hover:text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md group-hover:shadow-cyan-400/20"
                    >
                      <span>Book Bay</span>
                      <Icons.ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Exportable Heading Component
export function SectionHeading({ eyebrow, title, text, light }) {
  return (
    <div className="max-w-2xl space-y-2">
      <span className="font-mono text-xs uppercase tracking-widest text-cyan-400">
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl sm:text-5xl font-extrabold ${
          light ? "text-white" : "text-slate-100"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className="text-slate-400 text-base leading-relaxed pt-1">
          {text}
        </p>
      )}
    </div>
  );
}