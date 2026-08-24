import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "../data/data";
import { SectionHeading } from "./Services";

export default function Contact() {
  return (
    <section className="bg-mist py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" text="Questions before you book? Reach us any way that's convenient." />

        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <div className="space-y-4">
            <ContactRow icon={MapPin} label="Address" value={BUSINESS.address} />
            <ContactRow icon={Clock} label="Opening Hours" value={BUSINESS.hours} />
            <ContactRow icon={Phone} label="Phone" value={BUSINESS.phone} href={`tel:${BUSINESS.phone}`} />
            <ContactRow icon={Mail} label="Email" value={BUSINESS.email} href={`mailto:${BUSINESS.email}`} />

            <div className="flex flex-wrap gap-3 pt-4">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="inline-flex items-center gap-2 bg-ink-900 hover:bg-ink-700 text-white font-semibold text-sm px-5 py-3 rounded-full transition-colors"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={`https://wa.me/${BUSINESS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-foam-500 hover:bg-foam-400 text-ink-900 font-semibold text-sm px-5 py-3 rounded-full transition-colors"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 border-2 border-ink-900 text-ink-900 font-semibold text-sm px-5 py-3 rounded-full hover:bg-ink-900 hover:text-white transition-colors"
              >
                Book Your Wash <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-ink-100 h-72 lg:h-auto min-h-[280px]">
            <iframe
              title="ShineBay location"
              src={BUSINESS.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 bg-white rounded-xl p-4 border border-ink-100">
      <span className="w-10 h-10 shrink-0 rounded-lg bg-foam-100 flex items-center justify-center">
        <Icon size={17} className="text-foam-600" />
      </span>
      <div>
        <p className="text-xs text-ink-300 font-mono uppercase tracking-wide">{label}</p>
        <p className="text-ink-900 font-medium text-sm mt-0.5">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition-opacity">
      {content}
    </a>
  ) : (
    content
  );
}
