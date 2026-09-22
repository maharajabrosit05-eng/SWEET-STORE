import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { ProductService } from '../../../../core/services/product.service';
import { Product, ProductCategory } from '../../../../core/models/product.model';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCard],
  templateUrl: './product-preview.html',
  styleUrl: './product-preview.scss'
})
export class ProductPreview {
  private readonly productService = inject(ProductService);

  @Input({ required: true }) category!: ProductCategory;
  @Input({ required: true }) title!: string;
  @Input() subtitle = '';
  @Input() limit = 4;

  get products(): Product[] {
    return this.productService.getFeatured(this.category, this.limit);
  }

  handleAdd(product: Product): void {
    this.productService.addToCart(product.id);
  }
}
