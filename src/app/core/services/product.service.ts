import { Injectable, signal } from '@angular/core';
import { Product, ProductCategory } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly products: Product[] = [
    { id: 1, name: 'Ghee Mysore Pak', category: 'sweets', weight: '250g', price: 260, mrp: 300, image: 'assets/images/sweet-1.jpg', isGheeMade: true, discountLabel: 'PRICE DROP', rating: 4.7 },
    { id: 2, name: 'Gulkand Biscuit', category: 'sweets', weight: '200g', price: 220, mrp: 260, image: 'assets/images/sweet-2.jpg', discountLabel: 'PRICE DROP', rating: 4.5 },
    { id: 3, name: 'Balaji Laddu', category: 'sweets', weight: '250g', price: 270, mrp: 310, image: 'assets/images/sweet-3.jpg', isGheeMade: true, discountLabel: 'PRICE DROP', rating: 4.8 },
    { id: 4, name: 'Badam Rose Laddu', category: 'sweets', weight: '250g', price: 310, mrp: 350, image: 'assets/images/sweet-4.jpg', isGheeMade: true, discountLabel: 'PRICE DROP', rating: 4.9 },
    { id: 5, name: 'Dodha Burfi', category: 'sweets', weight: '250g', price: 250, mrp: 290, image: 'assets/images/sweet-5.jpg', discountLabel: 'PRICE DROP', rating: 4.4 },
    { id: 6, name: 'Dates Mysore Pak', category: 'sweets', weight: '250g', price: 280, mrp: 320, image: 'assets/images/sweet-6.jpg', isGheeMade: true, discountLabel: 'PRICE DROP', rating: 4.6 },
    { id: 7, name: 'Beetroot Mysore Pak', category: 'sweets', weight: '250g', price: 260, mrp: 300, image: 'assets/images/sweet-7.jpg', isGheeMade: true, rating: 4.5 },
    { id: 8, name: 'Mango Soan Papdi', category: 'sweets', weight: '250g', price: 250, mrp: 290, image: 'assets/images/sweet-8.jpg', rating: 4.3 },
    { id: 9, name: 'Badam Chocolate Burfi', category: 'sweets', weight: '250g', price: 300, mrp: 340, image: 'assets/images/sweet-9.jpg', discountLabel: 'PRICE DROP', rating: 4.7 },
    { id: 10, name: 'Nagpur Soan Papdi', category: 'sweets', weight: '250g', price: 240, mrp: 280, image: 'assets/images/sweet-10.jpg', rating: 4.2 },
    { id: 11, name: 'Bikaneri American Dry Fruit Burfi', category: 'sweets', weight: '250g', price: 350, mrp: 400, image: 'assets/images/sweet-11.jpg', discountLabel: '14% OFF', rating: 4.8 },

    { id: 21, name: 'Special Mixture', category: 'savouries', weight: '200g', price: 180, mrp: 210, image: 'assets/images/savoury-1.jpg', discountLabel: '6% OFF', rating: 4.6 },
    { id: 22, name: 'Arumbu Murukku', category: 'savouries', weight: '200g', price: 190, mrp: 230, image: 'assets/images/savoury-2.jpg', discountLabel: '15% OFF', rating: 4.5 },
    { id: 23, name: 'Vall Mixture', category: 'savouries', weight: '200g', price: 170, mrp: 200, image: 'assets/images/savoury-3.jpg', rating: 4.4 },
    { id: 24, name: 'Bombay Mixture', category: 'savouries', weight: '200g', price: 175, mrp: 205, image: 'assets/images/savoury-4.jpg', rating: 4.3 },
    { id: 25, name: 'Kaara Seedai', category: 'savouries', weight: '200g', price: 195, mrp: 230, image: 'assets/images/savoury-5.jpg', discountLabel: '15% OFF', rating: 4.7 },
    { id: 26, name: 'Karaikudi Kara Murukku', category: 'savouries', weight: '200g', price: 200, mrp: 240, image: 'assets/images/savoury-6.jpg', rating: 4.6 },
    { id: 27, name: 'Kashmiri Mixture', category: 'savouries', weight: '200g', price: 210, mrp: 250, image: 'assets/images/savoury-7.jpg', rating: 4.5 },
    { id: 28, name: 'Manapparai Murukku', category: 'savouries', weight: '200g', price: 205, mrp: 245, image: 'assets/images/savoury-8.jpg', rating: 4.6 }
  ];

  private readonly cartLines = signal<{ productId: number; qty: number }[]>([]);
  readonly cartCount = signal<number>(0);

  getAll(): Product[] {
    return this.products;
  }

  getByCategory(category: ProductCategory | 'all'): Product[] {
    if (category === 'all') return this.products;
    return this.products.filter((p) => p.category === category);
  }

  getFeatured(category: ProductCategory, limit = 6): Product[] {
    return this.getByCategory(category).slice(0, limit);
  }

  addToCart(productId: number): void {
    const lines = this.cartLines();
    const existing = lines.find((l) => l.productId === productId);
    if (existing) {
      existing.qty += 1;
      this.cartLines.set([...lines]);
    } else {
      this.cartLines.set([...lines, { productId, qty: 1 }]);
    }
    this.cartCount.set(this.cartLines().reduce((sum, l) => sum + l.qty, 0));
  }

  getCartLines() {
    return this.cartLines().map((l) => ({
      product: this.products.find((p) => p.id === l.productId)!,
      qty: l.qty
    }));
  }

  removeFromCart(productId: number): void {
    this.cartLines.set(this.cartLines().filter((l) => l.productId !== productId));
    this.cartCount.set(this.cartLines().reduce((sum, l) => sum + l.qty, 0));
  }

  updateQty(productId: number, qty: number): void {
    if (qty <= 0) {
      this.removeFromCart(productId);
      return;
    }
    const lines = this.cartLines();
    const line = lines.find((l) => l.productId === productId);
    if (line) {
      line.qty = qty;
      this.cartLines.set([...lines]);
    }
    this.cartCount.set(this.cartLines().reduce((sum, l) => sum + l.qty, 0));
  }
}
