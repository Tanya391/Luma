# Decisions & Rationale

## 1. Why this ingestion strategy over the obvious alternative you rejected?
**N/A** - I opted for **Part 2 (The Premium Home Page)** instead of Part 1 (Scraper). This question applies to the data scraping track.

## 2. One trade-off made under the time limit, and what you’d do with a real week.
**Trade-off:**
To ship quickly, I simulated the "Before/After" and "AI Design" experiences using static image sliders and hard-coded curated product data. I used raw static data mapping for the "Shop the Look" components rather than building a dynamic backend inventory management system. 

**With a real week:**
I would build out the interactive form flow where users can upload an actual photo of their space. This would integrate with a backend vision model to analyze the room and dynamically query a real database of furniture inventory, returning live matching products based on inventory availability rather than a static dataset. I would also optimize the image assets into WebP formats for faster loading speeds, and implement robust pagination on the product collections.

## 3. Where did you use AI tools, and what did you personally verify or change afterward?
**Usage:**
I used an AI coding assistant to help scaffold the initial React components, rapidly generate the foundational Tailwind CSS structure, and establish the custom dark-mode logic.

**Verification & Changes:**
- **Layout Precision:** I manually intervened to rewrite the Before/After image slider using a robust CSS clip-path technique to prevent the images from being awkwardly resized or squished horizontally. I also forced a strict horizontal swiping scroll container for the "Shop the Look" section that hides native scrollbars across mobile and desktop.
- **Image Formatting:** I verified all grid layouts and adjusted image styling to use specific object-positioning (e.g., `object-[center_65%]`). This prevented the aggressive cropping of portrait product photos when adapting them to landscape cards.
- **Responsive Layout:** I verified the mobile behavior at 390px, explicitly wrapping the app in an `overflow-x-hidden` container to guarantee no horizontal scrollbars would appear on the main body.
- **Honesty Check:** I personally combed through all the text content to ensure zero fake metrics, logos, or testimonials were present, strictly keeping to honest value-prop copy.
- **Easter Egg:** I added a custom-built, smooth 2D flat spin animation tied to a Konami Code listener in the React lifecycle, which dynamically calculates the viewport center to prevent scroll jumping.
