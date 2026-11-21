import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { num: "10+", label: "Projects Delivered" },
  { num: "1+", label: "Years Experience" },
  { num: "5+", label: "Happy Clients" },
  { num: "∞", label: "Creative Drive" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref} style={{ backgroundColor: "#0A0A0A" }}>

      {/* Red glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(232,25,44,0.05) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="num-badge mb-4"
        >
          01 — About
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-white mb-6"
            >
              Crafting<br />
              <span style={{ color: "#E8192C" }}>Visuals</span> That<br />
              Convert.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/40 leading-relaxed mb-4 text-sm"
            >
              I'm Swaroop — a creative who lives at the intersection of raw footage and bold design.
              Whether it's a cinematic real estate reel or a scroll-stopping thumbnail, I approach
              every project with intention and precision.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/30 leading-relaxed text-sm"
            >
              Video Editing + Graphic Design. Available for freelance projects.
            </motion.p>

            {/* Tools used */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Premiere Pro", "After Effects", "Photoshop", "Canva", "DaVinci Resolve", "Illustrator"].map((tool) => (
                <span
                  key={tool}
                  className="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg text-white/40 border border-white/8"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  {tool}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="liquid-glass p-6 group cursor-default"
              >
                <p
                  className="font-bebas text-5xl mb-1 group-hover:text-red-DEFAULT transition-colors duration-300"
                  style={{ color: "#E8192C" }}
                >
                  {stat.num}
                </p>
                <p className="text-xs tracking-widest uppercase text-white/30">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 h-[1px] origin-left"
          style={{ background: "linear-gradient(90deg, #E8192C, rgba(232,25,44,0.1), transparent)" }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
