import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input({ required: true }) product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  get discountPercent(): number | null {
    if (!this.product.mrp || this.product.mrp <= this.product.price) return null;
    return Math.round(((this.product.mrp - this.product.price) / this.product.mrp) * 100);
  }

  onAdd(): void {
    this.addToCart.emit(this.product);
  }
}
