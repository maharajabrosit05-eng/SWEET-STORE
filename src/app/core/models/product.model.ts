export type ProductCategory = 'sweets' | 'savouries' | 'gifting';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  weight: string;
  price: number;
  mrp?: number;
  image: string;
  isGheeMade?: boolean;
  discountLabel?: string;
  rating?: number;
}

export interface CartLine {
  product: Product;
  qty: number;
}
