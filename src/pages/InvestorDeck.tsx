import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Download, LogOut, Shield, Home } from "lucide-react";
import { me, logout } from "@/lib/auth";
import jsPDF from "jspdf";

import { getApiBaseUrl } from "@/lib/api";
const VIEW_URL = `${getApiBaseUrl()}/investor/positioning`;
const ARTICLE_TEXT = `Radiamel® Positioning Statement\n\nProblem:\nThe FDA has now confirmed radioactive cesium-137 contamination in imported foods — first in Indonesian shrimp, now in cloves. Even when blocked at the border, these events expose how fragile and unprotected the global food supply chain is. One mistake, one missed shipment, and contaminated food reaches families.\n\nReality:\nRadioactive isotopes like cesium-137 mimic nutrients such as potassium, lodging themselves deep inside muscle, bone, and organ tissue. Once inside the body, they emit gamma radiation 24/7, raising cancer and organ-damage risks. There is no government system that can guarantee 100% interception of tainted imports.\n\nSolution — Radiamel®:\nRadiamel® is the first defense-grade formula engineered to bind, neutralize, and escort radioactive isotopes like cesium-137 safely out of the body.\n• Binds isotopes before they integrate into tissues.\n• Converts risk into harmless waste that the body excretes naturally.\n• Provides peace of mind in a world where contamination events are not hypothetical — they’re happening right now.\n\nWhy Now:\nThe shrimp and spice recalls are not isolated accidents; they’re signals. Globalization has tied our food supply to unstable regions and poor oversight. Radiamel® exists to close the gap between FDA recalls and true personal safety.\n\nTagline:\nRadiamel® — Your Shield Against Invisible Radiation.`;

const InvestorDeck = () => {
  const navigate = useNavigate();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    me().then((u) => {
      if (!u) {
        navigate("/investor-login", { replace: true });
        return;
      }
      if (!u.ndaAccepted) {
        navigate("/nda", { replace: true });
        return;
      }
      setReady(true);
    });
  }, [navigate]);

  const handleLogout = () => {
    logout().finally(() => {
      navigate("/investor-login", { replace: true });
    });
  };

  const handleDownloadPdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const margin = 40;
    const maxWidth = 515;
    const lines = doc.splitTextToSize(ARTICLE_TEXT, maxWidth);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(lines, margin, margin);
    doc.save("Radiamel-Positioning-Statement.pdf");
  };

  if (!ready) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
        <div className="text-blue-200 flex items-center">
          <div className="w-5 h-5 mr-3 border-2 border-blue-400/40 border-t-cyan-400 rounded-full animate-spin" />
          Loading investor deck...
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-blue-900/20 to-blue-800/10 min-h-screen">
      <div className="container mx-auto px-6 space-y-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-cyan-400 mb-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">NDA-Protected Area</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Investor Deck</h1>
          <p className="text-blue-200 max-w-2xl mx-auto">
            View or download the latest Radiamel® investor presentation. Do not
            share without written permission.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white">
            <a href={VIEW_URL} target="_blank" rel="noreferrer">
              <FileText className="w-4 h-4 mr-2" /> View in new tab
            </a>
          </Button>
          <Button
            onClick={handleDownloadPdf}
            variant="outline"
            className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10"
          >
            <Download className="w-4 h-4 mr-2" /> Download PDF
          </Button>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-red-400/40 text-red-300 hover:bg-red-400/10"
          >
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        <Card className="bg-blue-900/20 backdrop-blur-sm border border-blue-500/30">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Radiamel® Positioning Statement
              </h2>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                Problem
              </h3>
              <p className="text-blue-200">
                The FDA has now confirmed radioactive cesium-137 contamination
                in imported foods — first in Indonesian shrimp, now in cloves.
                Even when blocked at the border, these events expose how fragile
                and unprotected the global food supply chain is. One mistake,
                one missed shipment, and contaminated food reaches families.
              </p>
              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
                Reality
              </h3>
              <p className="text-blue-200">
                Radioactive isotopes like cesium-137 mimic nutrients such as
                potassium, lodging themselves deep inside muscle, bone, and
                organ tissue. Once inside the body, they emit gamma radiation
                24/7, raising cancer and organ-damage risks. There is no
                government system that can guarantee 100% interception of
                tainted imports.
              </p>
              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
                Solution — Radiamel®
              </h3>
              <p className="text-blue-200">
                Radiamel® is the first defense-grade formula engineered to bind,
                neutralize, and escort radioactive isotopes like cesium-137
                safely out of the body.
              </p>
              <ul className="list-disc pl-6 text-blue-200 space-y-1">
                <li>Binds isotopes before they integrate into tissues.</li>
                <li>
                  Converts risk into harmless waste that the body excretes
                  naturally.
                </li>
                <li>
                  Provides peace of mind in a world where contamination events
                  are not hypothetical — they’re happening right now.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
                Why Now
              </h3>
              <p className="text-blue-200">
                The shrimp and spice recalls are not isolated accidents; they’re
                signals. Globalization has tied our food supply to unstable
                regions and poor oversight. Radiamel® exists to close the gap
                between FDA recalls and true personal safety.
              </p>
              <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">
                Tagline
              </h3>
              <p className="text-blue-100 font-medium">
                Radiamel® — Your Shield Against Invisible Radiation.
              </p>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <Button
                asChild
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                <a href={VIEW_URL} target="_blank" rel="noreferrer">
                  <FileText className="w-4 h-4 mr-2" /> Open Article
                </a>
              </Button>
              <Button
                onClick={handleDownloadPdf}
                variant="outline"
                className="border-cyan-400/40 text-cyan-300 hover:bg-cyan-400/10"
              >
                <Download className="w-4 h-4 mr-2" /> Download PDF
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-blue-400/40 text-blue-300 hover:bg-blue-400/10"
              >
                <a href="/">
                  <Home className="w-4 h-4 mr-2" /> Return to Home
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InvestorDeck;
