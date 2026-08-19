function Footer() {
  return (
    <footer className="px-6 py-10 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1440px]">

        <div className="flex flex-col gap-6 border-t border-[var(--luma-line)] pt-8 sm:flex-row sm:items-center sm:justify-between">

          <span className="font-['Cormorant_Garamond'] text-2xl font-medium tracking-[-0.04em]">
            Luma
          </span>

          <div className="flex flex-wrap gap-6">
            <a href="#shop" className="text-xs text-[var(--luma-muted)] transition-colors hover:text-[var(--luma-dark)]">
              Collections
            </a>
            <a href="#luma-vision" className="text-xs text-[var(--luma-muted)] transition-colors hover:text-[var(--luma-dark)]">
              Design tool
            </a>
            <a href="#about" className="text-xs text-[var(--luma-muted)] transition-colors hover:text-[var(--luma-dark)]">
              About
            </a>
          </div>

          <p className="text-xs text-[var(--luma-muted)]">
            © {new Date().getFullYear()} Luma. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer
