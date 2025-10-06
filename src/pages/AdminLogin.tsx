import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Lock } from "lucide-react";
import { login, me } from "@/lib/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    me().then((u) => {
      if (u?.role === "admin") {
        navigate("/admin", { replace: true });
      } else {
        setIsCheckingSession(false);
      }
    });
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    (async () => {
      const res = await login(formData.email.trim(), formData.password);
      setIsLoading(false);
      if (res.ok === false) {
        setError(res.error || "Login failed");
        return;
      }
      const u = await me();
      if (u?.role !== "admin") {
        setError("You do not have admin access.");
        return;
      }
      navigate("/admin", { replace: true });
    })();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (isCheckingSession) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
        <div className="text-blue-200 flex items-center">
          <div className="w-5 h-5 mr-3 border-2 border-blue-400/40 border-t-cyan-400 rounded-full animate-spin" />
          Checking session...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-cyan-400 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-cyan-400">Radiamel®</h1>
              <p className="text-blue-300 text-sm">Admin Portal</p>
            </div>
          </div>
          <CardTitle className="text-xl text-blue-100">Administrator Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-blue-200">Email Address</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300" placeholder="admin@example.com" />
            </div>
            <div>
              <Label htmlFor="password" className="text-blue-200">Password</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={handleInputChange} required className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300" placeholder="Enter your password" />
            </div>
            {error && (
              <div className="text-red-300 text-sm" role="alert">{error}</div>
            )}
            <Button type="submit" disabled={isLoading} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
              {isLoading ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Access Admin Dashboard
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
