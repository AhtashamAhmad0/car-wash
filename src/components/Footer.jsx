import { Link } from "react-router-dom";
import { Droplets, MessageCircle } from "lucide-react";
import { BUSINESS } from "../data/data";

function FacebookIcon({ size = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M13.5 21v-8.1h2.72l.41-3.15h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.67V3.4C15.99 3.28 15.06 3.2 13.98 3.2c-2.6 0-4.38 1.59-4.38 4.5v2.05H6.87v3.15h2.73V21h3.9Z" />
    </svg>
  );
}

function InstagramIcon({ size = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/booking", label: "Book Now" },
];

const SERVICE_LINKS = [
  "Basic Car Wash",
  "Premium Car Wash",
  "Full Car Detailing",
  "Wax & Polish",
  "Ceramic Protection",
];

export default function Footer() {
  return (
    <footer className="bg-ink-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-foam-500 flex items-center justify-center">
                <Droplets size={16} className="text-ink-900" />
              </span>
              <span className="font-display text-xl font-bold text-white">{BUSINESS.name}</span>
            </div>
            <p className="text-ink-300 text-sm mt-4 leading-relaxed">
              Professional car wash and detailing services in Rawalpindi — book your bay online in
              minutes.
            </p>
            <div className="flex gap-3 mt-5">
              <SocialIcon icon={FacebookIcon} />
              <SocialIcon icon={InstagramIcon} />
              <SocialIcon icon={MessageCircle} href={`https://wa.me/${BUSINESS.whatsapp}`} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wide mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-300 hover:text-foam-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wide mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s} className="text-ink-300 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-wide mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-ink-300">
              <li>{BUSINESS.address}</li>
              <li>{BUSINESS.hours}</li>
              <li>{BUSINESS.phone}</li>
              <li>{BUSINESS.email}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-700 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ink-300 text-xs">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-ink-300 text-xs">Front-end demo project — no backend booking storage.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href = "#" }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-ink-800 hover:bg-foam-500 flex items-center justify-center text-ink-100 hover:text-ink-900 transition-colors"
    >
      <Icon size={16} />
    </a>
  );
}
