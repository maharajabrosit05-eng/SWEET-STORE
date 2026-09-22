import { Component } from '@angular/core';
import { BrandStory } from '../home/sections/brand-story/brand-story';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BrandStory],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {}
