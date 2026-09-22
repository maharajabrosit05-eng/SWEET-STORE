import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';

interface ShopMenuGroup {
  title: string;
  links: { label: string; slug: string }[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  private readonly productService = inject(ProductService);
  readonly cartCount = this.productService.cartCount;

  isMenuOpen = false;
  isShopDropdownOpen = false;

  readonly shopMenu: ShopMenuGroup[] = [
    {
      title: 'Sweets',
      links: [
        { label: 'Ghee Sweets', slug: 'sweets' },
        { label: 'Milk Sweets', slug: 'sweets' },
        { label: 'Traditional Sweets', slug: 'sweets' }
      ]
    },
    {
      title: 'Savouries',
      links: [
        { label: 'Murukku', slug: 'savouries' },
        { label: 'Mixtures', slug: 'savouries' }
      ]
    }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleShopDropdown(state: boolean): void {
    this.isShopDropdownOpen = state;
  }
}
