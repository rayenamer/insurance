import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Chatbot from "@/components/Chatbot";
import { insuranceProducts, InsuranceProduct } from "@/data/insuranceProducts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState<InsuranceProduct[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleCompare = (product: InsuranceProduct) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
      toast.info("Product removed from comparison");
    } else if (selectedProducts.length >= 2) {
      toast.error("You can only compare 2 products at a time");
    } else {
      setSelectedProducts([...selectedProducts, product]);
      toast.success("Product added to comparison");
    }
  };

  const filteredProducts = activeCategory === "all" 
    ? insuranceProducts 
    : insuranceProducts.filter(p => p.category === activeCategory);

  const handleCompareClick = () => {
    if (selectedProducts.length === 2) {
      navigate("/compare", { state: { products: selectedProducts } });
    } else {
      toast.error("Please select 2 products to compare");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Insurance Products</h1>
          <p className="text-muted-foreground">Browse and compare our comprehensive insurance offerings</p>
        </div>

        {selectedProducts.length > 0 && (
          <div className="mb-6 p-4 bg-accent/10 border-2 border-accent rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium">
              {selectedProducts.length} product{selectedProducts.length > 1 ? "s" : ""} selected for comparison
            </span>
            <button
              onClick={handleCompareClick}
              className="text-accent hover:text-accent/80 font-semibold text-sm"
            >
              Compare Now →
            </button>
          </div>
        )}

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveCategory}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="health">Health</TabsTrigger>
            <TabsTrigger value="auto">Auto</TabsTrigger>
            <TabsTrigger value="home">Home</TabsTrigger>
            <TabsTrigger value="life">Life</TabsTrigger>
          </TabsList>

          <TabsContent value={activeCategory} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onCompare={handleCompare}
                  isSelected={selectedProducts.some(p => p.id === product.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Chatbot />
    </div>
  );
};

export default Dashboard;
