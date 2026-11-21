import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, MouseEvent, useEffect } from "react";
import { Play, ArrowRight, X, Pause, Instagram, Mail, ExternalLink } from "lucide-react";

// Real estate video works
import realtor1 from "@/assets/works/Realtor Raw File_1.mp4";

// Graphic design works
import andreasp from "@/assets/works/andreasp0101DC1.png";
import porsche from "@/assets/works/PORSCHE poster1.png";
import thumb10 from "@/assets/works/thumbnail10.png";
import thumb13 from "@/assets/works/thumbnail13.png";
import thumb14 from "@/assets/works/thumbnail14.png";
import thumb24 from "@/assets/works/thumbnail24.png";
import thumb29 from "@/assets/works/thumbnail29.png";
import untitled from "@/assets/works/Untitled-1.png";

type WorkItem = {
  id: number;
  title: string;
  subcategory: string;
  thumb: string;
  isVideo?: boolean;
  videoSrc?: string;
  tags: string[];
};

const graphicWorks: WorkItem[] = [
  { id: 1, title: "Andreas Poster Design", subcategory: "Social Media", thumb: andreasp, tags: ["Photoshop", "Social Media"] },
  { id: 2, title: "Porsche Editorial Poster", subcategory: "Poster Design", thumb: porsche, tags: ["Photoshop", "Editorial"] },
  { id: 3, title: "YouTube Thumbnail", subcategory: "YT Thumbnails", thumb: thumb10, tags: ["Photoshop", "Thumbnail"] },
  { id: 4, title: "YouTube Thumbnail", subcategory: "YT Thumbnails", thumb: thumb13, tags: ["Canva", "Thumbnail"] },
  { id: 5, title: "YouTube Thumbnail", subcategory: "YT Thumbnails", thumb: thumb14, tags: ["Photoshop", "Thumbnail"] },
  { id: 6, title: "Social Media Design", subcategory: "Social Media", thumb: thumb24, tags: ["Canva", "Social Media"] },
  { id: 7, title: "Creative Poster", subcategory: "Poster Design", thumb: thumb29, tags: ["Photoshop", "Poster"] },
  { id: 8, title: "Design Project", subcategory: "Graphic Design", thumb: untitled, tags: ["Photoshop"] },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────
const Lightbox = ({
  work,
  onClose,
}: {
  work: WorkItem | null;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (!work) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [work, onClose]);

  return (
    <AnimatePresence>
      {work && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(24px)", background: "rgba(0,0,0,0.88)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden"
            style={{
              background: "rgba(14,14,14,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 40px 120px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close btn */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <X size={16} />
            </button>

            {/* Image */}
            <div className="flex-1 bg-black flex items-center justify-center min-h-[300px] lg:min-h-[500px] overflow-hidden">
              <img
                src={work.thumb}
                alt={work.title}
                className="max-w-full max-h-[70vh] object-contain"
                style={{ display: "block" }}
              />
            </div>

            {/* Info panel */}
            <div className="w-full lg:w-72 flex-shrink-0 p-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.06]">
              <div>
                <span
                  className="text-[10px] tracking-widest uppercase mb-3 block"
                  style={{ color: "#E8192C" }}
                >
                  {work.subcategory}
                </span>
                <h3 className="font-bebas text-3xl text-white leading-tight mb-4">{work.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-lg text-white/40"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-white/25 leading-relaxed">
                  Crafted with precision for social media &amp; content. Swipe through more work on Instagram or explore the full portfolio on Behance.
                </p>
              </div>

              {/* Contact / Social links */}
              <div className="mt-8 flex flex-col gap-3">
                <p className="text-[10px] tracking-widest uppercase text-white/20 mb-1">Get in touch</p>

                <a
                  href="https://www.instagram.com/visualxswaroop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <Instagram size={14} className="text-white/40 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs text-white/35 group-hover:text-white/70 transition-colors truncate">@visualxswaroop</span>
                  <ExternalLink size={10} className="ml-auto text-white/15 group-hover:text-red-DEFAULT transition-colors flex-shrink-0" style={{ color: undefined }} />
                </a>

                <a
                  href="https://www.behance.net/swaroopranjan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {/* Behance B icon */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors">
                      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.311.619zm-5.101-2.025c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981zm-15.541 2.025c-.442 1.297-2.029 3-5.101 3C-1.09 20 -3.58 18.271-3.58 14.325c0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H2.085c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.554.644zM2.085 15c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-white/35 group-hover:text-white/70 transition-colors truncate">Behance Portfolio</span>
                  <ExternalLink size={10} className="ml-auto text-white/15 flex-shrink-0 group-hover:text-white/40 transition-colors" />
                </a>

                <a
                  href="https://t.me/VisualxSwaroop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white/40 group-hover:text-white transition-colors">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.73-.53.37-1.02.55-1.45.54-.48-.01-1.4-.27-2.09-.49-.84-.27-1.51-.42-1.45-.88.03-.24.37-.49 1.02-.75 4-1.74 6.68-2.88 8.03-3.44 3.83-1.58 4.63-1.85 5.15-1.86.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.14-.04.29z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-white/35 group-hover:text-white/70 transition-colors truncate">@VisualxSwaroop</span>
                  <ExternalLink size={10} className="ml-auto text-white/15 flex-shrink-0 group-hover:text-white/40 transition-colors" />
                </a>

                <a
                  href="mailto:swarooprout9848@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: "rgba(232,25,44,0.08)", border: "1px solid rgba(232,25,44,0.2)" }}
                  >
                    <Mail size={14} style={{ color: "#E8192C" }} />
                  </div>
                  <span className="text-xs text-white/35 group-hover:text-white/70 transition-colors truncate">swarooprout9848@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ── Reel Card (9:16 ratio) ───────────────────────────────────────────────────
const ReelCard = ({ inView }: { inView: boolean }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    if (!playing) {
      videoRef.current?.play();
      setPlaying(true);
    } else {
      videoRef.current?.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative group"
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* 9:16 aspect ratio */}
      <div style={{ paddingBottom: "177.78%" }} className="relative">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src={realtor1}
            className="w-full h-full object-cover"
            loop
            playsInline
            preload="metadata"
            onClick={toggle}
            style={{ cursor: "pointer", display: "block" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

          {/* Play / Pause overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
            onClick={toggle}
            style={{ cursor: "pointer" }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(232,25,44,0.9)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 40px rgba(232,25,44,0.6)",
              }}
            >
              {playing
                ? <Pause size={18} fill="white" className="text-white" />
                : <Play size={18} fill="white" className="text-white ml-0.5" />
              }
            </div>
          </div>

          {/* Top badge */}
          <div className="absolute top-3 left-3 num-badge text-[9px]">01</div>

          {/* Bottom info */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <span className="num-badge text-[9px] block mb-1">Real Estate Reels</span>
            <h3 className="font-bebas text-xl text-white leading-tight">Cinematic Reel</h3>
            <div className="flex gap-1.5 mt-2">
              {["Premiere Pro", "Cinematic"].map((t) => (
                <span key={t} className="text-[8px] px-2 py-0.5 rounded text-white/30" style={{ background: "rgba(255,255,255,0.06)" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ── Coming Soon Reel Card ────────────────────────────────────────────────────
const ComingSoonReel = ({ label, num, delay, inView }: { label: string; num: string; delay: number; inView: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.7, delay }}
    className="relative"
    style={{
      borderRadius: "20px",
      overflow: "hidden",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.05)",
    }}
  >
    {/* 9:16 aspect ratio */}
    <div style={{ paddingBottom: "177.78%" }} className="relative">
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
        <div className="num-badge text-[9px] self-start absolute top-3 left-3">{num}</div>

        {/* Animated ring */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center"
          style={{
            border: "1px solid rgba(232,25,44,0.2)",
            background: "rgba(232,25,44,0.05)",
          }}
        >
          <div
            className="w-10 h-10 rounded-full border border-dashed"
            style={{
              borderColor: "rgba(232,25,44,0.3)",
              animation: "spin-slow 8s linear infinite",
            }}
          />
        </div>

        <div className="text-center">
          <span
            className="text-[9px] tracking-widest uppercase px-3 py-1 rounded-full block mb-2"
            style={{ background: "rgba(232,25,44,0.08)", color: "#E8192C", border: "1px solid rgba(232,25,44,0.15)" }}
          >
            Coming Soon
          </span>
          <p className="text-[10px] tracking-widest uppercase text-white/20">{label}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

// ── Tilt Card for Graphic Works ──────────────────────────────────────────────
function TiltCard({
  work, i, inView, num, onClick,
}: {
  work: WorkItem; i: number; inView: boolean; num: string; onClick: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouse = (e: MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className="cursor-pointer relative group"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Num badge */}
      <div className="absolute top-3 left-4 z-20 num-badge">{num}</div>

      {/* Image */}
      <div className="aspect-[4/3] relative overflow-hidden bg-zinc-950">
        <img
          src={work.thumb}
          alt={work.title}
          className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(135deg, rgba(232,25,44,0.08), transparent)" }}
        />

        {/* "Click to view" hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div
            className="px-4 py-2 rounded-full text-[10px] tracking-widest uppercase text-white font-medium"
            style={{ background: "rgba(232,25,44,0.85)", backdropFilter: "blur(10px)", boxShadow: "0 0 20px rgba(232,25,44,0.4)" }}
          >
            View
          </div>
        </div>

        {/* Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <div>
            <span className="num-badge text-[9px] block mb-1">{work.subcategory}</span>
            <h3 className="text-sm font-semibold text-white tracking-tight font-display">{work.title}</h3>
            <div className="flex flex-wrap gap-1 mt-1.5">
              {work.tags.map((tag) => (
                <span key={tag} className="text-[9px] px-2 py-0.5 rounded text-white/30" style={{ background: "rgba(255,255,255,0.06)" }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────
const PortfolioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxWork, setLightboxWork] = useState<WorkItem | null>(null);

  return (
    <>
      <Lightbox work={lightboxWork} onClose={() => setLightboxWork(null)} />

      <section id="works" className="section-padding relative" ref={ref} style={{ backgroundColor: "#0A0A0A" }}>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                className="num-badge mb-3"
              >
                02 — Selected Works
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-white"
              >
                What I've<br />
                <span style={{ color: "#E8192C" }}>Built</span>
              </motion.h2>
            </div>
            <motion.a
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              href="https://www.instagram.com/visualxswaroop/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-xs tracking-widest uppercase text-white/30 hover:text-white/70 transition-colors"
            >
              View All <ArrowRight size={12} />
            </motion.a>
          </div>

          {/* ── Video Editing — 3 reel columns ── */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <span
                className="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: "rgba(232,25,44,0.1)", color: "#E8192C", border: "1px solid rgba(232,25,44,0.2)" }}
              >
                Video Editing
              </span>
              <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(90deg, rgba(232,25,44,0.3), transparent)" }} />
            </motion.div>

            {/* 3-column reel grid (9:16 each) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-sm sm:max-w-3xl lg:max-w-4xl mx-auto">
              <ReelCard inView={inView} />
              <ComingSoonReel label="Brand Reel" num="02" delay={0.1} inView={inView} />
              <ComingSoonReel label="Event Edit" num="03" delay={0.2} inView={inView} />
            </div>
          </div>

          {/* ── Graphic Design ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <span
                className="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                Graphic Design
              </span>
              <div className="flex-1 h-[1px]" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.1), transparent)" }} />
              <span className="text-[10px] tracking-widest text-white/20 hidden sm:block">Click any to view</span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {graphicWorks.map((work, i) => (
                <TiltCard
                  key={work.id}
                  work={work}
                  i={i}
                  inView={inView}
                  num={String(i + 1).padStart(2, "0")}
                  onClick={() => setLightboxWork(work)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
