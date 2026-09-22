import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  email = '';
  subscribed = false;

  readonly year = new Date().getFullYear();

  readonly footerLinks = [
    {
      title: 'Shop',
      links: ['Sweets', 'Savouries', 'Gifting', 'Flash Sale']
    },
    {
      title: 'Company',
      links: ['Our Story', 'Blog', 'Contact Us', 'Track Order']
    },
    {
      title: 'Support',
      links: ['Shipping Policy', 'Refund Policy', 'Terms of Service', 'Privacy Policy']
    }
  ];

  onSubscribe(): void {
    if (this.email.trim().length > 3) {
      this.subscribed = true;
      this.email = '';
    }
  }
}
