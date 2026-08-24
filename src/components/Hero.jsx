import React from "react";
import { Clock, MapPin, Phone, ArrowRight, ChevronRight, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/data";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] bg-slate-950 overflow-hidden flex items-center pt-28 pb-16 lg:pt-36 lg:pb-20">
      
      {/* Dynamic Vibrant Gradient Lights */}
      <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-teal-400/15 rounded-full blur-[130px] pointer-events-none" />

      {/* Modern Grid Pattern Layer */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Vibrant Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan-950/60 border border-cyan-400/40 backdrop-blur-xl px-4 py-1.5 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-lg shadow-cyan-950/50">
              <Sparkles size={14} className="text-cyan-400 animate-bounce" />
              <span>Rawalpindi's Premium Auto Detailing</span>
            </div>

            {/* Glowing Headline */}
            <h1 className="font-display text-white text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              Give Your Car the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                Shine It Deserves.
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
              Professional car wash and detailing services designed to keep your vehicle clean, fresh, and protected — book a bay in under a minute.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105"
              >
                Book a Wash <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700/80 hover:border-cyan-400/60 hover:bg-slate-800/80 text-white font-semibold px-7 py-4 rounded-full transition-all backdrop-blur-md shadow-lg"
              >
                View Services <ChevronRight size={18} />
              </Link>
            </div>

            {/* Highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium border-t border-slate-800/80 mt-6">
              <div className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-cyan-400" />
                <span>100% Eco-Friendly Foam</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={17} className="text-cyan-400" />
                <span>Express Detailing Available</span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={17} className="text-cyan-400 fill-cyan-400" />
                <span>4.9 Star Rated</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Glassmorphism Vibrant Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative group mx-auto max-w-lg lg:max-w-none">
              
              {/* Vibrant Glow Effect Behind Image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700" />

              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-cyan-400/30 bg-slate-900/90 shadow-2xl backdrop-blur-md">
                
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1200&q=80"
                  alt="Car Detailing"
                  className="w-full h-[480px] object-cover object-center transform transition duration-700 group-hover:scale-105"
                />

                {/* Soft Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-xl border border-cyan-400/40 px-4 py-2 rounded-2xl flex items-center gap-2.5 shadow-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400" />
                  </span>
                  <span className="text-cyan-300 text-xs font-semibold tracking-wide">Bays Open Now</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-900/85 backdrop-blur-xl border border-slate-700/80 p-4 rounded-2xl flex items-center justify-between shadow-2xl">
                  <div>
                    <p className="text-white font-bold text-sm">Ceramic Coating & Wash</p>
                    <p className="text-slate-400 text-xs mt-0.5">High-gloss protection</p>
                  </div>
                  <span className="text-cyan-400 font-semibold text-xs bg-cyan-950/80 border border-cyan-400/30 px-3 py-1.5 rounded-lg">
                    Live Booking
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* HERO INFO BAR */}
        <div className="mt-14 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
            
            {/* Opening Hours */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0">
                <Clock size={22} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Opening Hours</p>
                <p className="text-white text-sm font-semibold mt-0.5">{BUSINESS?.hours || "Mon - Sun: 8am - 10pm"}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0">
                <MapPin size={22} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Location</p>
                <p className="text-white text-sm font-semibold mt-0.5">Bahria Town, Rawalpindi</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 shrink-0">
                <Phone size={22} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">Contact Number</p>
                <a
                  href={`tel:${BUSINESS?.phone || "+923001234567"}`}
                  className="text-white text-sm font-semibold mt-0.5 hover:text-cyan-400 transition-colors block"
                >
                  {BUSINESS?.phone || "+92 300 1234567"}
                </a>
              </div>
            </div>

            {/* Action CTA */}
            <div className="flex lg:justify-end">
              <Link
                to="/booking"
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition-all text-sm shadow-md"
              >
                Reserve Your Bay <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}