import { ArrowUpRight } from 'lucide-react'

function FinalCTA() {
  const scrollToDemo = () => {
    document.getElementById('luma-vision')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">

        <div className="border-t border-[var(--luma-line)] pt-16 md:pt-20">

          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

            <h2 className="max-w-3xl font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Your space,
              <br />
              <em>reimagined.</em>
            </h2>

            <button
              onClick={scrollToDemo}
              className="group flex w-fit items-center gap-3 border-b border-[var(--luma-dark)] pb-2 text-sm"
            >
              Start designing
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight size={16} strokeWidth={1.4} />
              </span>
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default FinalCTA
