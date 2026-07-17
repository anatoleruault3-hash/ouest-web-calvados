import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollingBanners from "@/components/ScrollingBanners";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { RecentWorksSection } from "@/components/RecentWorksSection";
import { ServicesSection } from "@/components/ServicesSection";
import FounderSection from "@/components/FounderSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navbar />
      <div id="contenu">
        <HeroSection />
        <ScrollingBanners />
        <AboutSection />
        <RecentWorksSection />
        <TestimonialsSection />
        <div id="services"><ServicesSection /></div>
        <FounderSection />
        <PricingSection />
        <div id="faq"><FAQSection /></div>
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
