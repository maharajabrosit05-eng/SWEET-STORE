import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../core/services/product.service';
import { CartLine } from '../../core/models/product.model';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  private readonly productService = inject(ProductService);

  get lines(): CartLine[] {
    return this.productService.getCartLines();
  }

  get subtotal(): number {
    return this.lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);
  }

  get mrpTotal(): number {
    return this.lines.reduce((sum, l) => sum + (l.product.mrp ?? l.product.price) * l.qty, 0);
  }

  get savings(): number {
    return this.mrpTotal - this.subtotal;
  }

  readonly freeShippingThreshold = 1500;

  get amountToFreeShipping(): number {
    return Math.max(this.freeShippingThreshold - this.subtotal, 0);
  }

  get freeShippingProgress(): number {
    return Math.min((this.subtotal / this.freeShippingThreshold) * 100, 100);
  }

  increment(productId: number, currentQty: number): void {
    this.productService.updateQty(productId, currentQty + 1);
  }

  decrement(productId: number, currentQty: number): void {
    this.productService.updateQty(productId, currentQty - 1);
  }

  remove(productId: number): void {
    this.productService.removeFromCart(productId);
  }
}
