function Footer() {
  return (
    <footer className="px-6 py-8 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1440px] border-t border-[var(--luma-line)] pt-8">

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          {/* Left: Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <span className="font-['Cormorant_Garamond'] text-3xl font-medium tracking-[-0.04em]">
              Luma
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <p className="text-xs text-[var(--luma-muted)]">
                © {new Date().getFullYear()} Luma. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-xs text-[var(--luma-muted)] transition-colors hover:text-[var(--luma-dark)]">Privacy</a>
                <a href="#" className="text-xs text-[var(--luma-muted)] transition-colors hover:text-[var(--luma-dark)]">Terms</a>
              </div>
            </div>
          </div>

          {/* Right: Links & Social Icons */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            
            {/* Pages */}
            <div className="flex gap-6">
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

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-[var(--luma-muted)] transition-transform hover:-translate-y-1 hover:text-[var(--luma-dark)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[var(--luma-muted)] transition-transform hover:-translate-y-1 hover:text-[var(--luma-dark)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className="text-[var(--luma-muted)] transition-transform hover:-translate-y-1 hover:text-[var(--luma-dark)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[var(--luma-muted)] transition-transform hover:-translate-y-1 hover:text-[var(--luma-dark)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
