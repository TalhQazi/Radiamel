import { Shield, Zap, Dna, Pill, Syringe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BreakthroughSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Absorbs harmful gamma radiation",
      description: "Neutralizes harmful radiation at the cellular level",
    },
    {
      icon: Zap,
      title: "Converts it into harmless energy",
      description: "Transforms radiation into usable cellular energy",
    },
    {
      icon: Dna,
      title: "Protects DNA from damage",
      description: "Shields genetic material from radiation-induced mutations",
    },
  ];

  const deliveryMethods = [
    {
      icon: Syringe,
      title: "Medical-Grade",
      description: "IV infusion, capsules for cancer patients",
      color: "text-red-400",
    },
    {
      icon: Pill,
      title: "Consumer-Grade",
      description: "Daily supplement capsules, sprays, patches",
      color: "text-blue-400",
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
            The Breakthrough
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Breakthrough – Radiamel®
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Derived from melanin-rich, radiotrophic fungi that thrive in extreme
            radiation environments.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <Card className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/brand/Radiotrophic-fungi.png"
                  alt="Radiotrophic Fungi"
                  className="w-20 h-20 rounded-lg object-contain mr-6"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    How Radiamel® Works
                  </h3>
                  <p className="text-blue-300 text-sm">Derived from radiotrophic fungi</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed mb-6">
                Radiamel® is extracted from melanin-rich, radiotrophic fungi that
                naturally thrive in high-radiation environments. These remarkable
                organisms have evolved over millions of years to not just survive,
                but actually benefit from radiation exposure.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <benefit.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                    <h4 className="font-semibold text-blue-100 mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-blue-200 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {deliveryMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30"
              >
                <CardHeader className="text-center">
                  <method.icon
                    className={`w-12 h-12 mx-auto mb-4 ${method.color}`}
                  />
                  <CardTitle className="text-lg text-blue-100">
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center text-sm leading-relaxed">
                    {method.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakthroughSection;
