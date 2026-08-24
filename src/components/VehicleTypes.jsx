import React from "react";
import { Link } from "react-router-dom";
import { Car, Truck, Gauge, Crown, ArrowRight, Clock, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";
import { VEHICLE_TYPES } from "../data/data";

// High-resolution vehicle class imagery mapping
const VEHICLE_IMAGES = {
  "small-car": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop", // Compact / Hatchback
  sedan: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop", // Luxury Sedan
  suv: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop", // SUV / Crossover
  luxury: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop", // Exotic / Supercar
};

// Icon fallback mapping
const ICONS = {
  "small-car": Car,
  sedan: Gauge,
  suv: Truck,
  luxury: Crown,
};

export default function VehicleTypes() {
  const vehicleList = VEHICLE_TYPES && VEHICLE_TYPES.length > 0 ? VEHICLE_TYPES : [];

  return (
    <section className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      {/* Background Glow Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Sparkles size={13} className="text-cyan-400" />
              Tailored Precision
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Service By <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">Vehicle Category</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Every vehicle size requires distinct care, specialized tools, and calibrated washing bay time. Select your vehicle class below.
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {vehicleList.map((v, idx) => {
            const IconComponent = ICONS[v.id] || Car;
            const bgImage = VEHICLE_IMAGES[v.id] || VEHICLE_IMAGES["sedan"];

            return (
              <div
                key={v.id || idx}
                className="group relative bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-cyan-500/15 flex flex-col justify-between backdrop-blur-xl"
              >
                {/* Top Image Showcase */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={bgImage}
                    alt={v.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                  {/* Icon Badge Overlay */}
                  <div className="absolute top-4 left-4 p-2.5 rounded-2xl bg-slate-950/80 border border-slate-700/80 text-cyan-400 backdrop-blur-md shadow-lg">
                    <IconComponent size={22} />
                  </div>

                  {/* Starting Price Pill */}
                  <div className="absolute top-4 right-4 bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold px-3 py-1 rounded-full backdrop-blur-md shadow-md">
                    From Rs. {v.startingPrice ? v.startingPrice.toLocaleString() : "1,500"}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-mono bg-slate-950/60 border border-slate-800/80 px-2.5 py-1 rounded-lg w-fit">
                      {v.examples}
                    </p>
                  </div>

                  {/* Spec List */}
                  <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-slate-500 font-medium">Suitable: </span>
                        <span>{v.suitable}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-teal-400 shrink-0" />
                      <div>
                        <span className="text-slate-500 font-medium">Wash Time: </span>
                        <span className="font-mono text-slate-200">{v.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                      <ShieldCheck size={14} />
                      <span>Custom Care</span>
                    </div>

                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-xl transition-all duration-300 shadow-md shadow-cyan-500/20 active:scale-95"
                    >
                      <span>Book Class</span>
                      <ArrowRight size={14} />
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