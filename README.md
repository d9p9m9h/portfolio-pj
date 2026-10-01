# Film Maker & Editor Portfolio — UI Skeleton

A single-page portfolio UI skeleton for a graphic designer, built with React + Vite. Dark theme, gradient accents, fully responsive.

## Tech Stack

- **React 19** + **Vite** — fast dev server & build
- **Bootstrap 5** (dark mode via `data-bs-theme="dark"`) — grid & layout utilities
- **styled-components** — CSS-in-JS styling with design tokens

## Sections

| Section  | Description                                        |
| -------- | -------------------------------------------------- |
| Navbar   | Fixed blurred header with mobile menu              |
| Hero     | Full-viewport intro with gradient headline & cards |
| About    | Portrait, bio & stats                              |
| Projects | Filterable project gallery (category chips)        |
| Skills   | Animated skill bars & tool chips                   |
| Services | Service cards with icons                           |
| Contact  | Contact form (skeleton — no backend) & socials     |
| Footer   | Brand, copyright & social links                    |

## Getting Started

```bash
cd portfolio_template
npm install
npm run dev
```

Then open **http://localhost:5174/** in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Customization

- Edit `src/data/portfolio.js` to change profile info, projects, skills, services & socials.
- Design tokens (colors, surfaces, borders) live in `src/styles/GlobalStyle.js`.
