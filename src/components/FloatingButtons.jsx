import { useEffect, useState } from "react";
import { MessageCircle, ArrowUp } from "lucide-react";
import { BUSINESS } from "../data/data";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3">
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="w-11 h-11 rounded-full bg-ink-900 text-white flex items-center justify-center shadow-lg hover:bg-ink-700 transition-colors"
        >
          <ArrowUp size={18} />
        </button>
      )}
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-foam-500 text-ink-900 flex items-center justify-center shadow-xl hover:bg-foam-400 transition-colors animate-pulse"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}
