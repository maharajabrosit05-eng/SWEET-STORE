# Sweet Store — Angular E-commerce Frontend

Angular 21 (standalone components) clone-style project inspired by a traditional
sweets & savouries e-commerce site. Built with Bootstrap 5, `ng-select`, and
signal-based state for the cart.

## Tech stack
- Angular 21 (standalone components, lazy-loaded routes)
- Bootstrap 5 + Bootstrap Icons
- `@ng-select/ng-select` for category/sort dropdowns
- SCSS design system (CSS variables) — cream / forest-green / gold theme
- Reactive Forms (Contact page) + Template-driven form (Newsletter)

## Getting started

```bash
npm install
npm start        # ng serve -o, runs on http://localhost:4200
```

Production build:
```bash
npm run build
```

## Project structure

```
src/app/
  core/
    models/product.model.ts       # Product, CartLine types
    services/product.service.ts   # mock data + signal-based cart
  shared/components/
    announcement-bar/             # scrolling offer strip
    header/                       # sticky nav, mega-menu, cart badge
    footer/                       # newsletter + footer links
    product-card/                 # reusable product card
  pages/
    home/
      sections/                   # hero, feature-strip, category-tiles,
                                   # product-preview, gifting-banner,
                                   # brand-story, testimonials
    shop/                         # ng-select filters + product grid
    cart/                         # cart page with qty stepper, empty state
    about/
    contact/                      # reactive form
```

## Notes
- Product images are auto-generated placeholders in `src/assets/images/`.
  Replace them with real product photography — same filenames are referenced
  in `product.service.ts` and the section components, so a drop-in swap is
  enough.
- Brand name is a generic "Sweet Store" placeholder — swap the name/logo in
  `header.html`, `footer.html`, `brand-story.ts`, and `index.html` `<title>`
  for your actual business branding.
- Cart/checkout here is a front-end only demo (no backend). Wire
  `product.service.ts` up to your real API / payment gateway for production use.
