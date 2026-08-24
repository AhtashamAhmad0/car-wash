import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Sparkles, CheckCircle2, Bookmark, Heart, Share2, ArrowUpRight } from "lucide-react";
import { GALLERY } from "../data/data";

// 20 High-Resolution Real Car Detailing Photography Assets with varied aspect ratios
const PINTEREST_IMAGES_20 = [
  {
    id: 1,
    title: "Snow Foam Pre-Wash Shield",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "1.2k",
    desc: "Thick pH-neutral active foam bath breaking down road grime without stripping ceramic coats.",
  },
  {
    id: 2,
    title: "Matte Leather Conditioning",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    likes: "850",
    desc: "Deep steam sanitization with custom Swissvax matte interior balm.",
  },
  {
    id: 3,
    title: "Mirror Reflection Polish",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[9/16]",
    likes: "2.4k",
    desc: "2-stage paint correction removing 98% swirl marks followed by 9H crystal ceramic layer.",
  },
  {
    id: 4,
    title: "Supercar Hydrophobic Gloss",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "3.1k",
    desc: "Precision buffer finish delivering extreme water-beading performance.",
  },
  {
    id: 5,
    title: "Engine Bay Steam Clean",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[1/1]",
    likes: "920",
    desc: "Safe dry-steam degreasing and OEM matte plastic dressing.",
  },
  {
    id: 6,
    title: "Forged Wheel & Caliper Protection",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    likes: "1.7k",
    desc: "Iron fallout decontamination + high-temp ceramic brake caliper shield.",
  },
  {
    id: 7,
    title: "Cockpit Steam Extraction",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "1.1k",
    desc: "Hot-water carpet extraction and total odor elimination treatment.",
  },
  {
    id: 8,
    title: "Crystal Clear Lens Polish",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[16/9]",
    likes: "640",
    desc: "Oxidation removal with anti-UV polycarbonate sealant coating.",
  },
  {
    id: 9,
    title: "Deep Rim & Barrel Wash",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "1.4k",
    desc: "pH-neutral wheel cleaner removing stubborn brake dust from inner barrels.",
  },
  {
    id: 10,
    title: "Alcantara Steering Wheel Care",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    likes: "2.1k",
    desc: "Dedicated fiber cleaning brush removing hand oils and fluffing fabric fibers.",
  },
  {
    id: 11,
    title: "Exotic Paint Protection Film",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[9/16]",
    likes: "4.2k",
    desc: "Self-healing clear bra TPU film application on full front fascia.",
  },
  {
    id: 12,
    title: "High-Pressure Underbody Wash",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[1/1]",
    likes: "880",
    desc: "Chassis flush removing salt, mud, and road debris buildup.",
  },
  {
    id: 13,
    title: "Carbon Fiber Gloss Coating",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "3.5k",
    desc: "Specialized ceramic formulation designed for weave depth and UV protection.",
  },
  {
    id: 14,
    title: "Dashboard & Vent Sanitization",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    likes: "790",
    desc: "Ozone mist treatment blowing fresh anti-microbial air through AC ducts.",
  },
  {
    id: 15,
    title: "SUV Off-Road Mud Stripping",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[16/9]",
    likes: "1.8k",
    desc: "Heavy-duty citrus pre-wash breakdown for caked-on mud and clay.",
  },
  {
    id: 16,
    title: "2-Stage Rotary Paint Buffing",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "2.9k",
    desc: "Wool pad compound followed by ultra-fine finishing pad polish.",
  },
  {
    id: 17,
    title: "Custom Red Leather Balm",
    category: "Interior",
    url: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    likes: "1.6k",
    desc: "Rehydrating natural oils preventing premature cracking and fading.",
  },
  {
    id: 18,
    title: "Dual Action Orbital Finish",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[9/16]",
    likes: "3.0k",
    desc: "Haze-free clear coat perfection on dark midnight blue metallic paint.",
  },
  {
    id: 19,
    title: "Exhaust Tip Mirror Polish",
    category: "Exterior",
    url: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[1/1]",
    likes: "1.1k",
    desc: "Stainless steel wool and metal polish restoring raw chrome shine.",
  },
  {
    id: 20,
    title: "Hydrophobic Glass Sealant",
    category: "Detailing",
    url: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1000&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    likes: "2.3k",
    desc: "Windshield water repellency treatment for crystal clear wet-weather driving.",
  },
];

const CATEGORIES = ["All", "Exterior", "Interior", "Detailing"];

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [savedItems, setSavedItems] = useState({});

  const filteredItems =
    selectedFilter === "All"
      ? PINTEREST_IMAGES_20
      : PINTEREST_IMAGES_20.filter((item) => item.category === selectedFilter);

  const toggleSave = (e, id) => {
    e.stopPropagation();
    setSavedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative bg-slate-950 py-20 lg:py-28 overflow-hidden">
      {/* Background Neon Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-sky-500/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 z-10">
        
        {/* Header & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-800/80">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-cyan-950/80 border border-cyan-400/30 px-3.5 py-1 rounded-full text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-md">
              <Sparkles size={13} className="text-cyan-400" />
              20 HD Pinboard Inspiration
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              ShineBay <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">Masonry Gallery</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Explore 20 showcase shots of foam washes, paint correction, ceramic coatings, and deep interior extraction.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 border border-slate-800 p-1.5 rounded-2xl shrink-0 shadow-xl">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold font-mono transition-all duration-300 ${
                  selectedFilter === cat
                    ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-md shadow-cyan-500/20 font-bold"
                    : "text-slate-400 hover:text-white hover:bg-slate-800/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PINTEREST MASONRY GRID (CSS COLUMNS WITH 20 ITEMS) */}
        <div className="mt-10 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {filteredItems.map((item) => {
            const isSaved = savedItems[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="break-inside-avoid group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-cyan-500/10 cursor-pointer"
              >
                {/* Image Element with Pinterest Hover Zoom */}
                <div className={`relative w-full ${item.aspect} overflow-hidden bg-slate-950`}>
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Pinterest "Pin / Save" Floating Button */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                    <button
                      onClick={(e) => toggleSave(e, item.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 shadow-lg ${
                        isSaved
                          ? "bg-red-500 text-white"
                          : "bg-cyan-400 hover:bg-cyan-300 text-slate-950"
                      }`}
                    >
                      <Bookmark size={13} className={isSaved ? "fill-white" : ""} />
                      <span>{isSaved ? "Saved" : "Pin"}</span>
                    </button>
                  </div>

                  {/* Top Left Category Pill */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest bg-slate-950/80 border border-slate-700/80 text-cyan-300 px-3 py-1 rounded-full backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay Bottom Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-slate-300 font-mono text-[11px]">
                        <Heart size={12} className="text-red-400 fill-red-400/20" />
                        {item.likes}
                      </span>
                      <span className="flex items-center gap-1 text-cyan-400 font-semibold group-hover:underline">
                        <span>Expand</span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* FULL-SCREEN PINTEREST LIGHTBOX MODAL */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-slate-950/80 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-all shadow-lg"
            >
              <X size={18} />
            </button>

            {/* Modal Left Image Showcase */}
            <div className="md:w-3/5 bg-slate-950 relative overflow-hidden flex items-center justify-center min-h-[300px]">
              <img
                src={activeModalItem.url}
                alt={activeModalItem.title}
                className="w-full h-full object-cover max-h-[80vh]"
              />
            </div>

            {/* Modal Right Info & Actions Panel */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-slate-900 overflow-y-auto">
              
              <div className="space-y-4">
                {/* Header Tags & Save Action */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 border border-cyan-400/30 px-3 py-1 rounded-md">
                    {activeModalItem.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors">
                      <Share2 size={16} />
                    </button>
                    <button
                      onClick={(e) => toggleSave(e, activeModalItem.id)}
                      className="px-4 py-2 rounded-full bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 hover:bg-cyan-300 shadow-md"
                    >
                      <Bookmark size={14} />
                      <span>Save Pin</span>
                    </button>
                  </div>
                </div>

                {/* Title & Desc */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeModalItem.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeModalItem.desc}
                </p>

                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
                    <CheckCircle2 size={15} />
                    <span>ShineBay Certified Studio Work</span>
                  </div>
                  <p className="text-xs text-slate-500 font-mono">
                    Shot #{activeModalItem.id} of 20 in our climate-controlled wash studio.
                  </p>
                </div>
              </div>

              {/* Bottom Book CTA */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <Link
                  to="/booking"
                  onClick={() => setActiveModalItem(null)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02]"
                >
                  <span>Book This Treatment</span>
                  <ArrowUpRight size={15} />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}