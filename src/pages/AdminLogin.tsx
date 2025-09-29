import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [key, setKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const expected = import.meta.env.VITE_ADMIN_KEY;
    if (!expected) {
      setError("Admin key not configured");
      return;
    }
    if (key !== expected) {
      setError("Invalid admin key");
      return;
    }
    sessionStorage.setItem("admin_ok", "1");
    navigate("/admin", { replace: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-blue-100">Admin Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit} className="space-y-4">
            <div>
              <Label htmlFor="key" className="text-blue-200">
                Admin Key
              </Label>
              <Input
                id="key"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300"
                placeholder="Enter admin key"
              />
            </div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <Button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              Continue
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
