import React from "react";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "../data/data";

export default function Testimonials() {
  const reviews = TESTIMONIALS && TESTIMONIALS.length > 0 ? TESTIMONIALS : [];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Sparkles size={13} className="text-cyan-400" />
              Customer Reviews
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Drivers</span> Say
            </h2>
          </div>

          {/* Social Proof Rating Badge */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg">
            <div className="flex flex-col items-center justify-center bg-cyan-950 border border-cyan-400/30 px-3.5 py-2 rounded-xl">
              <span className="font-display text-xl font-black text-cyan-300">4.9</span>
              <span className="text-[10px] font-mono text-cyan-400/80 uppercase">Rating</span>
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                Based on 500+ Verified Detailing Reviews
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {reviews.map((t, idx) => {
            const initial = t.name ? t.name.charAt(0).toUpperCase() : "C";
            const ratingCount = t.rating || 5;

            return (
              <div
                key={t.name || idx}
                className="group relative bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 rounded-3xl p-6 transition-all duration-300 shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1 flex flex-col justify-between backdrop-blur-sm overflow-hidden"
              >
                {/* Subtle Card Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400/0 via-cyan-400/50 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <Quote size={40} className="text-slate-800 group-hover:text-cyan-500/10 transition-colors absolute top-5 right-5 pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className={
                          i < ratingCount
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-800"
                        }
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed italic relative z-10">
                    &ldquo;{t.review || t.text}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <span className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 to-teal-400 font-display font-bold text-slate-950 flex items-center justify-center text-lg shadow-lg shadow-cyan-500/20 shrink-0">
                      {initial}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-white font-bold text-sm">{t.name}</p>
                        <CheckCircle2 size={13} className="text-cyan-400" />
                      </div>
                      {t.vehicle && (
                        <p className="text-slate-400 text-xs font-mono mt-0.5">
                          {t.vehicle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Verified Customer Badge */}
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-400/30 px-2.5 py-1 rounded-full shrink-0">
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}