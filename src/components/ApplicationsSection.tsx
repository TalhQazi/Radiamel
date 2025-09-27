import { Heart, Shield, Rocket, Stethoscope } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ApplicationsSection = () => {
  const applications = [
    {
      icon: Heart,
      title: "Medical",
      description:
        "Radiation therapy patients, chemo-adjunct support, and medical imaging protection",
      users: ["Cancer Patients", "Medical Staff", "Radiology Technicians"],
      color: "text-red-400",
      image: "/brand/medical-icon.png",
    },
    {
      icon: Shield,
      title: "Defense",
      description:
        "Military personnel, nuclear security workers, and defense contractors",
      users: ["Soldiers", "Nuclear Workers", "Defense Personnel"],
      color: "text-blue-400",
      image: "/brand/defense-icon.png",
    },
    {
      icon: Rocket,
      title: "Space",
      description:
        "Astronaut radiation shielding and space mission protection",
      users: ["Astronauts", "Space Mission Crew", "Space Station Personnel"],
      color: "text-purple-400",
      image: "/brand/space-radiation.png",
    },
    {
      icon: Stethoscope,
      title: "Consumer",
      description:
        "EMF & environmental radiation protection supplements for everyday use",
      users: ["General Public", "EMF-Sensitive Individuals", "Health-Conscious Consumers"],
      color: "text-cyan-400",
      image: "/brand/dietary-supplement.png",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-blue-800/10 to-blue-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Applications</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            From medical facilities to space missions, Radiamel® provides
            comprehensive radiation protection across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {applications.map((app, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 hover:bg-blue-900/50 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="relative mb-4">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 mx-auto object-contain"
                  />
                  <app.icon
                    className={`w-6 h-6 absolute -top-1 -right-1 ${app.color} bg-blue-900/80 rounded-full p-1`}
                  />
                </div>
                <CardTitle className="text-lg text-blue-100">
                  {app.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 mb-4 leading-relaxed">
                  {app.description}
                </p>
                <div>
                  <h4 className="font-medium text-blue-100 mb-2">Key Users:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.users.map((user, userIndex) => (
                      <span
                        key={userIndex}
                        className="text-xs bg-blue-800/50 text-blue-200 px-2 py-1 rounded"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">
              Ready to Deploy Across Industries
            </h3>
            <p className="text-blue-200 leading-relaxed">
              Our scalable formulation and multiple delivery methods make
              Radiamel® adaptable to any radiation protection need, from
              individual supplements to large-scale institutional deployments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
