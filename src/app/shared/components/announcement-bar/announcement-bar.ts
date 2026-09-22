import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcement-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcement-bar.html',
  styleUrl: './announcement-bar.scss'
})
export class AnnouncementBar {
  readonly messages: string[] = [
    'Free delivery across India on orders above ₹1,500',
    "Apply 'WELCOME5' for additional 5% discount",
    'Pay a bit now, the rest on delivery — Partial COD now available'
  ];
}
