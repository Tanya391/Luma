import { ArrowUpRight } from 'lucide-react'
import { products } from '../data/product'

function ShopTheLook() {
  return (
    <section id="shop" className="px-6 py-14 md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading row */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-[var(--luma-dark)]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[var(--luma-muted)]">
                Curated for you
              </span>
            </div>

            <h2 className="font-['Cormorant_Garamond'] text-5xl leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Shop the look.
            </h2>
          </div>

          <button className="group flex w-fit items-center gap-2 border-b border-[var(--luma-dark)] pb-1 text-sm">
            View all pieces
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>

        </div>

        {/* Product grid / Horizontal scroll on all devices */}
        <div className="flex flex-nowrap overflow-x-auto snap-x snap-mandatory gap-6 pb-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer w-full shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >

              {/* Image */}
              <div className="aspect-square relative overflow-hidden bg-[var(--luma-img-bg)] transition-colors duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-darken transition-transform duration-700 group-hover:scale-[1.03] p-4"
                />
              </div>

              {/* Info */}
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--luma-muted)]">
                    {product.category}
                  </p>
                  <p className="mt-1 font-['Cormorant_Garamond'] text-xl">
                    {product.name}
                  </p>
                  <p className="mt-1 text-xs text-[var(--luma-muted)]">
                    {product.material}
                  </p>
                </div>
                <p className="shrink-0 text-sm">
                  ${product.price.toLocaleString()}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ShopTheLook
