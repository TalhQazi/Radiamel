import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/investor-login", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/20 to-blue-800/10 flex items-center justify-center p-6">
      <Card className="w-full max-w-md bg-blue-900/30 backdrop-blur-sm border border-blue-500/30">
        <CardHeader className="text-center">
          <CardTitle className="text-xl text-blue-100">Admin Access</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-blue-200 text-sm">
            Admins, please log in via the standard login. Your account role will grant access to the admin dashboard.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
