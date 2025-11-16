import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import { InsuranceProduct, insuranceProducts } from "@/data/insuranceProducts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Check, X } from "lucide-react";

const Compare = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [product1, setProduct1] = useState<InsuranceProduct | null>(null);
  const [product2, setProduct2] = useState<InsuranceProduct | null>(null);

  useEffect(() => {
    const stateProducts = location.state?.products as InsuranceProduct[] | undefined;
    if (stateProducts && stateProducts.length === 2) {
      setProduct1(stateProducts[0]);
      setProduct2(stateProducts[1]);
    }
  }, [location]);

  const ComparisonRow = ({ label, value1, value2 }: { label: string; value1: string; value2: string }) => (
    <div className="grid grid-cols-3 gap-4 py-3 border-b">
      <div className="font-medium text-muted-foreground">{label}</div>
      <div className="font-semibold">{value1}</div>
      <div className="font-semibold">{value2}</div>
    </div>
  );

  const FeatureComparison = ({ features1, features2 }: { features1: string[]; features2: string[] }) => {
    const allFeatures = Array.from(new Set([...features1, ...features2]));
    
    return (
      <div className="space-y-2">
        {allFeatures.map((feature, index) => (
          <div key={index} className="grid grid-cols-3 gap-4 py-2">
            <div className="text-sm text-muted-foreground">{feature}</div>
            <div className="flex justify-center">
              {features1.includes(feature) ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-400" />
              )}
            </div>
            <div className="flex justify-center">
              {features2.includes(feature) ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <X className="h-5 w-5 text-red-400" />
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Compare Insurance Plans</h1>
          <p className="text-muted-foreground">Select and compare insurance products side by side</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="font-semibold text-lg flex items-center">Select Products:</div>
          <Select
            value={product1?.id || ""}
            onValueChange={(value) => setProduct1(insuranceProducts.find(p => p.id === value) || null)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select first product" />
            </SelectTrigger>
            <SelectContent>
              {insuranceProducts.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={product2?.id || ""}
            onValueChange={(value) => setProduct2(insuranceProducts.find(p => p.id === value) || null)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select second product" />
            </SelectTrigger>
            <SelectContent>
              {insuranceProducts.map((product) => (
                <SelectItem key={product.id} value={product.id}>
                  {product.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {product1 && product2 ? (
          <Card className="shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <CardTitle>Product Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 pb-4 border-b-2">
                  <div className="font-bold text-lg">Features</div>
                  <div className="font-bold text-lg text-center">{product1.name}</div>
                  <div className="font-bold text-lg text-center">{product2.name}</div>
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Basic Information</h3>
                  <ComparisonRow 
                    label="Category" 
                    value1={product1.category} 
                    value2={product2.category} 
                  />
                  <ComparisonRow 
                    label="Monthly Price" 
                    value1={`$${product1.price}`} 
                    value2={`$${product2.price}`} 
                  />
                  <ComparisonRow 
                    label="Coverage" 
                    value1={product1.coverage} 
                    value2={product2.coverage} 
                  />
                  <ComparisonRow 
                    label="Deductible" 
                    value1={product1.deductible} 
                    value2={product2.deductible} 
                  />
                </div>

                <div>
                  <h3 className="font-semibold mb-4">Features Comparison</h3>
                  <FeatureComparison features1={product1.features} features2={product2.features} />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Button variant="default" size="lg">
                    Get Quote for {product1.name}
                  </Button>
                  <Button variant="default" size="lg">
                    Get Quote for {product2.name}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-[var(--shadow-elegant)] p-12">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">Please select two products to compare</p>
              <Button onClick={() => navigate("/dashboard")}>Browse Products</Button>
            </div>
          </Card>
        )}
      </div>

      <Chatbot />
    </div>
  );
};

export default Compare;
