# Luma

An AI-curated furniture discovery platform that helps you find pieces that fit your space, style, and life.

## Overview

Luma is a React-based frontend that presents an editorial furniture shopping experience. It features a before/after room comparison slider, curated product recommendations, an AI design assistant prompt, and an about section — all built with a warm, minimal aesthetic using Cormorant Garamond and DM Sans.

## Tech Stack

- **React 19** — UI library
- **Vite 8** — build tool and dev server
- **Tailwind CSS 4** — utility-first styling
- **Lucide React** — icon set
- **ESLint** — linting with react-hooks and react-refresh plugins

## Project Structure

```
luma/
├── public/
│   └── images/
│       ├── hero-room.jpg
│       ├── before-room.jpg
│       ├── after-room.jpg
│       └── products/
│           ├── chair.jpg
│           ├── lamp.jpg
│           ├── sofa.jpg
│           └── table.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Responsive nav with mobile menu
│   │   ├── Hero.jsx                # Landing hero with headline and CTA
│   │   ├── BeforeAter.jsx          # Before/after image comparison slider
│   │   ├── CuratedRecommendations.jsx  # AI-style product recommendations
│   │   ├── ShopTheLook.jsx         # Product grid
│   │   ├── AskLuma.jsx             # AI design assistant input
│   │   ├── AboutLuma.jsx           # Brand principles section
│   │   ├── FinalCTA.jsx            # Closing call to action
│   │   └── Footer.jsx              # Site footer
│   ├── data/
│   │   └── product.js              # Product data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css                   # Global styles, CSS variables, Google Fonts
├── index.html
├── vite.config.js
└── package.json
```

## Page Sections

| Section | Component | Description |
|---|---|---|
| Navigation | `Navbar` | Logo, nav links, mobile hamburger menu |
| Hero | `Hero` | Editorial headline with hero room image |
| Luma Vision | `BeforeAter` | Drag-to-compare before/after room slider |
| Recommendations | `CuratedRecommendations` | Featured product cards with style filter |
| Shop the Look | `ShopTheLook` | Uniform product grid from `product.js` |
| Ask Luma | `AskLuma` | AI prompt input with suggestion chips |
| About | `AboutLuma` | Brand philosophy and principles |
| CTA | `FinalCTA` | Closing call to action |
| Footer | `Footer` | Links and copyright |

## Design Tokens

Defined as CSS variables in `src/index.css`:

```css
--luma-cream:  #f4f1ea  /* page background */
--luma-dark:   #241f1b  /* primary text and borders */
--luma-muted:  #77716a  /* secondary text */
--luma-line:   #d8d2c8  /* dividers */
--luma-white:  #faf9f6  /* elevated surfaces */
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Notable Features

- **Before/After Slider** — pointer capture API for smooth drag on mouse and touch, keyboard accessible (arrow keys, Home, End), `role="slider"` ARIA semantics
- **Responsive Navbar** — full-screen mobile menu with smooth fade transition
- **Uniform product cards** — fixed `aspect-[4/5]` with `object-cover` ensures consistent image sizing across the grid
- **Dropdown theming** — select element and options styled to match `--luma-cream` background
