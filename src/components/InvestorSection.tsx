import { TrendingUp, Shield, FileText, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const InvestorSection = () => {
  const handleScheduleMeeting = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const highlights = [
    {
      icon: Shield,
      title: "Exclusive Global IP Rights",
      description:
        "Filed patent applications with broad protection across key markets",
    },
    {
      icon: TrendingUp,
      title: "Multiple Revenue Streams",
      description:
        "Consumer supplements, medical products, and high-value government contracts",
    },
    {
      icon: Users,
      title: "Acquisition Target",
      description:
        "Positioned for strategic partnerships and licensing deals with major pharma",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-900/20 to-blue-800/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-cyan-400/30 text-cyan-400"
          >
            Investor Relations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-cyan-400">Radiation Revolution</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Exclusive global IP rights filed. Multiple revenue streams.
            Positioned for acquisition/licensing deals.
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-900/50 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <highlight.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-lg text-blue-100">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 text-center text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment CTA */}
        <div className="bg-cyan-900/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Ready to Protect the Future?
          </h3>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Request access to our confidential investor deck and learn how
            Radiamel® is positioned to capture a multi-billion dollar market
            opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-cyan-500/25"
              onClick={() => (window.location.href = "/investor-login")}
            >
              <FileText className="mr-2 w-5 h-5" />
              Request Investor Deck
            </Button>
            <Button
              onClick={handleScheduleMeeting}
              variant="outline"
              size="lg"
              className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 hover:border-cyan-400/70"
            >
              Schedule Meeting
            </Button>
          </div>

          <p className="text-xs text-blue-300 mt-4">
            * Access requires NDA execution and accredited investor verification
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
