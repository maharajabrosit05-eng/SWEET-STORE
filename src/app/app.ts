import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { AnnouncementBar } from './shared/components/announcement-bar/announcement-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, AnnouncementBar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
