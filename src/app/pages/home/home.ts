import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { FeatureStrip } from './sections/feature-strip/feature-strip';
import { CategoryTiles } from './sections/category-tiles/category-tiles';
import { ProductPreview } from './sections/product-preview/product-preview';
import { GiftingBanner } from './sections/gifting-banner/gifting-banner';
import { BrandStory } from './sections/brand-story/brand-story';
import { Testimonials } from './sections/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    FeatureStrip,
    CategoryTiles,
    ProductPreview,
    GiftingBanner,
    BrandStory,
    Testimonials
  ],
  templateUrl: './home.html'
})
export class Home {}
