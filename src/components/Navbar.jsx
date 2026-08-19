import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    setMenuOpen(false)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const goHome = () => {
    setMenuOpen(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <header className="relative z-50 px-6 py-6 md:px-10 lg:px-14">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between">
          
          {/* Luma wordmark */}
          <button
            onClick={goHome}
            className="font-['Cormorant_Garamond'] text-[2.1rem] font-medium leading-none tracking-[-0.05em]"
            aria-label="Luma home"
          >
            Luma
          </button>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-9 lg:flex">
            <button
              onClick={() => scrollToSection('luma-vision')}
              className="text-sm text-[var(--luma-muted)] transition-colors duration-300 hover:text-[var(--luma-dark)]"
            >
              Explore
            </button>

            <button
              onClick={() => scrollToSection('shop')}
              className="text-sm text-[var(--luma-muted)] transition-colors duration-300 hover:text-[var(--luma-dark)]"
            >
              Collections
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-[var(--luma-muted)] transition-colors duration-300 hover:text-[var(--luma-dark)]"
            >
              About
            </button>
          </div>

          {/* Desktop CTA */}
          <button
            onClick={() => scrollToSection('luma-vision')}
            className="hidden items-center gap-2 border-b border-[var(--luma-dark)] pb-1 text-sm lg:flex"
          >
            Design my space

            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
            />
          </button>

          {/* Mobile / tablet menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center lg:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={23} strokeWidth={1.4} />
            ) : (
              <div className="flex flex-col gap-[5px]">
                <span className="block h-px w-5 bg-[var(--luma-dark)]" />
                <span className="block h-px w-5 bg-[var(--luma-dark)]" />
              </div>
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--luma-cream)] transition-all duration-500 lg:hidden ${
          menuOpen
            ? 'visible opacity-100'
            : 'invisible opacity-0'
        }`}
      >
        <div className="flex h-full flex-col px-6 pb-10 pt-32 md:px-10">

          <div className="flex flex-col">
            <button
  onClick={() => scrollToSection('luma-vision')}
  className="border-b border-[var(--luma-line)] py-5 text-left font-['Cormorant_Garamond'] text-5xl"
>
  Explore
</button>

            <button
              onClick={() => scrollToSection('shop')}
              className="border-b border-[var(--luma-line)] py-5 text-left font-['Cormorant_Garamond'] text-5xl"
            >
              Collections
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="border-b border-[var(--luma-line)] py-5 text-left font-['Cormorant_Garamond'] text-5xl"
            >
              About
            </button>
          </div>

          <div className="mt-auto">
            <button
              onClick={() => scrollToSection('luma-vision')}
              className="group flex items-center gap-3 text-base"
            >
              Design my space

              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.4}
                />
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar