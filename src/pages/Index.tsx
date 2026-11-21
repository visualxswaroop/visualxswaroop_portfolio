import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";
import MarqueeStrip from "@/components/MarqueeStrip";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise-overlay">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
