import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gifting-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gifting-banner.html',
  styleUrl: './gifting-banner.scss'
})
export class GiftingBanner {}
