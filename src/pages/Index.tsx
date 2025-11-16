import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, CheckCircle, Users, TrendingUp } from "lucide-react";
import logo from "@/assets/yalla-logo.jpeg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <img src={logo} alt="Yalla Insurance" className="h-20 mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Trusted Insurance Partner
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Compare, choose, and manage all your insurance needs in one place
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                variant="accent"
                onClick={() => navigate("/auth")}
                className="text-lg px-8"
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Yalla?</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            We make insurance simple, accessible, and transparent
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
              <p className="text-muted-foreground">
                Wide range of insurance products tailored to your needs
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Comparison</h3>
              <p className="text-muted-foreground">
                Compare plans side-by-side to find the perfect fit
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                AI-powered chatbot and expert assistance anytime
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                Competitive rates and transparent pricing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Protected?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust Yalla with their insurance needs
          </p>
          <Button 
            size="lg" 
            onClick={() => navigate("/auth")}
            className="text-lg px-8"
          >
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Yalla Insurance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
