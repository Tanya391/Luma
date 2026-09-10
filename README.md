# Luma — Premium AI Furniture Discovery

Luma is a concept for an AI-powered furniture discovery platform that helps people find pieces that fit **their space, their style, and their life**.
Instead of making users browse an endless catalogue of isolated product images, Luma starts with the user's room and uses that context to create a more personalized furniture discovery experience.

The homepage was designed around one goal:

**Make the value of Luma understandable within the first few seconds, while making the product feel premium, believable, and worth exploring.**

---

## 🔗 Links

* **Live Demo:** https://luma-furnitures.netlify.app/
* **GitHub:** https://github.com/Tanya391

---

## ✨ What I Built

This project focuses specifically on the **Premium Home Page** track of the assessment.

The page includes:

* A strong hero section with a clear value proposition
* A primary **"Design my space"** CTA
* A functional Before/After product demonstration
* A curated "Shop the Look" product section
* Responsive product cards
* Subtle hover and interaction states
* Full dark-mode support
* Mobile-first horizontal product browsing
* A hidden Konami Code easter egg
* Responsive behavior tested from **390px mobile to 1440px desktop**
* No fabricated testimonials
* No fake customer counts
* No fake company logos
* No unsupported performance claims

The goal was not to create the largest possible landing page, but to make a relatively focused experience feel **intentional and production-ready**.

---

# 🎯 The Product

## The Problem

Premium furniture shopping often starts with a catalogue rather than the user's actual space.

A product can look great in isolation but still be difficult to evaluate in context:

* Will it work with the room's existing colors?
* Is the scale appropriate?
* Does it complement the architecture?
* Does the material work with the existing furniture?
* Does the overall combination actually feel cohesive?

This creates a gap between **finding something attractive** and **knowing whether it belongs in your home**.

## The Luma Approach

Luma reverses that process.

Instead of beginning with:

> "Which furniture should I browse?"

the experience begins with:

> "What works in my space?"

A user can provide an image of their room and describe their preferences. Luma's intended AI-powered experience then uses that context to generate a curated interior direction and recommend furniture that fits the space and aesthetic.

The product concept moves furniture discovery from:

**Catalogue → Search → Compare → Hope it works**

toward:

**Space → Understand → Curate → Visualize**

---

# 🖥️ Homepage Experience

## 1. Hero

The hero communicates the central product idea immediately:

**Furniture should fit your space, not the other way around.**

The primary CTA, **"Design my space"**, takes the user toward the core Luma experience rather than a generic catalogue.

The hero intentionally avoids unnecessary statistics, fabricated social proof, or multiple competing CTAs.

---

## 2. Product Demonstration

The page demonstrates the product instead of only describing it.

A custom-built **Before/After slider** lets the user interactively compare the original room with the redesigned concept.

This was important because the assessment specifically asks for a section that **shows the product rather than simply claiming what it does**.

The interaction supports both:

* Mouse dragging
* Touch dragging

---

## 3. Shop the Look

The product section presents furniture as part of a larger interior direction rather than isolated catalogue items.

On desktop, products form a structured editorial grid.

On mobile, the section becomes horizontally swipeable with scroll snapping, providing a more natural interaction for a narrow viewport.

---

## 4. Dark Mode

The homepage includes a complete dark-mode experience.

Rather than simply changing the background color, the design adjusts:

* Background surfaces
* Text hierarchy
* Borders
* Cards
* Controls
* Image presentation
* Interactive states

Product imagery was also tuned so that it remains visually appropriate against darker surfaces.

---

## 🧩 Technical Implementation

### Before/After Slider

The Before/After comparison was implemented without a third-party slider library.

The implementation uses:

* CSS `clip-path`
* Pointer Events
* Pointer capture
* A percentage-based slider position

This allows the image boundary to move without changing the underlying image dimensions or causing layout distortion.

The same interaction works across mouse and touch input.

---

### Responsive Product Gallery

The "Shop the Look" section uses a responsive layout that changes behavior based on viewport width.

On mobile:

* Products become horizontally scrollable
* Scroll snapping is enabled
* Native scrollbars are visually hidden
* The page itself remains horizontally constrained

This allows the gallery to behave more like a mobile product experience without introducing horizontal page overflow.

---

### Dynamic Image Focal Points

Product photography does not always have the subject positioned in the center.

For product cards with fixed aspect ratios, Tailwind's arbitrary object-position utilities are used to control image focal points where necessary.

For example:

```text
object-[center_65%]
```

This allows portrait photography to be framed appropriately inside landscape cards instead of relying on a generic centered crop.

---

### Konami Code Easter Egg

The page contains an optional hidden interaction using the Konami Code.

When triggered, the interface performs a custom 360-degree flat spin.

Because the page can be scrolled when the easter egg is activated, the animation calculates the current viewport position and adjusts the transform origin before performing the animation.

This prevents the entire page from appearing to swing unexpectedly from an unrelated origin.

The easter egg is intentionally non-essential: users who never discover it still receive the complete product experience.

---

# 📱 Responsive Design

The homepage was designed and tested around the assessment's required range:

| Viewport | Focus                        |
| -------- | ---------------------------- |
| 390px    | Mobile layout                |
| 768px    | Tablet/intermediate behavior |
| 1024px   | Desktop transition           |
| 1440px   | Full desktop layout          |

Specific attention was given to:

* No horizontal body scrolling
* Mobile typography
* CTA sizing
* Image cropping
* Product-card behavior
* Navigation spacing
* Touch interactions
* Dark-mode presentation

The implementation uses responsive CSS rather than maintaining separate mobile and desktop pages.

---

# 🛠️ Tech Stack

| Technology       | Purpose                                 |
| ---------------- | --------------------------------------- |
| React 19         | UI and component architecture           |
| Vite 8           | Development server and production build |
| Tailwind CSS 4   | Responsive styling and design system    |
| Lucide React     | Interface icons                         |
| JavaScript / JSX | Interaction logic                       |

The stack was intentionally kept lightweight because the assignment evaluates the quality of the shipped homepage rather than backend complexity.

No backend or database was required for the homepage assessment.

---

# 📂 Project Structure

```text
luma/
├── public/
│   └── assets/
│
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── BeforeAfter/
│   │   ├── ShopTheLook/
│   │   └── ...
│   │
│   ├── assets/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

> The exact component structure may vary depending on the final repository organization.

---

# 🎨 Design Principles

## 1. Product before decoration

The homepage should communicate what Luma does before asking the user to appreciate its visual style.

## 2. Editorial rather than marketplace-heavy

Furniture is presented as part of a cohesive interior rather than as an endless grid of unrelated products.

## 3. Restrained motion

Motion is used to communicate interaction and provide feedback rather than to animate every element on the screen.

## 4. Visual hierarchy over information density

The page intentionally leaves breathing room around important content instead of attempting to explain the entire product on the homepage.

## 5. Honest product communication

The assessment explicitly prohibits fabricated social proof, so none was added.

There are no invented:

* Testimonials
* User counts
* Ratings
* Customer logos
* Revenue figures
* Partnerships

The product is presented as a concept without pretending that fictional evidence is real.

---

# 🤖 Use of AI

AI tools were used during development for:

* Exploring design and layout approaches
* Implementation assistance
* Debugging
* Reviewing potential responsive issues
* Exploring alternative interaction implementations

AI-generated suggestions were treated as implementation assistance rather than automatically accepted as final decisions.

The implementation was manually reviewed and adjusted, particularly around:

* Responsive behavior
* Spacing
* Visual hierarchy
* Interaction behavior
* Image cropping
* Dark mode
* Horizontal overflow
* Before/After slider behavior

The final code and design decisions were reviewed against the assessment requirements.

---

# 🚀 Running Locally

### 1. Clone the repository

```bash
git clone <GITHUB_REPO_URL>
cd luma
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

---

# ✅ Assessment Checklist

### Part 2 Requirements

* [x] Premium home page
* [x] Clear hero value proposition
* [x] Strong CTA
* [x] Product demonstration
* [x] Meaningful interaction
* [x] Responsive at 390px
* [x] Responsive at 1440px
* [x] No horizontal page scrolling
* [x] Full dark-mode support
* [x] No fabricated testimonials
* [x] No fake user counts
* [x] No fake logos
* [x] Deployed production build

### Optional Bonus

* [x] Hidden Konami Code easter egg

---

# 📌 Scope

This repository represents the **homepage/product experience** for the assessment.

The AI furniture recommendation system described in the product concept is the direction Luma would take as a complete product. The assessment implementation focuses on communicating that experience through a polished, responsive homepage rather than building the complete AI/backend infrastructure.

---

## Final Note

Luma was intentionally designed around a simple product idea:

> **Start with the space. Find furniture that belongs there.**

The homepage is designed to make that idea understandable quickly, demonstrate it visually, and give the user a clear reason to continue into the product.
