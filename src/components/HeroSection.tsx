import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    const problemSection = document.getElementById("problem-section");
    if (problemSection) {
      problemSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleInvestorRelations = () => {
    navigate("/investor-login");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-900/20 to-blue-800/10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/brand/hero-shield-bg.jpg"
          alt="Radiation Protection Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-800/10" />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-10 md:pt-14 text-center">
        {/* Logo alone at top, centered */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg bg-white/10 flex items-center justify-center">
            <img
              src="/brand/logo2-radiamel.png"
              alt="Radiamel Logo"
              className="w-full h-full object-cover rounded-full ml-5"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Radiation is <span className="text-blue-300">Silent.</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Radiamel® is the Answer.
          </span>
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-cyan-200 mb-4 max-w-4xl mx-auto">
          Radiation Remediation, Reinvented
        </p>

        {/* Subtext */}
        <p className="text-lg text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          The world's first natural, melanin-based defense against harmful
          radiation. Every year, millions are exposed to harmful radiation —
          from CT scans, cell towers, nuclear energy, and even space travel.
          Until now, there's been no safe, natural way to protect the body at
          the cellular level.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleLearnMore}
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg transition-all duration-300 hover:shadow-cyan-500/25"
          >
            Learn More
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            onClick={handleInvestorRelations}
            variant="outline"
            size="lg"
            className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/70"
          >
            Investor Relations
          </Button>
        </div>

        {/* Key Message */}
        <div className="mt-16 p-6 bg-cyan-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-lg max-w-4xl mx-auto">
          <p className="text-cyan-100 leading-relaxed">
            <strong className="text-cyan-300">
              Radiamel® changes everything.
            </strong>{" "}
            Derived from rare melanin-rich fungi that thrive inside nuclear
            reactors, Radiamel® transforms harmful gamma radiation into harmless
            energy — shielding DNA and supporting cellular health. For cancer
            patients, military personnel, astronauts, and everyday people
            surrounded by EMF and radiation, Radiamel® offers the world's first
            scalable, natural radiation defense system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
