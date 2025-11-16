export interface InsuranceProduct {
  id: string;
  name: string;
  category: "health" | "auto" | "home" | "life";
  price: number;
  coverage: string;
  deductible: string;
  features: string[];
  popular?: boolean;
}

export const insuranceProducts: InsuranceProduct[] = [
  {
    id: "1",
    name: "Essential Health Plus",
    category: "health",
    price: 299,
    coverage: "Up to $500,000",
    deductible: "$1,000",
    features: [
      "Hospitalization coverage",
      "Outpatient services",
      "Prescription drugs",
      "Emergency care",
      "Preventive care"
    ],
    popular: true
  },
  {
    id: "2",
    name: "Premium Health Shield",
    category: "health",
    price: 499,
    coverage: "Up to $1,000,000",
    deductible: "$500",
    features: [
      "Comprehensive hospitalization",
      "Specialist consultations",
      "Dental & vision care",
      "Mental health support",
      "International coverage"
    ]
  },
  {
    id: "3",
    name: "Auto Complete",
    category: "auto",
    price: 149,
    coverage: "Up to $250,000",
    deductible: "$500",
    features: [
      "Collision coverage",
      "Liability protection",
      "Theft protection",
      "24/7 roadside assistance",
      "Rental car coverage"
    ]
  },
  {
    id: "4",
    name: "Auto Premium Plus",
    category: "auto",
    price: 249,
    coverage: "Up to $500,000",
    deductible: "$250",
    features: [
      "Comprehensive collision",
      "Full liability coverage",
      "Zero depreciation",
      "Personal accident cover",
      "Engine protection"
    ],
    popular: true
  },
  {
    id: "5",
    name: "Home Guardian",
    category: "home",
    price: 199,
    coverage: "Up to $300,000",
    deductible: "$1,000",
    features: [
      "Structure protection",
      "Personal property",
      "Liability coverage",
      "Natural disaster coverage",
      "Temporary living expenses"
    ]
  },
  {
    id: "6",
    name: "Home Premium Protect",
    category: "home",
    price: 349,
    coverage: "Up to $750,000",
    deductible: "$500",
    features: [
      "Full replacement cost",
      "High-value items coverage",
      "Flood & earthquake protection",
      "Identity theft protection",
      "Home office coverage"
    ]
  },
  {
    id: "7",
    name: "Life Secure Basic",
    category: "life",
    price: 99,
    coverage: "Up to $250,000",
    deductible: "N/A",
    features: [
      "Term life coverage",
      "Accidental death benefit",
      "Critical illness coverage",
      "Flexible payment terms",
      "Beneficiary protection"
    ]
  },
  {
    id: "8",
    name: "Life Ultimate Protection",
    category: "life",
    price: 199,
    coverage: "Up to $1,000,000",
    deductible: "N/A",
    features: [
      "Whole life coverage",
      "Cash value accumulation",
      "Disability waiver",
      "Living benefits",
      "Estate planning support"
    ],
    popular: true
  }
];
