import type { Metadata } from "next";

import { Container } from "@/components/container";
import { FlowerCard } from "@/components/flower-card";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop | Midori Flora",
  description: "Browse flower bouquets from Midori Flora.",
};

export default function ShopPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Shop"
            title="Signature bouquets for gifting, celebrations, and elegant moments."
            description="Browse the Midori Flora collection of soft, premium floral arrangements. Each bouquet is styled with pastel tones and fresh greenery."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <FlowerCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
