import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Sparkles, Home } from "lucide-react";

export default function PageHeader({ eyebrow, title, text, crumb }) {
  return (
    <section className="relative bg-slate-950 pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden border-b border-slate-900">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
          alt="Car Detailing Studio Background"
          className="w-full h-full object-cover object-center filter blur-xs"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      </div>

      {/* Cyberpunk Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6 bg-slate-900/80 border border-slate-800/80 w-fit px-3.5 py-1.5 rounded-full backdrop-blur-md">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
          >
            <Home size={13} />
            <span>Home</span>
          </Link>
          <ChevronRight size={12} className="text-slate-600" />
          <span className="text-cyan-400 font-semibold">{crumb || "Services"}</span>
        </div>

        {/* Section Header Content */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
            <Sparkles size={13} className="text-cyan-400" />
            {eyebrow || "Premium Auto Care"}
          </span>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {title || "Precision Detailing Services"}
          </h1>

          {text && (
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
              {text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}