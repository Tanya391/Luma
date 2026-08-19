# Decisions & Rationale

## 1. Why this ingestion strategy over the obvious alternative you rejected?
**N/A** - I opted for **Part 2 (The Premium Home Page)** instead of Part 1 (Scraper). This question applies to the data scraping track.

## 2. One trade-off made under the time limit, and what you’d do with a real week.
**Trade-off:**
To ship quickly, I simulated the "Before/After" and "AI Design" experiences using static image sliders and hard-coded curated product data. Additionally, I opted not to implement a full Dark Mode given the "all-or-nothing" requirement—focusing instead on polishing a unified light theme with high-quality typography and spacing.

**With a real week:**
I would build out the interactive form flow where users can upload an actual photo of their space. This would integrate with a backend vision model to analyze the room and dynamically query an index of furniture inventory, returning *real* matching products rather than a static dataset. I would also optimize the image assets for Next-Gen formats, and add an elegant, complete dark mode.

## 3. Where did you use AI tools, and what did you personally verify or change afterward?
**Usage:**
I used an AI coding assistant to help scaffold the initial React components, generate the foundational Tailwind CSS structure, and write the non-fabricated placeholder copy.

**Verification & Changes:**
- **Slider Rewriting:** I manually intervened to rewrite the Before/After image slider using a robust CSS clip-path technique to prevent the images from being awkwardly resized or squished horizontally during the interaction.
- **Image Formatting:** I verified all grid layouts and adjusted image styling to use `aspect-square` with `object-contain` and `mix-blend-darken`. This prevented any aggressive cropping of product photos while making their white backgrounds blend seamlessly into the container.
- **Responsive Layout:** I verified the mobile behavior at 390px, explicitly wrapping the app in an `overflow-x-hidden` container to guarantee no horizontal scrollbars would appear.
- **Honesty Check:** I personally combed through all the text content to ensure zero fake metrics, logos, or testimonials were present, strictly keeping to honest value-prop copy.
- **Easter Egg:** I added a Konami Code listener into the React lifecycle.
