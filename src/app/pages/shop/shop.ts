import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { ProductCard } from '../../shared/components/product-card/product-card';
import { ProductService } from '../../core/services/product.service';
import { Product, ProductCategory } from '../../core/models/product.model';

type SortOption = 'best-selling' | 'price-low' | 'price-high' | 'rating';

interface CategoryOption {
  label: string;
  value: ProductCategory | 'all';
}

interface SortOptionItem {
  label: string;
  value: SortOption;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, FormsModule, NgSelectModule, ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.scss'
})
export class Shop implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);

  selectedCategory: ProductCategory | 'all' = 'all';
  selectedSort: SortOption = 'best-selling';

  readonly categoryOptions: CategoryOption[] = [
    { label: 'All Products', value: 'all' },
    { label: 'Sweets', value: 'sweets' },
    { label: 'Savouries', value: 'savouries' },
    { label: 'Gifting', value: 'gifting' }
  ];

  readonly sortOptions: SortOptionItem[] = [
    { label: 'Best Selling', value: 'best-selling' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Top Rated', value: 'rating' }
  ];

  ngOnInit(): void {
    const paramCategory = this.route.snapshot.paramMap.get('category') as ProductCategory | null;
    if (paramCategory) {
      this.selectedCategory = paramCategory;
    }
  }

  get products(): Product[] {
    const list = [...this.productService.getByCategory(this.selectedCategory)];

    switch (this.selectedSort) {
      case 'price-low':
        return list.sort((a, b) => a.price - b.price);
      case 'price-high':
        return list.sort((a, b) => b.price - a.price);
      case 'rating':
        return list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      default:
        return list;
    }
  }

  handleAdd(product: Product): void {
    this.productService.addToCart(product.id);
  }
}
