import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-feature-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-strip.html',
  styleUrl: './feature-strip.scss'
})
export class FeatureStrip {
  readonly features: Feature[] = [
    { icon: 'bi-egg-fried', label: 'Freshly Prepared' },
    { icon: 'bi-shield-check', label: 'Lab-tested Ingredients' },
    { icon: 'bi-truck', label: 'On-time Delivery' },
    { icon: 'bi-arrow-repeat', label: 'Easy Refunds' }
  ];
}
