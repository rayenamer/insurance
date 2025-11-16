import { InsuranceProduct } from "@/data/insuranceProducts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Heart, Car, Home, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: InsuranceProduct;
  onCompare?: (product: InsuranceProduct) => void;
  isSelected?: boolean;
}

const categoryIcons = {
  health: Heart,
  auto: Car,
  home: Home,
  life: Shield,
};

const categoryColors = {
  health: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
  auto: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  home: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
  life: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-400",
};

const ProductCard = ({ product, onCompare, isSelected }: ProductCardProps) => {
  const Icon = categoryIcons[product.category];

  return (
    <Card 
      className={cn(
        "h-full transition-all hover:shadow-[var(--shadow-elegant)] border-2",
        isSelected ? "border-accent" : "border-transparent hover:border-accent/50"
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className={cn("p-2 rounded-lg", categoryColors[product.category])}>
            <Icon className="h-5 w-5" />
          </div>
          {product.popular && (
            <Badge variant="default" className="bg-accent">
              <TrendingUp className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription className="capitalize">{product.category} Insurance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-3xl font-bold text-primary">
            ${product.price}
            <span className="text-sm font-normal text-muted-foreground">/month</span>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Coverage:</span>
            <span className="font-semibold">{product.coverage}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Deductible:</span>
            <span className="font-semibold">{product.deductible}</span>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm font-semibold mb-2">Key Features:</p>
          <ul className="space-y-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start">
                <span className="text-accent mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 space-y-2">
          <Button className="w-full" variant="default">
            Get Quote
          </Button>
          {onCompare && (
            <Button 
              className="w-full" 
              variant={isSelected ? "accent" : "outline"}
              onClick={() => onCompare(product)}
            >
              {isSelected ? "Selected" : "Compare"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
