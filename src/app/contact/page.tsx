import type { Metadata } from "next";

import { Container } from "@/components/container";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact | Midori Flora",
  description: "Contact Midori Flora by phone or visit in Habaraduwa.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact"
              title="Reach Midori Flora for bouquet orders and floral inquiries."
              description="For flower deliveries, wedding bouquets, and same-day gifting, contact the shop directly by phone or visit in Deniyakoratuwa, Habaraduwa."
            />
            <div className="grid gap-4">
              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Phone
                </p>
                <p className="mt-3 font-serif text-3xl text-emerald-950">
                  {business.phone}
                </p>
              </a>
              <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Location
                </p>
                <p className="mt-3 font-serif text-3xl text-emerald-950">
                  {business.location}
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Open
                </p>
                <p className="mt-3 font-serif text-3xl text-emerald-950">
                  {business.hours}
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-white/70 bg-[linear-gradient(180deg,#fff,#f4faf6)] p-8 shadow-[0_24px_90px_-60px_rgba(14,48,35,0.75)]">
            <div className="rounded-[2rem] bg-[linear-gradient(180deg,#fdf1f6,#fff)] p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-900/55">
                Visit the shop
              </p>
              <h2 className="mt-3 font-serif text-4xl text-emerald-950">
                Midori Flora
              </h2>
              <p className="mt-4 text-lg leading-8 text-emerald-900/75">
                A floral destination for beautifully wrapped bouquets, wedding
                flowers, and meaningful gifts in Habaraduwa.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Reviews
                </p>
                <p className="mt-3 font-serif text-4xl text-emerald-950">
                  {business.rating}
                </p>
                <p className="mt-2 text-sm text-emerald-900/70">
                  From {business.reviewsCount} customer reviews
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-white p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Service
                </p>
                <p className="mt-3 font-serif text-4xl text-emerald-950">
                  Everyday
                </p>
                <p className="mt-2 text-sm text-emerald-900/70">
                  Orders, events, and last-minute gifting support
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
