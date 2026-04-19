import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { FlowerCard } from "@/components/flower-card";
import { PageShell } from "@/components/page-shell";
import { getProductBySlug, products } from "@/lib/data";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/shop/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | Midori Flora",
    };
  }

  return {
    title: `${product.name} | Midori Flora`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailsPage(
  props: PageProps<"/shop/[slug]">,
) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug);

  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <Container className="space-y-12">
          <Link
            href="/shop"
            className="inline-flex text-sm font-semibold text-emerald-900/70 transition hover:text-rose-500"
          >
            Back to shop
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="relative min-h-[32rem] overflow-hidden rounded-[2.5rem] border border-white/70 bg-[radial-gradient(circle_at_top,#fff_0%,#f9dce7_30%,#dcefe1_85%)] shadow-[0_28px_100px_-55px_rgba(14,48,35,0.85)]">
              <div className="absolute inset-8 rounded-[2rem] border border-white/60 bg-white/20" />
              <div className="absolute inset-x-20 bottom-0 top-24 rounded-t-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(71,114,85,0.8))]" />
              <div className="absolute left-14 top-18 h-36 w-36 rounded-full bg-[radial-gradient(circle,#fff_0%,#f8c9d8_56%,rgba(255,255,255,0)_72%)]" />
              <div className="absolute right-14 top-16 h-36 w-36 rounded-full bg-[radial-gradient(circle,#fff_0%,#e7f4ea_58%,rgba(255,255,255,0)_72%)]" />
              <div className="absolute bottom-10 left-8 right-8 rounded-[1.75rem] border border-white/50 bg-white/75 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.28em] text-emerald-900/55">
                  {product.category}
                </p>
                <h1 className="mt-3 font-serif text-4xl text-emerald-950 sm:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-4 text-base leading-7 text-emerald-900/72">
                  {product.shortDescription}
                </p>
              </div>
            </div>

            <div className="space-y-8 rounded-[2.5rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_90px_-60px_rgba(14,48,35,0.85)] backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-600">
                  {product.price}
                </span>
                <span className="text-sm text-emerald-900/60">
                  Rated {product.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-lg leading-8 text-emerald-900/75">
                {product.description}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#fdf2f6,#ffffff)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900/55">
                    Stem Count
                  </p>
                  <p className="mt-3 font-serif text-3xl text-emerald-950">
                    {product.stemCount}
                  </p>
                </div>
                <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#f3faf5,#ffffff)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900/55">
                    Best For
                  </p>
                  <p className="mt-3 text-base leading-7 text-emerald-900/75">
                    {product.occasions.join(" • ")}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900/55">
                  Color Palette
                </p>
                <div className="flex flex-wrap gap-3">
                  {product.palette.map((tone) => (
                    <span
                      key={tone}
                      className="rounded-full border border-emerald-950/10 bg-white px-4 py-2 text-sm text-emerald-900/75"
                    >
                      {tone}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:0788346488"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800"
                >
                  Order by phone
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-emerald-950/15 bg-white px-6 py-4 text-sm font-semibold text-emerald-950 transition hover:border-rose-300 hover:text-rose-500"
                >
                  Contact the shop
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-900/55">
                You may also like
              </p>
              <h2 className="font-serif text-3xl text-emerald-950">
                More flowers from Midori Flora
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {relatedProducts.map((relatedProduct) => (
                <FlowerCard key={relatedProduct.slug} product={relatedProduct} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
