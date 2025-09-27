import { AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FDADisclaimer = () => {
  return (
    <Card className="bg-yellow-900/20 backdrop-blur-sm border border-yellow-500/30 max-w-4xl mx-auto">
      <CardContent className="p-6">
        <div className="flex items-start">
          <AlertTriangle className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold mb-3 text-yellow-400">
              <strong>Important Notice:</strong> Radiamel® products are
            </h3>
            <div className="text-yellow-200 text-sm leading-relaxed space-y-2">
              <p>
                <strong>Not FDA Approved:</strong> These products are not approved by the FDA for the diagnosis, cure, mitigation, treatment, or prevention of any disease.
              </p>
              <p>
                <strong>Research Stage:</strong> Radiamel® is currently in research and development. All information presented is based on preliminary research and should not be considered medical advice.
              </p>
              <p>
                <strong>Consult Healthcare Providers:</strong> Always consult with qualified healthcare professionals before making any health-related decisions.
              </p>
              <p>
                <strong>No Medical Claims:</strong> This website and its content are for informational purposes only and do not constitute medical advice or recommendations.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FDADisclaimer;
