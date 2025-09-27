import { Mail, Handshake, Newspaper, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const contactTypes = [
    {
      icon: Mail,
      title: "Investor inquiries",
      description: "Accredited investors and institutional partners",
      email: "Nathan@radiamel.com",
      color: "text-blue-400",
    },
    {
      icon: Handshake,
      title: "Partnerships",
      description: "Healthcare, aerospace, and defense collaborations",
      email: "Nathan@radiamel.com",
      color: "text-cyan-400",
    },
    {
      icon: Newspaper,
      title: "Media",
      description: "Press inquiries and media relations",
      email: "Nathan@radiamel.com",
      color: "text-purple-400",
    },
  ];

  return (
    <section
      id="contact-section"
      className="py-24 bg-gradient-to-b from-blue-900/20 to-blue-800/10"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-blue-400">Contact</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Ready to join the radiation protection revolution? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contactTypes.map((contact, index) => (
            <Card
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm border border-blue-500/30 hover:bg-card/50 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <contact.icon
                  className={`w-12 h-12 mx-auto mb-4 ${contact.color}`}
                />
                <CardTitle className="text-lg">{contact.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  {contact.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className={`border-${contact.color.split("-")[1]}/30 text-${
                    contact.color.split("-")[1]
                  } hover:bg-${contact.color.split("-")[1]}/10`}
                >
                  {contact.email}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Info */}
        <div className="text-center">
          <Card className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                Radiamel® Headquarters
              </h3>
              <p className="text-blue-200 mb-4">
                Pioneering radiation protection from our advanced research
                facilities
              </p>
              <p className="text-sm text-blue-200">
                Address and additional contact details available to qualified
                partners and investors
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-primary/10 border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Ready to Protect the Future?
            </h3>
            <p className="text-blue-200 mb-6 leading-relaxed">
              Whether you're an investor, potential partner, or member of the
              press, we're excited to share how Radiamel® is revolutionizing
              radiation protection.
            </p>
            <Button
              onClick={() => setIsContactFormOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-blue-400-foreground shadow-glow"
            >
              Start the Conversation
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
    </section>
  );
};

export default ContactSection;
