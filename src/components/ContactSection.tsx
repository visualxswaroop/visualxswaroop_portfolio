import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  Instagram,
  Copy,
  Check,
  ArrowUpRight,
  Mail,
} from "lucide-react";

// Custom SVG Icons for Behance, Telegram, Discord
const BehanceIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.311.619zm-5.101-2.025c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981zm-15.541 2.025c-.442 1.297-2.029 3-5.101 3C-1.09 20 -3.58 18.271-3.58 14.325c0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H2.085c.13 1.2.421 1.86 1.46 1.86.49 0 .802-.16.985-.45l3.554.644zM2.085 15c0-.909-.295-1.75-1.49-1.75-.999 0-1.491.75-1.491 1.75h2.981z"/>
  </svg>
);

const TelegramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.99 1.27-5.63 3.73-.53.37-1.02.55-1.45.54-.48-.01-1.4-.27-2.09-.49-.84-.27-1.51-.42-1.45-.88.03-.24.37-.49 1.02-.75 4-1.74 6.68-2.88 8.03-3.44 3.83-1.58 4.63-1.85 5.15-1.86.11 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.14-.04.29z"/>
  </svg>
);

const DiscordIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const contactsList = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/visualxswaroop/",
    label: "Instagram",
    handle: "@visualxswaroop",
  },
  {
    icon: BehanceIcon,
    href: "https://www.behance.net/swaroopranjan1",
    label: "Behance",
    handle: "swaroopranjan1",
  },
  {
    icon: TelegramIcon,
    href: "https://t.me/VisualxSwaroop",
    label: "Telegram",
    handle: "@VisualxSwaroop",
  },
  {
    icon: DiscordIcon,
    href: "#",
    label: "Discord",
    handle: "@not_inertial",
    copyValue: "not_inertial",
  },
  {
    icon: Mail,
    href: "mailto:swarooprout9848@gmail.com",
    label: "Email",
    handle: "swarooprout9848@gmail.com",
    copyValue: "swarooprout9848@gmail.com",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const email = "swarooprout9848@gmail.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setSending(false);
    if (res.ok) {
      alert("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", project: "", message: "" });
    } else {
      alert("Failed to send. Please email me directly at " + email);
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref} style={{ backgroundColor: "#0A0A0A" }}>

      {/* Red glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232,25,44,0.06), transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="num-badge mb-4"
        >
          03 — Contact
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left — CTA & Contact Channels */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-bebas text-5xl sm:text-6xl md:text-7xl leading-none tracking-tight text-white mb-6"
            >
              Let's<br />
              <span style={{ color: "#E8192C" }}>Work</span><br />
              Together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-white/30 text-sm leading-relaxed mb-8"
            >
              Have a project in mind? Reach out via direct form, email, or chat with me on Telegram, Discord, or Instagram.
            </motion.p>

            {/* Email quick-copy bar */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              onClick={() => copyToClipboard(email, "email-btn")}
              className="liquid-glass flex items-center justify-between px-5 py-4 rounded-xl mb-8 w-full group hover:border-red-DEFAULT/30 transition-all text-left"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-DEFAULT/10 text-red-DEFAULT">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] tracking-widest uppercase text-white/30 block">Direct Email</span>
                  <span className="text-sm text-white/70 group-hover:text-white transition-colors">{email}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/40">
                {copiedText === "email-btn" ? (
                  <>
                    <Check size={14} className="text-green-400" />
                    <span className="text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} className="group-hover:text-white transition-colors" />
                    <span>Copy</span>
                  </>
                )}
              </div>
            </motion.button>

            {/* Socials & Handles */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {contactsList.map((s) => {
                const IconComponent = s.icon;
                const isCopyable = !!s.copyValue;

                if (isCopyable) {
                  return (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => copyToClipboard(s.copyValue!, s.label)}
                      className="liquid-glass p-3 rounded-xl flex items-center gap-3 group text-left transition-all duration-300 hover:border-white/20"
                    >
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 group-hover:text-white bg-white/[0.03] transition-colors flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-white/30 tracking-widest uppercase">{s.label}</p>
                        <p className="text-xs text-white/60 group-hover:text-white transition-colors truncate">{s.handle}</p>
                      </div>
                      {copiedText === s.label ? (
                        <Check size={13} className="text-green-400 flex-shrink-0" />
                      ) : (
                        <Copy size={13} className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0" />
                      )}
                    </button>
                  );
                }

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liquid-glass p-3 rounded-xl flex items-center gap-3 group transition-all duration-300 hover:border-white/20"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 group-hover:text-white bg-white/[0.03] transition-colors flex-shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-white/30 tracking-widest uppercase">{s.label}</p>
                      <p className="text-xs text-white/60 group-hover:text-white transition-colors truncate">{s.handle}</p>
                    </div>
                    <ArrowUpRight size={13} className="text-white/20 group-hover:text-red-DEFAULT transition-colors flex-shrink-0" />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="liquid-glass p-7 sm:p-10 space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(232,25,44,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(232,25,44,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(232,25,44,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(232,25,44,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Project Type</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none transition-all duration-300 appearance-none"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: formData.project ? "#fff" : "rgba(255,255,255,0.2)",
                  }}
                >
                  <option value="" style={{ background: "#111" }}>Select a service…</option>
                  <option value="real-estate-reel" style={{ background: "#111", color: "#fff" }}>Real Estate Reel Edits</option>
                  <option value="video-editing" style={{ background: "#111", color: "#fff" }}>Video Editing / Reels</option>
                  <option value="thumbnail" style={{ background: "#111", color: "#fff" }}>YouTube Thumbnail</option>
                  <option value="social-media" style={{ background: "#111", color: "#fff" }}>Social Media Posts</option>
                  <option value="birthday-wishes" style={{ background: "#111", color: "#fff" }}>Birthday Wishes / Posters</option>
                  <option value="other" style={{ background: "#111", color: "#fff" }}>Other Collaboration</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] tracking-widest uppercase text-white/30 mb-2 block">Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, timeline, or links…"
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 focus:outline-none resize-none transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(232,25,44,0.4)"; e.target.style.boxShadow = "0 0 20px rgba(232,25,44,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.08)"; e.target.style.boxShadow = "none"; }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="btn-red w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm tracking-widest uppercase"
              >
                {sending ? "Sending…" : "Send Message"}
                {!sending && <Send size={14} />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
