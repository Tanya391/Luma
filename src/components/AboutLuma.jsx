import { ArrowUpRight } from 'lucide-react'

const principles = [
  {
    number: '01',
    title: 'Understand your space.',
    description:
      'Luma looks beyond individual products to understand the character, proportions and atmosphere of your room.',
  },
  {
    number: '02',
    title: 'Shape your direction.',
    description:
      'Choose the feeling you want to create — from warm and natural to minimal, contemporary or cozy.',
  },
  {
    number: '03',
    title: 'Find what belongs.',
    description:
      'Furniture recommendations are presented as a considered direction for your space, not a random catalogue.',
  },
]

function AboutLuma() {
  return (
    <section
      id="about"
      className="px-6 py-6 md:px-10 md:py-10 lg:px-14"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section intro */}
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">

          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--luma-dark)]" />

              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
                The Luma approach
              </span>
            </div>

            <h2 className="font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-6xl">
              Furniture that starts
              <br />
              <em>with the room.</em>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[var(--luma-muted)] lg:pb-1">
            Luma brings an AI-led approach to furniture discovery,
            helping you move from an empty space to a considered
            interior direction without starting with a catalogue.
          </p>

        </div>

        {/* Principles */}
        <div className="mt-8 border-t border-[var(--luma-line)]">

          {principles.map((item) => (
            <div
              key={item.number}
              className="grid gap-4 border-b border-[var(--luma-line)] py-6 md:grid-cols-[80px_1fr_1fr] md:items-start md:py-8"
            >

              <span className="text-[10px] tracking-[0.2em] text-[var(--luma-muted)]">
                {item.number}
              </span>

              <h3 className="font-['Cormorant_Garamond'] text-3xl leading-none md:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-md text-sm leading-6 text-[var(--luma-muted)] md:justify-self-end">
                {item.description}
              </p>

            </div>
          ))}

        </div>

        {/* Closing statement */}
        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          <p className="max-w-2xl font-['Cormorant_Garamond'] text-3xl leading-tight md:text-3xl">
            A more personal way to discover furniture,
            <em> shaped around the way you live.</em>
          </p>

          <button
            onClick={() =>
              document
                .getElementById('luma-vision')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group flex w-fit items-center gap-2 border-b border-[var(--luma-dark)] pb-1 text-sm"
          >
            Ask Luma

            <ArrowUpRight
              size={15}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>
    </section>
  )
}

export default AboutLuma