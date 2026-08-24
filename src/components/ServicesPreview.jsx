import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { SERVICES } from "../data/data";

// High-quality fallback images for car care services
const SERVICE_IMAGES = [
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80", // Foam Wash
  "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80", // Interior Detailing
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80", // Ceramic Coating
  "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=800&q=80", // Engine Wash
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80", // Polishing
  "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800&q=80", // Undercarriage
];

export default function ServicesPreview() {
  const featured = SERVICES ? SERVICES.slice(0, 6) : [];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Inline Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase">
              <Icons.Sparkles size={13} className="text-cyan-400" />
              What We Offer
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Car Wash & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Detailing Services</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From a quick foam rinse to full ceramic protection — pick what your car needs.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>View All Services</span>
            <Icons.ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {featured.map((s, index) => {
            const Icon = Icons[s.icon] || Icons.Droplets;
            const imageUrl = s.image || SERVICE_IMAGES[index % SERVICE_IMAGES.length];

            return (
              <div
                key={s.id || index}
                className="group relative bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 flex flex-col"
              >
                {/* Image Banner Header */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={s.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Image Dark Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300 shadow-lg">
                    <Icon size={20} />
                  </div>

                  {/* Service Tag / Badge */}
                  {s.tag && (
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-mono uppercase tracking-wider bg-cyan-950/90 text-cyan-300 border border-cyan-400/30 backdrop-blur-md px-3 py-1 rounded-full font-bold shadow-md">
                        {s.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-2">
                      {s.description}
                    </p>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-[10px] font-mono uppercase text-slate-500">Starting From</p>
                      <p className="font-mono text-lg font-bold text-white">
                        Rs. {s.price ? s.price.toLocaleString() : "0"}
                      </p>
                    </div>

                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-1.5 text-xs font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 px-4 py-2.5 rounded-xl transition-all duration-300"
                    >
                      Book Now <Icons.ArrowRight size={14} />
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