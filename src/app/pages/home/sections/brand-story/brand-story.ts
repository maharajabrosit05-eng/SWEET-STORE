import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pillar {
  icon: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-brand-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-story.html',
  styleUrl: './brand-story.scss'
})
export class BrandStory {
  readonly pillars: Pillar[] = [
    { icon: 'bi-flower1', title: 'Freshly Prepared', desc: 'Prepared daily for taste and quality.' },
    { icon: 'bi-award', title: 'Authentic Taste', desc: 'Recipes rooted across India.' },
    { icon: 'bi-cup-hot', title: 'Pure Ghee', desc: 'Made with pure ghee for rich flavour.' },
    { icon: 'bi-hand-thumbs-up', title: 'Handcrafted with Care', desc: 'Crafted by hand, every time.' },
    { icon: 'bi-shield-check', title: 'Lab-Tested Ingredients', desc: 'Ingredients tested for safety and purity.' }
  ];
}
