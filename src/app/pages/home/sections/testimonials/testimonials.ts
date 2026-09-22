import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  rating: number;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  readonly reviews: Testimonial[] = [
    {
      quote: 'It melts the moment you have it — the taste is amazing and the price feels fair for the quality.',
      name: 'Hari M.',
      rating: 5
    },
    {
      quote: 'I have tried 8 varieties of snacks, all fresh and tasty. I have recommended this to all my friends.',
      name: 'Uttara Y.',
      rating: 5
    },
    {
      quote: 'Thrilled with the quality of everything I have ordered. The tomato murukku is the best I have had.',
      name: 'Valli K.',
      rating: 5
    }
  ];

  starsArray(count: number): number[] {
    return Array.from({ length: count });
  }
}
