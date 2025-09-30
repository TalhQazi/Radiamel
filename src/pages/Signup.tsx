import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { register, login } from "@/lib/auth";

const Signup = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const res = await register(formData.email.trim(), formData.password, formData.name.trim());
    if (!res.ok) {
      setIsLoading(false);
      setError(res.error);
      return;
    }
    const resLogin = await login(formData.email.trim(), formData.password);
    setIsLoading(false);
    if (!resLogin.ok) {
      setError("login_failed");
      return;
    }
    window.location.href = "/investor-deck";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-blue-100">Create Investor Account</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <Label htmlFor="name" className="text-blue-200">Full Name</Label>
              <Input id="name" name="name" value={formData.name} onChange={onChange} className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email" className="text-blue-200">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={onChange} required className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300" placeholder="you@example.com" />
            </div>
            <div>
              <Label htmlFor="password" className="text-blue-200">Password</Label>
              <Input id="password" name="password" type="password" value={formData.password} onChange={onChange} required className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300" placeholder="Create a password" />
            </div>
            {error && <div className="text-red-400 text-sm">{error}</div>}
            <Button type="submit" disabled={isLoading} className="w-full bg-cyan-600 hover:bg-cyan-700 text-white">
              {isLoading ? "Creating..." : "Create Account"}
            </Button>
            <div className="text-center text-sm text-blue-300">
              Already have an account? <a className="underline" href="/investor-login">Login</a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;


