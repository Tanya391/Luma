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
      className="px-6 py-12 md:px-10 lg:px-14 border-y border-[var(--luma-line)]"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20 items-start">
          
          {/* Left: Punchy Title */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="h-px w-8 bg-[var(--luma-dark)]" />
              <span className="text-[9px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
                The Luma approach
              </span>
            </div>
            
            <h2 className="font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.04em] sm:text-6xl">
              Furniture that starts
              <br />
              <em className="text-[var(--luma-muted)]">with the room.</em>
            </h2>

            <button
              onClick={() =>
                document.getElementById('luma-vision')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="group mt-10 flex w-fit items-center gap-2 border-b border-[var(--luma-dark)] pb-1 text-xs uppercase tracking-widest transition-opacity hover:opacity-70"
            >
              Ask Luma
              <ArrowUpRight size={14} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Right: Compact 3-Column Grid */}
          <div className="grid gap-8 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item.number} className="flex flex-col gap-3">
                <span className="text-[10px] tracking-[0.2em] font-medium text-[var(--luma-dark)]">
                  {item.number}
                </span>
                <h3 className="font-['Cormorant_Garamond'] text-2xl leading-none">
                  {item.title}
                </h3>
                <p className="text-xs leading-5 text-[var(--luma-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutLuma