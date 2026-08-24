import { Link } from "react-router-dom";
import { Droplets, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-ink-900 min-h-[70vh] flex items-center justify-center pt-24 pb-16">
      <div className="text-center px-6">
        <span className="inline-flex w-14 h-14 rounded-full bg-foam-500/15 items-center justify-center mx-auto mb-6">
          <Droplets size={26} className="text-foam-400" />
        </span>
        <p className="font-mono text-foam-400 text-sm uppercase tracking-widest">404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
          This bay is empty.
        </h1>
        <p className="text-ink-100 mt-3 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-foam-500 hover:bg-foam-400 text-ink-900 font-semibold px-6 py-3 rounded-full mt-8 transition-colors"
        >
          Back to Home <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
