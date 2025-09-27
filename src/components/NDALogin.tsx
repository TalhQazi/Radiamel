import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText } from "lucide-react";

const NDALogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      alert("NDA Login functionality will be implemented with proper authentication system.");
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-cyan-400 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-cyan-400">Radiamel®</h1>
              <p className="text-blue-300 text-sm">Investor Portal</p>
            </div>
          </div>
          <CardTitle className="text-xl text-blue-100">
            NDA-Protected Investor Access
          </CardTitle>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-blue-200">
                Email Address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300"
                placeholder="investor@example.com"
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-blue-200">
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-blue-800/30 border-blue-500/30 text-white placeholder:text-blue-300"
                placeholder="Enter your password"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 mr-2" />
                  Access Investor Deck
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 bg-blue-800/20 rounded-lg">
            <div className="flex items-center mb-2">
              <FileText className="w-4 h-4 text-blue-300 mr-2" />
              <span className="text-blue-300 text-sm font-medium">
                Access Requirements:
              </span>
            </div>
            <ul className="text-blue-200 text-xs space-y-1">
              <li>• Accredited investor verification</li>
              <li>• NDA execution required</li>
              <li>• Confidential information access</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NDALogin;
