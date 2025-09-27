import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, User, MessageSquare, Send, X } from "lucide-react";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // For now, use simple mailto approach
      // Later can be upgraded to EmailJS
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open email client with pre-filled content
      window.location.href = `mailto:Nathan@radiamel.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Close form after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
      }, 2000);
      
    } catch (error) {
      console.error("Error opening email client:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-blue-900/95 backdrop-blur-sm border border-blue-500/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader className="pb-4">
          <DialogTitle className="text-2xl font-bold text-cyan-400 flex items-center">
            <MessageSquare className="mr-2 w-6 h-6" />
            Start the Conversation
          </DialogTitle>
        </DialogHeader>

        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-blue-200">
                  Nathan will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-200 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300 h-10"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-200 flex items-center">
                      <Mail className="w-4 h-4 mr-1" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300 h-10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-blue-200">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300 h-10"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-200">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                {submitStatus === "error" && (
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <p className="text-red-400 text-sm">
                      Sorry, there was an error sending your message. Please try
                      again or contact us directly at Nathan@radiamel.com
                    </p>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1 border-blue-500/30 text-blue-300 hover:bg-blue-500/10 h-10"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white h-10"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
