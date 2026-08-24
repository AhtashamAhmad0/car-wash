import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Car, ShieldCheck, Sparkle, Wrench, CalendarCheck } from "lucide-react";
import { HOW_IT_WORKS } from "../data/data";

// Car wash icon mapping corresponding to each stage
const STEP_ICONS = [CalendarCheck, Car, Wrench, Sparkle, ShieldCheck];

export default function HowItWorks() {
  const steps = HOW_IT_WORKS && HOW_IT_WORKS.length > 0 ? HOW_IT_WORKS : [];
  const [activeStep, setActiveStep] = useState(0);

  const totalSteps = steps.length;

  const handleNext = () => {
    if (totalSteps === 0) return;
    setActiveStep((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    if (totalSteps === 0) return;
    setActiveStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  if (totalSteps === 0) return null;

  const current = steps[activeStep];
  const stepNumberFormatted = String(activeStep + 1).padStart(2, "0");
  const CurrentStepIcon = STEP_ICONS[activeStep % STEP_ICONS.length];

  return (
    <section className="relative bg-slate-950 py-24 overflow-hidden border-t border-slate-900">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Section Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Sparkles size={13} className="text-cyan-400" />
              Simple Process
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Car Wash <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Process</span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-md leading-relaxed">
            Five simple steps from choosing your service to driving away with a spotless, fully protected car.
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-12">
          
          {/* LEFT SIDE: Active Step Description & Giant Background Number */}
          <div className="lg:col-span-6 relative flex flex-col justify-between min-h-[380px]">
            
            {/* Giant Faded Step Number in Background */}
            <div className="absolute -top-10 left-0 font-display font-extrabold text-[160px] sm:text-[200px] text-slate-800/25 leading-none select-none pointer-events-none z-0">
              {stepNumberFormatted}.
            </div>

            {/* Active Step Content */}
            <div className="relative z-10 space-y-6 pt-12">
              <span className="inline-block font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/90 border border-cyan-400/30 px-3 py-1 rounded-lg">
                Step {stepNumberFormatted} of {String(totalSteps).padStart(2, "0")}
              </span>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {current?.title || current?.name}
              </h3>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                {current?.text || current?.description}
              </p>
            </div>

            {/* Navigation Buttons and Step Dots */}
            <div className="relative z-10 flex items-center gap-6 mt-10 pt-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Step"
                  className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                >
                  <ArrowLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Step"
                  className="p-3.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800 transition-all shadow-lg active:scale-95"
                >
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Step Navigation Dots */}
              <div className="flex items-center gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Go to step ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === activeStep
                        ? "w-8 bg-cyan-400 shadow-lg shadow-cyan-400/30"
                        : "w-2.5 bg-slate-800 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Car Wash Business Focused Display */}
          <div className="lg:col-span-6 relative">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-400/30 text-cyan-400">
                    <Car size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Car Care Journey</h4>
                    <p className="text-xs text-slate-400">ShineBay Workflow</p>
                  </div>
                </div>

                <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-950/80 border border-cyan-400/30 px-3 py-1 rounded-full">
                  Stage {stepNumberFormatted}
                </span>
              </div>

              {/* Numbered Step Grid */}
              <div className="grid grid-cols-5 gap-2 my-8">
                {steps.map((item, idx) => {
                  const isActive = idx === activeStep;
                  const Icon = STEP_ICONS[idx % STEP_ICONS.length];

                  return (
                    <button
                      key={item.step || idx}
                      onClick={() => setActiveStep(idx)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-b from-cyan-400 to-teal-400 text-slate-950 border-cyan-300 shadow-lg shadow-cyan-500/20 scale-105"
                          : "bg-slate-950/60 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      <span className="font-mono text-xs font-extrabold">
                        0{idx + 1}
                      </span>
                      <Icon size={18} />
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Detail Card */}
              <div className="bg-slate-950/80 border border-cyan-500/30 rounded-2xl p-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-400 text-slate-950 shrink-0">
                  <CurrentStepIcon size={24} />
                </div>
                <div>
                  <h5 className="text-white font-bold text-base">
                    {current?.title || current?.name}
                  </h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {current?.text || current?.description}
                  </p>
                </div>
              </div>

              {/* Progress Line */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Progress Tracker</span>
                <span className="font-mono font-semibold text-cyan-400">
                  {Math.round(((activeStep + 1) / totalSteps) * 100)}% Completed
                </span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-teal-400 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${((activeStep + 1) / totalSteps) * 100}%` }}
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}