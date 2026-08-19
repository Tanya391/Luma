const recommendations = [
  {
    image: '/images/products/chair.jpg',
    category: 'SEATING',
    name: 'Luma Lounge Chair',
    material: 'Natural oak · Linen',
    price: '₹24,800',
    match: '96%',
  },
  {
    image: '/images/products/loungechair.jpg',
    category: 'SEATING',
    name: 'Aero Lounge Chair',
    material: 'Premium leather · Steel frame',
    price: '₹32,000',
    match: '92%',
  },
  {
    image: '/images/products/lamp.jpg',
    category: 'LIGHTING',
    name: 'Sol Floor Lamp',
    material: 'Natural wood · Linen',
    price: '₹12,600',
    match: '89%',
  },
]

function CuratedRecommendations() {
  return (
    <section
      id="recommendations"
      className="px-6 py-10 md:px-10 md:py-14 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section introduction */}
        <div className="mb-16 md:mb-20">

          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--luma-dark)]" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
              Curated for you
            </span>
          </div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

            <h2 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Furniture chosen
              <br />
              <em>for your space.</em>
            </h2>

            <div className="max-w-sm">
              <p className="text-sm leading-6 text-[var(--luma-muted)]">
                Luma considers your space, palette and preferred feeling
                to create a furniture direction that feels uniquely yours.
              </p>
            </div>

          </div>
        </div>


        {/* Style controls */}
        <div className="mb-10 flex flex-col gap-5 border-y border-[var(--luma-line)] py-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] text-[var(--luma-muted)]">
              Your direction
            </p>

            <p className="mt-1 font-['Cormorant_Garamond'] text-2xl">
              Warm & Natural
            </p>
          </div>

          <select
            defaultValue="warm"
            className="w-full border-b border-[var(--luma-dark)] bg-[var(--luma-cream)] py-2 text-sm text-[var(--luma-dark)] outline-none md:w-48"
            aria-label="Choose interior style"
          >
            <option value="warm" className="bg-[var(--luma-cream)] text-[var(--luma-dark)]">Warm & Natural</option>
            <option value="minimal" className="bg-[var(--luma-cream)] text-[var(--luma-dark)]">Minimal</option>
            <option value="contemporary" className="bg-[var(--luma-cream)] text-[var(--luma-dark)]">Contemporary</option>
            <option value="cozy" className="bg-[var(--luma-cream)] text-[var(--luma-dark)]">Cozy</option>
            <option value="japandi" className="bg-[var(--luma-cream)] text-[var(--luma-dark)]">Japandi</option>
          </select>

        </div>


        {/* Recommendation cards */}
        <div className="grid gap-5 md:grid-cols-12">

          {/* Featured recommendation */}
          <article className="group md:col-span-7">

            <div className="aspect-[4/5] relative overflow-hidden bg-[var(--luma-img-bg)] transition-colors duration-500">

              <img
                src={recommendations[0].image}
                alt={recommendations[0].name}
                className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />

              <div className="absolute left-5 top-5">
                <span className="bg-[var(--luma-cream)] px-3 py-2 text-[9px] uppercase tracking-[0.2em]">
                  Luma match · {recommendations[0].match}
                </span>
              </div>

            </div>

            <div className="flex items-start justify-between gap-5 border-b border-[var(--luma-line)] py-5">

              <div>
                <p className="mb-2 text-[9px] uppercase tracking-[0.22em] text-[var(--luma-muted)]">
                  {recommendations[0].category}
                </p>

                <h3 className="font-['Cormorant_Garamond'] text-3xl">
                  {recommendations[0].name}
                </h3>

                <p className="mt-1 text-xs text-[var(--luma-muted)]">
                  {recommendations[0].material}
                </p>
              </div>

              <p className="text-sm">
                {recommendations[0].price}
              </p>

            </div>

          </article>


          {/* Smaller recommendations */}
          <div className="grid gap-5 md:col-span-5">

            {recommendations.slice(1).map((item) => (
              <article
                key={item.name}
                className="group grid grid-cols-2 gap-5 border-b border-[var(--luma-line)] pb-5"
              >

                <div className="aspect-[4/5] relative overflow-hidden bg-[var(--luma-img-bg)] transition-colors duration-500">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />

                  <div className="absolute left-3 top-3">
                    <span className="bg-[var(--luma-cream)] px-2 py-1 text-[8px] uppercase tracking-[0.15em]">
                      {item.match}
                    </span>
                  </div>

                </div>

                <div className="flex flex-col justify-between py-1">

                  <div>
                    <p className="mb-2 text-[9px] uppercase tracking-[0.2em] text-[var(--luma-muted)]">
                      {item.category}
                    </p>

                    <h3 className="font-['Cormorant_Garamond'] text-2xl leading-none">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-[var(--luma-muted)]">
                      {item.material}
                    </p>
                  </div>

                  <p className="text-sm">
                    {item.price}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>




      </div>
    </section>
  )
}

export default CuratedRecommendations