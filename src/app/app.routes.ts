import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
    title: 'Sweet Store | Timeless Indian Sweets'
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop),
    title: 'Shop All | Sweet Store'
  },
  {
    path: 'shop/:category',
    loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop),
    title: 'Shop | Sweet Store'
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart').then((m) => m.Cart),
    title: 'Your Cart | Sweet Store'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then((m) => m.About),
    title: 'Our Story | Sweet Store'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
    title: 'Contact | Sweet Store'
  },
  { path: '**', redirectTo: '' }
];
