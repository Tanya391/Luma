import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const suggestions = [
  'I want a calm, minimal living room',
  'Scandinavian style with warm tones',
  'Open-plan space for a family of four',
  'Small apartment, natural materials',
]

function AskLuma() {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // AI integration point
  }

  return (
    <section id="ask-luma" className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--luma-dark)]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
              AI design assistant
            </span>
          </div>

          <h2 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Describe your space.
            <br />
            <em>We'll do the rest.</em>
          </h2>
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="relative max-w-2xl">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell Luma about your space…"
            className="w-full border-b border-[var(--luma-dark)] bg-transparent py-4 pr-12 text-sm outline-none placeholder:text-[var(--luma-muted)]"
          />
          <button
            type="submit"
            aria-label="Submit"
            className="group absolute right-0 top-1/2 -translate-y-1/2"
          >
            <ArrowUpRight
              size={20}
              strokeWidth={1.4}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </form>

        {/* Suggestion chips */}
        <div className="mt-6 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setInput(s)}
              className="border border-[var(--luma-line)] px-4 py-2 text-xs text-[var(--luma-muted)] transition-colors duration-200 hover:border-[var(--luma-dark)] hover:text-[var(--luma-dark)]"
            >
              {s}
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AskLuma
