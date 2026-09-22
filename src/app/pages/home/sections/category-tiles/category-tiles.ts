import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface CategoryTile {
  label: string;
  image: string;
  slug: string;
  tag?: string;
}

@Component({
  selector: 'app-category-tiles',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-tiles.html',
  styleUrl: './category-tiles.scss'
})
export class CategoryTiles {
  readonly categories: CategoryTile[] = [
    { label: 'Traditional Sweets', image: 'assets/images/cat-1.jpg', slug: 'sweets' },
    { label: 'Savouries', image: 'assets/images/cat-2.jpg', slug: 'savouries' },
    { label: 'Premium Boxes', image: 'assets/images/cat-3.jpg', slug: 'gifting', tag: 'PREMIUM' },
    { label: 'Gift Hampers', image: 'assets/images/cat-4.jpg', slug: 'gifting' },
    { label: 'Podi & Pickles', image: 'assets/images/cat-5.jpg', slug: 'savouries' },
    { label: 'New Launches', image: 'assets/images/cat-6.jpg', slug: 'sweets', tag: 'NEW IN' }
  ];
}
