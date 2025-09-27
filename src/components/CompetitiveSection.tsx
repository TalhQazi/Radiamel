import { Shield, Award, Zap, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CompetitiveSection = () => {
  const advantages = [
    {
      icon: Shield,
      title: "First-to-Market Natural Solution",
      description:
        "The world's first natural, melanin-based radiation protection system",
    },
    {
      icon: Award,
      title: "Patent-Pending IP Protection",
      description:
        "Broad patent applications covering composition, use, and delivery methods",
    },
    {
      icon: Zap,
      title: "Scalable & Shelf-Stable",
      description:
        "Easy to manufacture, store, and distribute across multiple markets",
    },
    {
      icon: Target,
      title: "Dual Revenue Strategy",
      description:
        "High-margin consumer products + high-value government/medical contracts",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-800/10 to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="mb-4 border-cyan-400/30 text-cyan-400"
          >
            Competitive Advantage
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-cyan-400">Competitive</span> Advantage
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            First-to-market natural solution with broad IP protection and
            multiple revenue streams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-900/50 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <advantage.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-lg text-blue-100">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 text-center text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <img
              src="/brand/reardon-cancer-protocol.png"
              alt="Reardon Cancer Protocol"
              className="w-16 h-16 object-contain mr-4"
            />
            <h3 className="text-2xl font-semibold text-blue-300">
              Why Radiamel® Wins
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">
                vs. Chemical Alternatives
              </h4>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>✅ Natural, non-toxic</li>
                <li>✅ No side effects</li>
                <li>✅ Cellular-level protection</li>
                <li>✅ DNA repair support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-4">
                vs. Lead Shields
              </h4>
              <ul className="text-blue-200 text-sm space-y-2">
                <li>✅ Lightweight and portable</li>
                <li>✅ Internal protection</li>
                <li>✅ Scalable for any size</li>
                <li>✅ Cost-effective</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveSection;
