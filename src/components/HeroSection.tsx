import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Instagram, Linkedin } from "lucide-react";
import profile from "@/assets/profile.png";

// Authentic software app badges for the orbital ring around the avatar
const toolIcons = [
  {
    label: "Adobe Photoshop",
    glow: "rgba(49, 168, 255, 0.4)",
    icon: (
      <svg viewBox="0 0 38 38" className="w-full h-full" fill="none">
        <rect width="38" height="38" rx="9" fill="#001E36" />
        <rect x="0.75" y="0.75" width="36.5" height="36.5" rx="8.25" stroke="#31A8FF" strokeWidth="1.5" />
        <text
          x="19"
          y="25.5"
          fill="#31A8FF"
          fontSize="17"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5px"
        >
          Ps
        </text>
      </svg>
    ),
  },
  {
    label: "Adobe Premiere Pro",
    glow: "rgba(153, 153, 255, 0.4)",
    icon: (
      <svg viewBox="0 0 38 38" className="w-full h-full" fill="none">
        <rect width="38" height="38" rx="9" fill="#00005B" />
        <rect x="0.75" y="0.75" width="36.5" height="36.5" rx="8.25" stroke="#9999FF" strokeWidth="1.5" />
        <text
          x="19"
          y="25.5"
          fill="#9999FF"
          fontSize="17"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5px"
        >
          Pr
        </text>
      </svg>
    ),
  },
  {
    label: "Adobe After Effects",
    glow: "rgba(153, 153, 255, 0.4)",
    icon: (
      <svg viewBox="0 0 38 38" className="w-full h-full" fill="none">
        <rect width="38" height="38" rx="9" fill="#00005B" />
        <rect x="0.75" y="0.75" width="36.5" height="36.5" rx="8.25" stroke="#9999FF" strokeWidth="1.5" />
        <text
          x="19"
          y="25.5"
          fill="#9999FF"
          fontSize="17"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5px"
        >
          Ae
        </text>
      </svg>
    ),
  },
  {
    label: "Figma",
    glow: "rgba(162, 89, 255, 0.4)",
    icon: (
      <svg viewBox="0 0 38 38" className="w-full h-full" fill="none">
        <rect width="38" height="38" rx="9" fill="#18181B" />
        <rect x="0.75" y="0.75" width="36.5" height="36.5" rx="8.25" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        <g transform="translate(10, 6.5) scale(0.75)">
          <path d="M6 0H12V12H6C2.686 12 0 9.314 0 6C0 2.686 2.686 0 6 0Z" fill="#F24E1E" />
          <path d="M12 0H18C21.314 0 24 2.686 24 6C24 9.314 21.314 12 18 12H12V0Z" fill="#FF7262" />
          <path d="M6 12H12V24H6C2.686 24 0 21.314 0 18C0 14.686 2.686 12 6 12Z" fill="#A259FF" />
          <path d="M18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24C14.686 24 12 21.314 12 18H24V12Z" fill="#1ABCFE" />
          <path d="M6 24H12V30C12 33.314 9.314 36 6 36C2.686 36 0 33.314 0 30C0 26.686 2.686 24 6 24Z" fill="#0ACF83" />
        </g>
      </svg>
    ),
  },
  {
    label: "Adobe Illustrator",
    glow: "rgba(255, 154, 0, 0.4)",
    icon: (
      <svg viewBox="0 0 38 38" className="w-full h-full" fill="none">
        <rect width="38" height="38" rx="9" fill="#261300" />
        <rect x="0.75" y="0.75" width="36.5" height="36.5" rx="8.25" stroke="#FF9A00" strokeWidth="1.5" />
        <text
          x="19"
          y="25.5"
          fill="#FF9A00"
          fontSize="17"
          fontWeight="800"
          fontFamily="system-ui, -apple-system, sans-serif"
          textAnchor="middle"
          letterSpacing="-0.5px"
        >
          Ai
        </text>
      </svg>
    ),
  },
  {
    label: "DaVinci Resolve",
    glow: "rgba(255, 75, 75, 0.4)",
    icon: (
      <svg viewBox="0 0 38 38" className="w-full h-full" fill="none">
        <rect width="38" height="38" rx="9" fill="#141416" />
        <rect x="0.75" y="0.75" width="36.5" height="36.5" rx="8.25" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" />
        <g transform="translate(19, 19) scale(0.95)">
          {/* Top petal (Red) */}
          <path
            d="M 0,-1.5 C 0,-7.5 5,-11.5 8,-8 C 10.5,-5 6.5,-1 0,-1.5 Z"
            fill="#E53935"
          />
          {/* Bottom-right petal (Blue) */}
          <path
            d="M 1.3,0.75 C 6.5,3.75 6.5,9.5 2,10.5 C -2,11.5 -3.5,6 1.3,0.75 Z"
            fill="#0091FF"
          />
          {/* Bottom-left petal (Yellow/Amber) */}
          <path
            d="M -1.3,0.75 C -6.5,3.75 -11.5,1.5 -10,-3 C -8.5,-6.5 -3,-5 -1.3,0.75 Z"
            fill="#FFB300"
          />
          <circle cx="0" cy="0" r="1.8" fill="#141416" />
        </g>
      </svg>
    ),
  },
];

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  useEffect(() => {
    const current = texts[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setPhase("waiting"), 2000);
      }
    } else if (phase === "waiting") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIndex((i) => (i + 1) % texts.length);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, index, texts]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-[2px] h-[0.9em] bg-red-DEFAULT ml-1 align-middle" style={{ animation: "blink 1s step-end infinite" }} />
    </span>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dots"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background red glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,25,44,0.08) 0%, transparent 70%)" }}
      />

      {/* Giant background text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-bebas text-[18vw] leading-none tracking-tighter"
          style={{
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
          }}
        >
          VISUALX
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl w-full pt-24 sm:pt-28">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass-red px-4 py-2 mb-4 inline-flex items-center gap-2"
          style={{ borderRadius: "100px" }}
        >
          <span className="w-2 h-2 rounded-full bg-red-DEFAULT animate-pulse" />
          <span className="text-xs tracking-widest uppercase text-white/70 font-medium">
            Available for freelance
          </span>
        </motion.div>

        {/* Avatar with orbiting tool icons — strictly bounded 280x280 container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center justify-center my-2"
          style={{ width: 280, height: 280 }}
        >
          {/* Liquid morphing glow behind avatar */}
          <div
            className="absolute opacity-50 pointer-events-none"
            style={{
              width: 220,
              height: 220,
              background: "radial-gradient(circle, rgba(232,25,44,0.25), transparent 70%)",
              animation: "liquid-morph 8s ease-in-out infinite, glow-pulse 4s ease-in-out infinite",
              filter: "blur(24px)",
            }}
          />

          {/* Outer orbital ring — 236px diameter, centered in 280px box */}
          <div
            className="absolute rounded-full border border-white/[0.07]"
            style={{
              width: 236,
              height: 236,
              animation: "spin-slow 25s linear infinite",
            }}
          >
            {toolIcons.map((tool, i) => {
              const angle = (i / toolIcons.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const r = 118; // radius
              // 118 is center of the 236px circle
              const x = 118 + r * Math.sin(rad);
              const y = 118 - r * Math.cos(rad);
              return (
                <div
                  key={tool.label}
                  className="absolute flex items-center justify-center rounded-xl"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: `translate(-50%, -50%) rotate(${-angle}deg)`,
                    width: 38,
                    height: 38,
                    boxShadow: `0 4px 20px ${tool.glow}`,
                    // counter-rotate so icon stays upright
                    animation: `spin-reverse 25s linear infinite`,
                  }}
                  title={tool.label}
                >
                  {tool.icon}
                </div>
              );
            })}
          </div>

          {/* Inner decorative ring */}
          <div
            className="absolute rounded-full border border-red-DEFAULT/20 pointer-events-none"
            style={{
              width: 196,
              height: 196,
              animation: "spin-reverse 14s linear infinite",
            }}
          />

          {/* Avatar image — 176px circular liquid glass frame */}
          <div
            className="relative rounded-full overflow-hidden z-10"
            style={{
              width: 176,
              height: 176,
              border: "2px solid rgba(255,255,255,0.12)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 0 50px rgba(232,25,44,0.25)",
            }}
          >
            <img
              src={profile}
              alt="VisualxSwaroop"
              className="w-full h-full object-cover"
            />
            {/* Apple liquid glass sheen over avatar */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%, rgba(0,0,0,0.25) 100%)",
                borderRadius: "inherit",
              }}
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-bebas text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[8vw] leading-none tracking-tighter mb-3"
          style={{ color: "#ffffff" }}
        >
          VISUALX
          <span style={{ color: "#E8192C" }}>SWAROOP</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm sm:text-base text-white/40 tracking-widest uppercase mb-2 font-medium"
        >
          <TypewriterText texts={[
            "Video Editor",
            "Graphic Designer",
            "Creative Director",
            "Content Creator",
          ]} />
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-white/30 italic mb-7 max-w-sm"
        >
          I turn raw footage into content that converts.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#works"
            className="btn-red px-8 py-3.5 rounded-xl text-sm tracking-widest uppercase"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="btn-outline-red liquid-glass px-8 py-3.5 rounded-xl text-sm tracking-widest uppercase"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="flex items-center gap-3 sm:gap-4 mt-7 mb-4"
        >
          <a
            href="https://www.instagram.com/visualxswaroop/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://www.behance.net/swaroopranjan1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
            className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.311.619zm-5.101-2.025c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981zm-15.541 2.025c-.442 1.297-2.029 3-5.101 3C-1.09 20 -3.58 18.271-3.58 14.325c0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H2.085c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.554.644zM2.085 15c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981z"/>
            </svg>
          </a>
          <a
            href="https://t.me/VisualxSwaroop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.73-.53.37-1.02.55-1.45.54-.48-.01-1.4-.27-2.09-.49-.84-.27-1.51-.42-1.45-.88.03-.24.37-.49 1.02-.75 4-1.74 6.68-2.88 8.03-3.44 3.83-1.58 4.63-1.85 5.15-1.86.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.14-.04.29z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/swaroop-ranjan-rout-2ba361245/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 liquid-glass rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/20">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
