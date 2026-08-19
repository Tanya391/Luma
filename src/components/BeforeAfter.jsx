import { useCallback, useRef, useState } from 'react'

function BeforeAfter() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()

    const percentage =
      ((clientX - rect.left) / rect.width) * 100

    setPosition(Math.min(100, Math.max(0, percentage)))
  }, [])

  const handlePointerDown = useCallback(
    (event) => {
      event.preventDefault()

      updatePosition(event.clientX)

      const handleMove = (moveEvent) => {
        updatePosition(moveEvent.clientX)
      }

      const handleUp = () => {
        window.removeEventListener('pointermove', handleMove)
        window.removeEventListener('pointerup', handleUp)
      }

      window.addEventListener('pointermove', handleMove)
      window.addEventListener('pointerup', handleUp)
    },
    [updatePosition]
  )

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      setPosition((value) => Math.max(0, value - 5))
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      setPosition((value) => Math.min(100, value + 5))
    }

    if (event.key === 'Home') {
      event.preventDefault()
      setPosition(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      setPosition(100)
    }
  }, [])

  return (
    <section
      id="luma-vision"
      className="px-6 py-10 md:px-10 md:py-14 lg:px-14"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Section heading */}
        <div className="mb-8 md:mb-10">

          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--luma-dark)]" />

            <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
              From space to style
            </span>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">

            <h2 className="max-w-4xl font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              See what your space
              <br />
              <em>could become.</em>
            </h2>

            <p className="max-w-sm text-sm leading-6 text-[var(--luma-muted)]">
              Luma reads the character of your room and translates it into
              a furniture direction that feels considered, personal and yours.
            </p>

          </div>
        </div>

        {/* =====================================================
            BEFORE / AFTER SLIDER
        ====================================================== */}

        <div
          ref={containerRef}
          className="relative w-full overflow-hidden select-none touch-none bg-[var(--luma-img-bg)] transition-colors duration-500"
        >

          {/* -------------------------------------------------
              AFTER IMAGE
              This is the permanent background.
              It dictates the container's height naturally.
          -------------------------------------------------- */}

          <img
            src="/images/after-room.jpg"
            alt="Luma vision of the room"
            className="w-full h-auto block pointer-events-none"
            draggable="false"
          />


          {/* -------------------------------------------------
              BEFORE IMAGE
              Same exact size and position as AFTER.
              Only its visible width changes.
          -------------------------------------------------- */}

          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src="/images/before-room.jpg"
              alt="Original room before Luma"
              className="absolute inset-0 w-full h-full object-cover block"
              draggable="false"
            />
          </div>


          {/* -------------------------------------------------
              DIVIDER
          -------------------------------------------------- */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              z-30
              w-px
              bg-white/90
            "
            style={{
              left: `${position}%`,
            }}
          >

            {/* Slider handle */}

            <button
              type="button"
              role="slider"
              aria-label="Compare your space with Luma vision"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(position)}
              onPointerDown={handlePointerDown}
              onKeyDown={handleKeyDown}
              className="
                pointer-events-auto
                absolute
                left-1/2
                top-1/2
                flex
                h-11
                w-11
                -translate-x-1/2
                -translate-y-1/2
                cursor-col-resize
                items-center
                justify-center
                rounded-full
                bg-white
                text-black
                shadow-lg
                outline-none
                transition-transform
                duration-200
                hover:scale-105
                focus-visible:ring-2
                focus-visible:ring-[var(--luma-dark)]
                focus-visible:ring-offset-2
              "
            >

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 4L2 9L6 14"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M12 4L16 9L12 14"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default BeforeAfter