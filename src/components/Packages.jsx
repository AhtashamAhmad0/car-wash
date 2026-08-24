import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PACKAGES } from "../data/data";
import { SectionHeading } from "./Services";

export default function Packages() {
  return (
    <section className="bg-ink-900 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 relative">
        <SectionHeading
          eyebrow="Bundled & Better Value"
          title="Service Packages"
          light
          text="Pick a package once and skip picking add-ons every visit."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {PACKAGES.map((p) => (
            <div
              key={p.id}
              className={`rounded-2xl p-7 flex flex-col relative ${
                p.highlight
                  ? "bg-foam-500 text-ink-900 lg:-translate-y-4 shadow-2xl shadow-foam-500/20"
                  : "bg-ink-800 text-white border border-ink-700"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 right-6 bg-signal-500 text-ink-900 text-[11px] font-bold uppercase tracking-wide px-3 py-1 rounded-full font-mono">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl font-bold">{p.name}</h3>
              <p className={`font-mono text-3xl font-bold mt-3 ${p.highlight ? "text-ink-900" : "text-foam-400"}`}>
                Rs. {p.price.toLocaleString()}
                <span className="text-sm font-normal opacity-70"> starting</span>
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${p.highlight ? "text-ink-900" : "text-foam-400"}`}
                    />
                    <span className={p.highlight ? "text-ink-900/90" : "text-ink-100"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className={`mt-7 text-center font-semibold py-3 rounded-full transition-colors ${
                  p.highlight
                    ? "bg-ink-900 text-white hover:bg-ink-700"
                    : "bg-foam-500 text-ink-900 hover:bg-foam-400"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
