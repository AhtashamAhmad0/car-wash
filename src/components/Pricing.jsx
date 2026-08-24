import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Crown, Info, LayoutGrid, Table } from "lucide-react";
import { PRICING_MATRIX } from "../data/data";

// High quality imagery per vehicle class for visual depth
const VEHICLE_PREVIEWS = {
  "Small Car / Hatchback": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=800&auto=format&fit=crop",
  "Sedan": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=800&auto=format&fit=crop",
  "SUV / Crossover": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
  "Luxury / Exotic": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
};

export default function Pricing() {
  const [viewMode, setViewMode] = useState("cards"); // 'cards' | 'table'
  const matrix = PRICING_MATRIX && PRICING_MATRIX.length > 0 ? PRICING_MATRIX : [];

  return (
    <section className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-sky-500/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Header Controls & Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Sparkles size={13} className="text-cyan-400" />
              100% Transparent Rates
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">Upfront Pricing</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Zero surprise fees. Choose your vehicle type and select the package level that fits your budget.
            </p>
          </div>

          {/* View Mode Toggle Switch */}
          <div className="bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl flex items-center gap-2 shrink-0 shadow-lg">
            <button
              onClick={() => setViewMode("cards")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                viewMode === "cards"
                  ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid size={15} />
              <span>Cards</span>
            </button>
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ${
                viewMode === "table"
                  ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-md shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Table size={15} />
              <span>Matrix Table</span>
            </button>
          </div>
        </div>

        {/* VIEW MODE 1: MODERN VEHICLE CARDS */}
        {viewMode === "cards" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {matrix.map((row, idx) => {
              const bgImg = VEHICLE_PREVIEWS[row.vehicle] || VEHICLE_PREVIEWS["Sedan"];
              const isPopular = idx === 1; // Highlight Sedan or middle option

              return (
                <div
                  key={row.vehicle || idx}
                  className={`group relative rounded-3xl overflow-hidden transition-all duration-500 backdrop-blur-xl flex flex-col justify-between ${
                    isPopular
                      ? "bg-slate-900 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 lg:-translate-y-2"
                      : "bg-slate-900/70 border border-slate-800 hover:border-slate-700 shadow-xl"
                  }`}
                >
                  {/* Badge for Popular Option */}
                  {isPopular && (
                    <div className="bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 text-[10px] font-mono font-black uppercase tracking-widest text-center py-1.5 font-bold">
                      Most Requested Class
                    </div>
                  )}

                  {/* Top Image Preview */}
                  <div className="relative h-40 w-full overflow-hidden">
                    <img
                      src={bgImg}
                      alt={row.vehicle}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold text-white">
                      {row.vehicle}
                    </h3>
                  </div>

                  {/* Pricing Tiers Content */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      
                      {/* Basic Tier */}
                      <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-2xl flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                            <Zap size={13} className="text-slate-400" />
                            <span>Basic Wash</span>
                          </div>
                          <span className="font-mono text-lg font-bold text-white">
                            Rs. {row.basic?.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded-md">
                          ~30 min
                        </span>
                      </div>

                      {/* Premium Tier */}
                      <div className="bg-cyan-950/40 border border-cyan-500/30 p-3 rounded-2xl flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-cyan-300 font-medium">
                            <Sparkles size={13} className="text-cyan-400" />
                            <span>Premium Wash</span>
                          </div>
                          <span className="font-mono text-lg font-bold text-cyan-300">
                            Rs. {row.premium?.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-1 rounded-md border border-cyan-500/30">
                          ~60 min
                        </span>
                      </div>

                      {/* Detailing Tier */}
                      <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-2xl flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                            <Crown size={13} className="text-amber-400" />
                            <span>Full Detailing</span>
                          </div>
                          <span className="font-mono text-lg font-bold text-amber-300">
                            Rs. {row.detailing?.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-1 rounded-md">
                          ~120 min
                        </span>
                      </div>

                    </div>

                    {/* Book Link Button */}
                    <Link
                      to="/booking"
                      className={`mt-4 w-full inline-flex items-center justify-center gap-2 font-bold text-xs px-4 py-3 rounded-xl transition-all duration-300 shadow-md ${
                        isPopular
                          ? "bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 shadow-cyan-500/20"
                          : "bg-slate-950 hover:bg-cyan-400 border border-slate-800 hover:border-cyan-300 text-slate-200 hover:text-slate-950"
                      }`}
                    >
                      <span>Reserve Wash Bay</span>
                      <ArrowRight size={14} />
                    </Link>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: HIGH-TECH DARK MATRIX TABLE */}
        {viewMode === "table" && (
          <div className="mt-12 overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left min-w-[640px] border-collapse">
              <thead>
                <tr className="bg-slate-950 text-slate-300 border-b border-slate-800">
                  <th className="font-display text-sm font-bold px-6 py-5">Vehicle Class</th>
                  <th className="font-display text-sm font-bold px-6 py-5">
                    <span className="flex items-center gap-2 text-slate-300">
                      <Zap size={15} className="text-slate-400" />
                      Basic Wash
                    </span>
                  </th>
                  <th className="font-display text-sm font-bold px-6 py-5">
                    <span className="flex items-center gap-2 text-cyan-300">
                      <Sparkles size={15} className="text-cyan-400" />
                      Premium Wash
                    </span>
                  </th>
                  <th className="font-display text-sm font-bold px-6 py-5">
                    <span className="flex items-center gap-2 text-amber-300">
                      <Crown size={15} className="text-amber-400" />
                      Full Detailing
                    </span>
                  </th>
                  <th className="font-display text-sm font-bold px-6 py-5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {matrix.map((row, i) => (
                  <tr
                    key={row.vehicle || i}
                    className="hover:bg-slate-800/50 transition-colors"
                  >
                    <td className="px-6 py-5 font-bold text-white text-base">
                      {row.vehicle}
                    </td>
                    <td className="px-6 py-5 font-mono text-slate-300">
                      Rs. {row.basic?.toLocaleString()}
                    </td>
                    <td className="px-6 py-5 font-mono text-cyan-300 font-semibold bg-cyan-950/20">
                      Rs. {row.premium?.toLocaleString()}
                    </td>
                    <td className="px-6 py-5 font-mono text-amber-300 font-bold">
                      Rs. {row.detailing?.toLocaleString()}
                    </td>
                    <td className="px-6 py-5 text-right">
                      <Link
                        to="/booking"
                        className="inline-flex items-center gap-1.5 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs px-3.5 py-2 rounded-xl transition-all shadow-md shadow-cyan-500/10"
                      >
                        <span>Book</span>
                        <ArrowRight size={13} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Footer Disclaimer & Guarantees */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Info size={14} className="text-cyan-400 shrink-0" />
            <span>* Prices shown are base estimates and may adjust slightly depending on extreme mud or interior restoration required.</span>
          </div>

          <div className="flex items-center gap-2 text-teal-400 font-mono font-semibold shrink-0">
            <ShieldCheck size={16} />
            <span>100% Satisfaction Guarantee</span>
          </div>
        </div>

      </div>
    </section>
  );
}