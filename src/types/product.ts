export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  image: string;
  images?: string[];
  isPrime?: boolean;
  delivery?: string;
  category?: string;
  description?: string;
  technicalDetails?: Record<string, string>;
  aboutThisItem?: string[];
  amazonChoice?: boolean;
  boughtInLastMonth?: string;
  variations?: ProductVariation[];
  breadcrumbs?: string[];
}

export interface ProductVariation {
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  selected?: boolean;
}
