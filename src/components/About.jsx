import React from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, Users2, Target, HeartHandshake, Sparkles, ShieldCheck, Award, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

const STATS = [
  { icon: CalendarCheck, value: "6+", label: "Years of Excellence", color: "from-cyan-400 to-blue-500" },
  { icon: Users2, value: "12,000+", label: "Vehicles Detailed", color: "from-teal-400 to-emerald-500" },
  { icon: Target, value: "9+", label: "Master Services", color: "from-sky-400 to-indigo-500" },
  { icon: HeartHandshake, value: "98%", label: "Client Retention", color: "from-cyan-300 to-teal-400" },
];

const HIGHLIGHTS = [
  "pH-Neutral Snow Foam & Touchless Decontamination",
  "Climate-Controlled Detailing Bays with Studio Lighting",
  "Instant WhatsApp Booking & Real-Time Bay Slot Tracker",
  "Certified Technicians Specially Trained for Supercars",
];

export default function About() {
  return (
    <section className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Content & Mission */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
                <Sparkles size={13} className="text-cyan-400" />
                Rawalpindi's Premier Detailing Studio
              </span>
              
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Crafting Mirror Finishes Since <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">2020</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              ShineBay started as a single specialized wash bay in Bahria Town and has evolved into Rawalpindi’s most trusted automotive care center. We merge industrial-grade ceramic protection technology with meticulous hand craftsmanship.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Whether it’s a daily hatchback or an exotic weekend cruiser, we treat every vehicle with calibrated precision. Our mission is seamless: deliver showroom-quality paint depth while honoring your valuable time through live slot reservations and instant digital confirmations.
            </p>

            {/* Feature Bullet List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {HIGHLIGHTS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-1" />
                  <span className="text-xs text-slate-300 font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              {STATS.map((s) => {
                const IconComponent = s.icon;
                return (
                  <div
                    key={s.label}
                    className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-3">
                      <IconComponent size={18} className="text-cyan-400" />
                    </div>
                    <p className="font-display text-2xl font-extrabold text-white tracking-tight">
                      {s.value}
                    </p>
                    <p className="text-slate-400 text-[11px] font-mono mt-1 leading-tight">
                      {s.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 active:scale-95"
              >
                <span>Book Bay Experience</span>
                <ArrowRight size={15} />
              </Link>
              <div className="flex items-center gap-2 text-slate-400 text-xs font-mono px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-xl">
                <MapPin size={14} className="text-cyan-400" />
                <span>Bahria Town Phase 7, Rawalpindi</span>
              </div>
            </div>

          </div>

          {/* RIGHT: Visual Collage with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Box */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop"
                  alt="ShineBay Detailing Bay"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Glassmorphic Card Top Right */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-slate-900/90 border border-slate-700/80 p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  <Award size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">#1 Rated Wash Studio</p>
                  <p className="text-[10px] text-slate-400 font-mono">Bahria Town Phase 7</p>
                </div>
              </div>

              {/* Floating Glassmorphic Card Bottom Left */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-slate-900/90 border border-slate-700/80 p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-950 border border-teal-500/30 text-teal-400">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Certified Technicians</p>
                  <p className="text-[10px] text-slate-400 font-mono">100% Paint Safe Tech</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}