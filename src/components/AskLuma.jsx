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
    <section id="ask-luma" className="px-6 py-10 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1440px]">
        
        {/* The Attention-Seeking AI Box */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--luma-dark)] px-6 py-12 text-[var(--luma-white)] shadow-2xl md:px-12 md:py-16 lg:px-20 lg:py-24 transition-colors duration-500">
          
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[var(--luma-cream)] opacity-5 blur-3xl" />

          {/* Heading */}
          <div className="relative mb-10 md:mb-14">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--luma-line)] opacity-50" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-line)] opacity-80">
                AI design assistant
              </span>
            </div>

            <h2 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Describe your space.
              <br />
              <em className="text-[var(--luma-muted)] opacity-80">We'll do the rest.</em>
            </h2>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="relative z-10 max-w-2xl">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tell Luma about your space…"
              className="w-full border-b border-[var(--luma-line)]/30 bg-transparent py-4 pr-12 text-base text-[var(--luma-white)] outline-none transition-colors placeholder:text-[var(--luma-muted)] focus:border-[var(--luma-white)] sm:text-lg"
            />
            <button
              type="submit"
              aria-label="Submit"
              className="group absolute right-0 top-1/2 -translate-y-1/2 text-[var(--luma-white)]"
            >
              <ArrowUpRight
                size={24}
                strokeWidth={1.2}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </form>

          {/* Suggestion chips */}
          <div className="relative z-10 mt-8 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInput(s)}
                className="rounded-full border border-[var(--luma-line)]/30 px-5 py-2.5 text-xs text-[var(--luma-line)] transition-all duration-300 hover:border-[var(--luma-white)] hover:bg-[var(--luma-white)] hover:text-[var(--luma-dark)]"
              >
                {s}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}

export default AskLuma
