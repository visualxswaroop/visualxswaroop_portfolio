const tags = [
  "Video Editing",
  "Real Estate Reels",
  "Graphic Design",
  "YT Thumbnails",
  "Social Media",
  "Poster Design",
  "Cinematic",
  "Content Creation",
  "Premiere Pro",
  "After Effects",
  "Photoshop",
  "Canva",
];

const MarqueeStrip = () => {
  const doubled = [...tags, ...tags];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(90deg, #0A0A0A, transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(-90deg, #0A0A0A, transparent)" }} />

      <div className="marquee-track" style={{ gap: "2.5rem" }}>
        {doubled.map((tag, i) => (
          <span key={i} className="flex items-center gap-2 flex-shrink-0 text-xs tracking-widest uppercase text-white/20 font-medium">
            <span className="w-1 h-1 rounded-full bg-red-DEFAULT" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
