import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Droplets } from "lucide-react";
import { BUSINESS } from "../data/data";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/vehicle-types", label: "Vehicle Types" },
  { to: "/pricing", label: "Pricing" },
  { to: "/packages", label: "Packages" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink-900/95 backdrop-blur shadow-lg shadow-black/20" : "bg-ink-900/40 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="w-9 h-9 rounded-full bg-foam-500 flex items-center justify-center">
            <Droplets size={18} className="text-ink-900" />
          </span>
          <span className="font-display text-2xl font-bold text-white tracking-wide">
            {BUSINESS.name}
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-6">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-[13px] font-medium tracking-wide transition-colors relative py-1 whitespace-nowrap ${
                  isActive ? "text-foam-400" : "text-ink-100 hover:text-foam-400"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-foam-500 rounded-full" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/booking"
          className="hidden xl:inline-flex items-center gap-2 bg-foam-500 hover:bg-foam-400 text-ink-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shrink-0"
        >
          Book Now
        </Link>

        <button
          className="xl:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden bg-ink-900 border-t border-ink-700 px-5 pb-6 pt-2 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 border-b border-ink-800 text-sm font-medium ${
                    isActive ? "text-foam-400" : "text-ink-100 hover:text-foam-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-4 text-center bg-foam-500 text-ink-900 font-semibold py-3 rounded-full"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
