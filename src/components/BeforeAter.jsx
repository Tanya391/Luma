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
          className="
            relative
            w-full
            overflow-hidden
            select-none
            touch-none
            bg-[#e8e3da]
          "
          style={{
            aspectRatio: '1264 / 811',
          }}
        >

          {/* -------------------------------------------------
              AFTER IMAGE
              This is the permanent background.
              It never moves or resizes.
          -------------------------------------------------- */}

          <img
            src="/images/after-room.jpg"
            alt="Luma vision of the room"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-fill
              pointer-events-none
            "
            draggable="false"
          />


          {/* -------------------------------------------------
              BEFORE IMAGE
              Same exact size and position as AFTER.
              Only its visible width changes.
          -------------------------------------------------- */}

          <div
            className="
              absolute
              inset-y-0
              left-0
              overflow-hidden
            "
            style={{
              width: `${position}%`,
            }}
          >

            <img
              src="/images/before-room.jpg"
              alt="Original room before Luma"
              className="
                absolute
                left-0
                top-0
                h-full
                w-full
                max-w-none
                object-fill
                pointer-events-none
              "
              draggable="false"
            />

          </div>


          {/* -------------------------------------------------
              YOUR SPACE LABEL
          -------------------------------------------------- */}

          <div className="pointer-events-none absolute left-5 top-5 z-20 md:left-7 md:top-7">
            <span className="bg-[var(--luma-cream)] px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[var(--luma-dark)]">
              Your space
            </span>
          </div>


          {/* -------------------------------------------------
              LUMA VISION LABEL
          -------------------------------------------------- */}

          <div className="pointer-events-none absolute right-5 top-5 z-20 md:right-7 md:top-7">
            <span className="bg-[var(--luma-dark)] px-3 py-2 text-[9px] uppercase tracking-[0.2em] text-[var(--luma-cream)]">
              Luma vision
            </span>
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