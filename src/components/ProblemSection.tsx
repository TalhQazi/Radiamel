import { AlertTriangle, Smartphone, Atom, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const radiationSources = [
    {
      icon: AlertTriangle,
      title: "Medical Imaging",
      description:
        "100,000+ cancer cases linked to CT scans yearly in the U.S.",
      color: "text-red-400",
      image: "/brand/ct-scan.png",
    },
    {
      icon: Smartphone,
      title: "EMF & 5G",
      description: "Everyday EMF from devices, 5G, and cell towers",
      color: "text-blue-400",
      image: "/brand/5g-tower.png",
    },
    {
      icon: Atom,
      title: "Nuclear Energy & Defense",
      description: "Nuclear energy & defense industries exposure",
      color: "text-cyan-400",
      image: "/brand/nuclear-plant.png",
    },
    {
      icon: Rocket,
      title: "Space Travel",
      description: "Space travel and cosmic radiation",
      color: "text-purple-400",
      image: "/brand/space-radiation.png",
    },
  ];

  return (
    <section
      id="problem-section"
      className="py-24 bg-gradient-to-b from-blue-900/20 to-blue-800/10"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-red-400">Problem</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Radiation exposure is increasing from multiple sources, yet current
            "solutions" are outdated, toxic, or impractical.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {radiationSources.map((source, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-900/50 transition-all duration-300 h-80"
            >
              <CardContent className="p-8 text-center h-full flex flex-col justify-between">
                <div className="relative mb-6">
                  <img
                    src={source.image}
                    alt={source.title}
                    className="w-40 h-40 mx-auto object-contain"
                  />
                  <source.icon
                    className={`w-8 h-8 absolute -top-2 -right-2 ${source.color}`}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-100">
                    {source.title}
                  </h3>
                  <p className="text-blue-200 text-base leading-relaxed">
                    {source.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-red-400">
            Current "Solutions" are Failing
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-blue-100 mb-2">Lead Shields</h4>
              <p className="text-blue-200 text-sm">
                Heavy, impractical, and only block external radiation
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-2">
                Chemical Drugs
              </h4>
              <p className="text-blue-200 text-sm">
                Toxic side effects, limited effectiveness
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-100 mb-2">
                Outdated Methods
              </h4>
              <p className="text-blue-200 text-sm">
                No cellular-level protection or DNA repair
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
