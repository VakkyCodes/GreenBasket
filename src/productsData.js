export const products = [
  {
    id: 1,
    name: "Organic Red Bell Peppers",
    price: 120,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=400&fit=crop",
    description: "Fresh, crispy red bell peppers packed with vitamins",
    category: "peppers",
    inStock: true,
    nutrition: { vitamin_c: "190mg", fiber: "3g", calories: "31" }
  },
  {
    id: 2,
    name: "Fresh Spinach",
    price: 25,
    unit: "per bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
    description: "Tender baby spinach leaves, perfect for salads",
    category: "leafy-greens",
    inStock: true,
    nutrition: { iron: "2.7mg", vitamin_k: "483μg", calories: "23" }
  },
  {
    id: 3,
    name: "Organic Carrots",
    price: 40,
    unit: "per kg",
    image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=400&h=400&fit=crop",
    description: "Sweet, crunchy carrots straight from local farms",
    category: "root-vegetables",
    inStock: true,
    nutrition: { vitamin_a: "1025μg", fiber: "2.8g", calories: "41" }
  },
  {
    id: 4,
    name: "Fresh Broccoli",
    price: 80,
    unit: "per piece",
    image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400&h=400&fit=crop",
    description: "Crisp, green broccoli crowns rich in nutrients",
    category: "cruciferous",
    inStock: true,
    nutrition: { vitamin_c: "89mg", folate: "63μg", calories: "34" }
  },
  {
    id: 5,
    name: "Cherry Tomatoes",
    price: 60,
    unit: "per 250g",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=400&fit=crop",
    description: "Sweet, juicy cherry tomatoes bursting with flavor",
    category: "tomatoes",
    inStock: true,
    nutrition: { lycopene: "2.6mg", vitamin_c: "12mg", calories: "18" }
  },
  {
    id: 6,
    name: "Organic Kale",
    price: 35,
    unit: "per bunch",
    image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=400&h=400&fit=crop",
    description: "Nutrient-dense kale leaves, perfect for smoothies",
    category: "leafy-greens",
    inStock: false,
    nutrition: { vitamin_k: "684μg", vitamin_a: "885μg", calories: "33" }
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "peppers", name: "Peppers" },
  { id: "leafy-greens", name: "Leafy Greens" },
  { id: "root-vegetables", name: "Root Vegetables" },
  { id: "cruciferous", name: "Cruciferous" },
  { id: "tomatoes", name: "Tomatoes" }
];
