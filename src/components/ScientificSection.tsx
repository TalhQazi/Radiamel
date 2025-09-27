import { Microscope, Building2, Globe, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScientificSection = () => {
  const researchPartners = [
    {
      icon: Building2,
      name: "NASA",
      contribution:
        "Space radiation research and cosmic ray protection studies",
    },
    {
      icon: Microscope,
      name: "Albert Einstein College of Medicine",
      contribution:
        "Melanin-based radiation protection research and clinical studies",
    },
    {
      icon: Globe,
      name: "Ukrainian Microbiologists",
      contribution:
        "Radiotrophic fungi research from Chernobyl exclusion zone",
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
            Scientific Foundation
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built on <span className="text-cyan-400">Solid Science</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Research from leading institutions confirms the potential of
            melanin-based radiation protection.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {researchPartners.map((partner, index) => (
              <Card
                key={index}
                className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30"
              >
                <CardHeader className="text-center">
                  <partner.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <CardTitle className="text-lg text-blue-100">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-center text-sm leading-relaxed">
                    {partner.contribution}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-cyan-900/20 backdrop-blur-sm border border-cyan-500/30">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <img
                  src="/brand/radiation-remediation.png"
                  alt="Radiation Remediation"
                  className="w-16 h-16 object-contain mr-4"
                />
                <h3 className="text-2xl font-semibold text-cyan-400">
                  Research Foundation
                </h3>
              </div>
              <div className="space-y-4 text-blue-200">
                <p>
                  <strong className="text-cyan-300">Early lab studies</strong> show
                  melanin can reduce oxidative stress and protect healthy tissue
                  from ionizing damage.
                </p>
                <p>
                  <strong className="text-cyan-300">NASA research</strong> confirms
                  that melanin-rich organisms can survive and thrive in high-radiation
                  environments, including space.
                </p>
                <p>
                  <strong className="text-cyan-300">Ukrainian studies</strong> from
                  the Chernobyl exclusion zone demonstrate that radiotrophic fungi
                  can actually use radiation as an energy source.
                </p>
                <p className="text-center mt-6">
                  <strong className="text-cyan-400">
                    Radiamel® builds on this foundation with proprietary extraction
                    and formulation techniques.
                  </strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScientificSection;
