import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { acceptNda, me } from "@/lib/auth";

const NDAAccept = () => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    me().then((u) => {
      if (!u) {
        navigate("/investor-login", { replace: true });
        return;
      }
      if (u.ndaAccepted) {
        navigate("/investor-deck", { replace: true });
        return;
      }
      setReady(true);
    });
  }, [navigate]);

  const onAccept = async () => {
    setSubmitting(true);
    const res = await acceptNda();
    setSubmitting(false);
    if (res.ok) {
      navigate("/investor-deck", { replace: true });
    }
  };

  if (!ready) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-xl bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-blue-100">NDA Agreement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-blue-200 text-sm space-y-4 mb-6">
            <p>
              By accessing Radiamel® investor materials, you agree not to disclose, copy, or share confidential information. Unauthorized distribution is prohibited.
            </p>
          </div>
          <Button disabled={submitting} onClick={onAccept} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
            {submitting ? "Submitting..." : "I Agree and Accept NDA"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NDAAccept;


