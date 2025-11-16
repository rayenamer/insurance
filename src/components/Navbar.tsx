import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/yalla-logo.jpeg";
import { LayoutDashboard, GitCompare, LogOut } from "lucide-react";
import { toast } from "sonner";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img 
              src={logo} 
              alt="Yalla Insurance" 
              className="h-10 cursor-pointer" 
              onClick={() => navigate("/dashboard")}
            />
            <div className="hidden md:flex space-x-1">
              <Button
                variant="ghost"
                className="gap-2"
                onClick={() => navigate("/dashboard")}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                className="gap-2"
                onClick={() => navigate("/compare")}
              >
                <GitCompare className="h-4 w-4" />
                Compare
              </Button>
            </div>
          </div>
          <Button variant="outline" className="gap-2" onClick={handleLogout}>
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
