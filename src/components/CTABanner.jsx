import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles, ShieldCheck, Clock, CalendarCheck } from "lucide-react";
import { BUSINESS } from "../data/data";

export default function CTABanner() {
  return (
    <section className="relative bg-slate-950 py-20 lg:py-24 overflow-hidden border-t border-slate-900">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-sky-500/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Main Floating Glass Container */}
        <div className="relative rounded-3xl bg-slate-900/80 border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl backdrop-blur-xl overflow-hidden group">
          
          {/* Animated Gradient Edge Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-sky-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-700 pointer-events-none" />

          {/* Background Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            
            {/* Left Content Area */}
            <div className="space-y-6 text-center lg:text-left max-w-2xl">
              
              {/* Floating Pill Header */}
              <div className="inline-flex items-center gap-2 bg-cyan-950/90 border border-cyan-400/30 px-4 py-1.5 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-lg shadow-cyan-950/50">
                <Sparkles size={14} className="text-cyan-400 animate-pulse" />
                <span>Instant Online Bay Reservation</span>
              </div>

              {/* Dynamic Title */}
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Ready for a <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                  Spotless, Showroom Ride?
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Reserve your detailing bay online in under two minutes — choose your package, pick a time, and drive straight in with zero queue waiting.
              </p>

              {/* Value Indicator Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300">
                  <Clock size={14} className="text-cyan-400" />
                  <span>2-Min Booking</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-300">
                  <ShieldCheck size={14} className="text-teal-400" />
                  <span>100% Paint Protection Guarantee</span>
                </div>
              </div>

            </div>

            {/* Right Action Controls */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-4 w-full sm:w-auto shrink-0">
              
              {/* Primary Call To Action Button */}
              <Link
                to="/booking"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-400 via-teal-400 to-cyan-400 bg-[length:200%_auto] hover:bg-right text-slate-950 font-bold text-base px-8 py-4 rounded-2xl transition-all duration-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95"
              >
                <CalendarCheck size={20} className="text-slate-950" />
                <span>Book a Wash Now</span>
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Secondary Call Button */}
              <a
                href={`tel:${BUSINESS?.phone || "+1234567890"}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-slate-950/80 border border-slate-700/80 hover:border-cyan-400/50 text-slate-200 hover:text-cyan-300 font-semibold text-base px-7 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:bg-slate-900 active:scale-95"
              >
                <Phone size={18} className="text-cyan-400" />
                <span>Call Us Direct</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}