import { Instagram, ArrowUp, Mail } from "lucide-react";

const BehanceIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.311.619zm-5.101-2.025c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981zm-15.541 2.025c-.442 1.297-2.029 3-5.101 3C-1.09 20 -3.58 18.271-3.58 14.325c0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H2.085c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.554.644zM2.085 15c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981z"/>
  </svg>
);

const TelegramIcon = ({ className = "w-3.5 h-3.5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.73-.53.37-1.02.55-1.45.54-.48-.01-1.4-.27-2.09-.49-.84-.27-1.51-.42-1.45-.88.03-.24.37-.49 1.02-.75 4-1.74 6.68-2.88 8.03-3.44 3.83-1.58 4.63-1.85 5.15-1.86.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.14-.04.29z"/>
  </svg>
);

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/visualxswaroop/", label: "Instagram" },
  { icon: BehanceIcon, href: "https://www.behance.net/swaroopranjan1", label: "Behance" },
  { icon: TelegramIcon, href: "https://t.me/VisualxSwaroop", label: "Telegram" },
  { icon: Mail, href: "mailto:swarooprout9848@gmail.com", label: "Email" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Red gradient divider */}
      <div className="h-[1px] w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(232,25,44,0.4), transparent)" }} />

      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div>
          <p className="text-sm font-bebas tracking-widest text-white/60">
            VISUAL<span style={{ color: "#E8192C" }}>X</span>SWAROOP
          </p>
          <p className="text-xs text-white/20 mt-1">Video Editor · Graphic Designer</p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/20 tracking-widest">
          © {new Date().getFullYear()} VisualxSwaroop. All rights reserved.
        </p>

        {/* Socials + back to top */}
        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const IconComponent = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 liquid-glass rounded-lg flex items-center justify-center text-white/30 hover:text-white transition-colors"
              >
                <IconComponent className="w-3.5 h-3.5" />
              </a>
            );
          })}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white/30 hover:text-white transition-colors"
            style={{ background: "rgba(232,25,44,0.1)", border: "1px solid rgba(232,25,44,0.2)" }}
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
