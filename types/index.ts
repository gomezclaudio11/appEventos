export interface Product {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
