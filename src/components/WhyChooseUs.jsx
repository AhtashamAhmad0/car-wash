import React, { useState, useEffect, useRef } from "react";
import * as Icons from "lucide-react";
import { WHY_CHOOSE_US } from "../data/data";

// High-resolution fallback images for each feature step
const FEATURE_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80",
    caption: "Premium Ceramic & Foam Wash Technology",
  },
  {
    url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1000&q=80",
    caption: "Precision High-Pressure Detailing",
  },
  {
    url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1000&q=80",
    caption: "Certified Professional Technicians",
  },
  {
    url: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?auto=format&fit=crop&w=1000&q=80",
    caption: "Eco-Friendly Paint-Safe Products",
  },
  {
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80",
    caption: "High-Gloss Protective Finishing",
  },
  {
    url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80",
    caption: "Dedicated Bay Booking & Speed",
  },
];

export default function WhyChooseUs() {
  const features = WHY_CHOOSE_US && WHY_CHOOSE_US.length > 0 ? WHY_CHOOSE_US : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef(null);

  const total = features.length;

  // Auto-play slideshow controller
  useEffect(() => {
    if (total === 0 || isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4500); // changes every 4.5 seconds

    return () => clearInterval(autoPlayRef.current);
  }, [total, isPaused]);

  const handleNext = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    if (total === 0) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  if (total === 0) return null;

  const currentItem = features[activeIndex];
  const currentImage = FEATURE_IMAGES[activeIndex % FEATURE_IMAGES.length];
  const CurrentIcon = Icons[currentItem?.icon] || Icons.BadgeCheck;

  return (
    <section 
      className="relative bg-slate-950 py-24 overflow-hidden border-t border-slate-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Vibrant Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Inline Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Icons.Sparkles size={13} className="text-cyan-400 animate-pulse" />
              The ShineBay Difference
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">ShineBay</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore what sets our premium auto detailing and care apart, step by step.
            </p>
          </div>

          {/* Left/Right Manual Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Previous Feature"
              className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all shadow-lg active:scale-95"
            >
              <Icons.ArrowLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Feature"
              className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all shadow-lg active:scale-95"
            >
              <Icons.ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Main Grid: Left Content Stepper vs Right Visual Stage */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT SIDE: Interactive Content List (7 Cols) */}
          <div className="lg:col-span-6 space-y-3.5">
            {features.map((item, idx) => {
              const Icon = Icons[item.icon] || Icons.BadgeCheck;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.title || idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 border relative overflow-hidden ${
                    isActive
                      ? "bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                      : "bg-slate-900/30 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
                  }`}
                >
                  {/* Active Slide Progress Line */}
                  {isActive && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse" />
                  )}

                  <div className="flex items-start gap-4">
                    <span
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? "bg-cyan-400 text-slate-950 font-bold shadow-lg shadow-cyan-400/20"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      <Icon size={22} />
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`font-display text-lg font-bold transition-colors ${
                            isActive ? "text-cyan-300" : "text-white"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <span className="font-mono text-xs text-slate-500">
                          0{idx + 1}
                        </span>
                      </div>
                      
                      <p
                        className={`text-sm mt-1.5 leading-relaxed transition-all duration-300 ${
                          isActive
                            ? "text-slate-200 line-clamp-none"
                            : "text-slate-400 line-clamp-1"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: Dynamic Car Visual Display (5 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative group mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Neon Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-700" />

              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 bg-slate-900 shadow-2xl min-h-[460px] flex items-center justify-center">
                
                {/* Image Transition Layers */}
                {FEATURE_IMAGES.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.url}
                    alt={currentItem?.title || "Car Wash Feature"}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-in-out transform ${
                      idx === activeIndex
                        ? "opacity-100 scale-100 rotate-0"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  />
                ))}

                {/* Dark Vignette Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <div className="bg-slate-950/80 backdrop-blur-md border border-cyan-400/30 px-3.5 py-1.5 rounded-full flex items-center gap-2">
                    <CurrentIcon size={14} className="text-cyan-400" />
                    <span className="text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                      Feature {activeIndex + 1} of {total}
                    </span>
                  </div>

                  <span className="bg-slate-950/80 backdrop-blur-md border border-slate-700/80 px-3 py-1 rounded-full text-slate-400 text-xs font-mono">
                    {isPaused ? "Paused" : "Auto Play"}
                  </span>
                </div>

                {/* Bottom Active Information Overlay Card */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-950/85 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl z-10 shadow-2xl">
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                    {currentItem?.title}
                  </p>
                  <p className="text-white font-semibold text-sm mt-1">
                    {currentImage?.caption}
                  </p>
                  
                  {/* Step Progress Indicators */}
                  <div className="flex gap-1.5 mt-3">
                    {features.map((_, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 rounded-full cursor-pointer transition-all duration-300 ${
                          i === activeIndex
                            ? "w-8 bg-cyan-400"
                            : "w-2 bg-slate-700 hover:bg-slate-500"
                        }`}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}