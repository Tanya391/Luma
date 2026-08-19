import { ArrowUpRight } from 'lucide-react'

function Hero() {
  const scrollToDemo = () => {
    document.getElementById('luma-vision')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section className="px-6 pb-14 pt-10 md:px-10 md:pb-20 md:pt-14 lg:px-14 lg:pt-16">
      <div className="mx-auto max-w-[1440px]">

        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-20">

          {/* Editorial content */}
          <div className="pb-0 lg:pb-8">

            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--luma-dark)]" />

              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
                Intelligent living
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-[760px] font-['Cormorant_Garamond'] text-[clamp(4rem,8vw,8.5rem)] font-medium leading-[0.82] tracking-[-0.055em]">
              Furniture that
              <br />
              understands
              <br />
              <em className="font-normal">
                your space.
              </em>
            </h1>

            {/* Bottom content */}
            <div className="mt-10 flex items-end justify-between gap-8 lg:mt-14">

              <p className="max-w-[480px] text-[13px] leading-6 tracking-[-0.01em] text-[var(--luma-muted)] sm:text-sm">
                AI-curated furniture that fits your space,
                your style, your life.
              </p>

              <button
                onClick={scrollToDemo}
                className="group hidden shrink-0 items-center gap-3 border-b border-[var(--luma-dark)] pb-2 text-sm sm:flex"
              >
                Design my space

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>

            {/* Mobile CTA */}
            <button
              onClick={scrollToDemo}
              className="group mt-8 flex items-center gap-3 border-b border-[var(--luma-dark)] pb-2 text-sm sm:hidden"
            >
              Design my space

              <ArrowUpRight
                size={16}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

          </div>

          {/* Hero image */}
          <div className="w-full overflow-hidden">
            <img
              src="/images/hero-room.jpg"
              alt="Warm contemporary living room with natural wood and neutral furniture"
              className="h-auto w-full object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default Hero