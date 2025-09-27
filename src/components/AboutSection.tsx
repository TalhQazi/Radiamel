import { User, Target, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-800/10 to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Radiamel®
            </span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Mission: To protect humanity from radiation with nature's own
            defense system.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <img
                  src="/brand/nathan.jpeg"
                  alt="Nathan Reardon"
                  className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/30 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-blue-100">
                    Nathan Reardon
                  </h3>
                  <p className="text-cyan-400">Founder & CEO</p>
                </div>
              </div>
              <p className="text-blue-200 leading-relaxed">
                Visionary entrepreneur and inventor who founded Radiamel® to bring nature's own radiation defense
                system to the world. With a deep understanding of both biotechnology and radiation science,
                Nathan leads the mission to protect humanity from the growing threat of radiation exposure.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-lg text-blue-100">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 text-sm leading-relaxed">
                  To protect humanity from radiation with nature's own defense system,
                  making radiation protection accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-lg text-blue-100">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 text-sm leading-relaxed">
                  A world where radiation exposure is no longer a threat to human health,
                  thanks to natural, effective protection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <CardTitle className="text-lg text-blue-100">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 text-sm leading-relaxed">
                  Pioneering the world's first natural radiation defense system
                  based on melanin-rich fungi research.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
