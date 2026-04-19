import Link from "next/link";

import type { Product } from "@/lib/data";

type FlowerCardProps = {
  product: Product;
};

export function FlowerCard({ product }: FlowerCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_24px_80px_-48px_rgba(14,48,35,0.55)] backdrop-blur">
      <div className="relative h-64 overflow-hidden bg-[radial-gradient(circle_at_top_left,#fff_0%,#f9dce7_35%,#dcefe1_100%)]">
        <div className="absolute inset-6 rounded-[1.75rem] border border-white/60 bg-white/20" />
        <div className="absolute inset-x-8 bottom-8 top-14 rounded-[999px] bg-[radial-gradient(circle_at_top,#fff_0%,#f6c8d7_34%,#d7ebde_78%,transparent_100%)] opacity-90 blur-[2px]" />
        <div className="absolute inset-x-12 bottom-0 top-20 rounded-t-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(66,111,82,0.65))]" />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-900/55">
              {product.category}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-emerald-950">
              {product.name}
            </h3>
          </div>
          <span className="rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600">
            {product.price}
          </span>
        </div>
        <p className="text-sm leading-6 text-emerald-900/70">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-emerald-900/60">Rated {product.rating.toFixed(1)}</span>
          <Link
            href={`/shop/${product.slug}`}
            className="text-sm font-semibold text-emerald-950 transition group-hover:text-rose-500"
          >
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}
