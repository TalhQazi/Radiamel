import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BreakthroughSection from "@/components/BreakthroughSection";
import ScientificSection from "@/components/ScientificSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import MarketSection from "@/components/MarketSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import InvestorSection from "@/components/InvestorSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FDADisclaimer from "@/components/FDADisclaimer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <BreakthroughSection />
      <ScientificSection />
      <ApplicationsSection />
      <MarketSection />
      <CompetitiveSection />
      <InvestorSection />
      <AboutSection />
      <ContactSection />
      <div className="py-12 bg-gradient-to-b from-blue-800/10 to-blue-900/20">
        <div className="container mx-auto px-6">
          <FDADisclaimer />
        </div>
      </div>
    </div>
  );
};

export default Index;
