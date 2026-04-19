import Link from "next/link";

import { ContactPanel } from "@/components/contact-panel";
import { Container } from "@/components/container";
import { FlowerCard } from "@/components/flower-card";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { business, featuredProducts, reviews } from "@/lib/data";

export default function HomePage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden py-16 sm:py-24">
        <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-sm text-emerald-900/70 shadow-sm">
              {business.rating} rating • {business.reviewsCount} reviews • {business.hours}
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl font-serif text-5xl leading-none text-emerald-950 sm:text-6xl lg:text-7xl">
                Fresh flowers for soft moments and unforgettable celebrations.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-emerald-900/72">
                Midori Flora creates elegant floral arrangements with a calm,
                premium aesthetic in Deniyakoratuwa, Habaraduwa. Order signature
                bouquets any time, day or night.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-emerald-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Shop Flowers
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-emerald-950/15 bg-white/80 px-7 py-4 text-sm font-semibold text-emerald-950 transition hover:border-rose-300 hover:text-rose-500"
              >
                Visit Midori Flora
              </Link>
            </div>
          </div>
          <div className="relative min-h-[28rem]">
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/70 bg-white/55 shadow-[0_30px_100px_-50px_rgba(14,48,35,0.7)] backdrop-blur-xl" />
            <div className="absolute inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_top,#fff_0%,#f5d4e1_30%,#dcefe1_68%,#eff8f1_100%)]" />
            <div className="absolute left-1/2 top-12 h-52 w-52 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#fff_0%,#ffd7e3_48%,rgba(255,255,255,0)_72%)]" />
            <div className="absolute bottom-10 left-1/2 h-72 w-40 -translate-x-1/2 rounded-t-[999px] bg-[linear-gradient(180deg,rgba(255,255,255,0.2),rgba(78,124,92,0.78))]" />
            <div className="absolute left-14 top-24 h-32 w-32 rounded-full bg-[radial-gradient(circle,#fff_0%,#f6c4d6_55%,rgba(255,255,255,0)_72%)]" />
            <div className="absolute right-14 top-24 h-32 w-32 rounded-full bg-[radial-gradient(circle,#fff_0%,#fde6ee_45%,rgba(255,255,255,0)_72%)]" />
            <div className="absolute left-24 top-44 h-28 w-28 rounded-full bg-[radial-gradient(circle,#fff_0%,#f9dce7_56%,rgba(255,255,255,0)_72%)]" />
            <div className="absolute right-24 top-44 h-28 w-28 rounded-full bg-[radial-gradient(circle,#fff_0%,#dceddf_58%,rgba(255,255,255,0)_72%)]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.75rem] border border-white/50 bg-white/75 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.28em] text-emerald-900/55">
                Fresh Flowers
              </p>
              <p className="mt-3 font-serif text-2xl text-emerald-950">
                Curated bouquets with delicate color, graceful shapes, and a
                polished finish.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Featured Collection"
            title="Bouquets designed to feel thoughtful, modern, and premium."
            description="Explore Midori Flora’s signature arrangements for birthdays, weddings, and everyday gifting."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <FlowerCard key={product.slug} product={product} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 rounded-[2.5rem] border border-white/70 bg-white/60 p-8 shadow-[0_28px_100px_-55px_rgba(14,48,35,0.75)] backdrop-blur-lg lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
          <SectionHeading
            eyebrow="About Midori Flora"
            title="A flower shop rooted in gentle luxury and dependable service."
            description={business.description}
          />
          <div className="space-y-5 rounded-[2rem] bg-[linear-gradient(180deg,#fdf1f6,#f3faf5)] p-6">
            <p className="text-lg leading-8 text-emerald-900/75">
              Located in {business.location}, Midori Flora welcomes walk-ins,
              event inquiries, and last-minute gifting with 24-hour
              availability. The focus is simple: beautiful floral work with
              warmth, consistency, and care.
            </p>
            <ContactPanel />
          </div>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="Testimonials"
            title="Customers return for the freshness, the finish, and the care."
            description="Kind words from customers who ordered celebration flowers, wedding bouquets, and thoughtful late-night gifts."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <TestimonialCard key={review.name} review={review} />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 pt-14 sm:pb-24 sm:pt-20">
        <Container className="rounded-[2.5rem] bg-emerald-950 px-6 py-10 text-white shadow-[0_28px_100px_-55px_rgba(14,48,35,1)] sm:px-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.28em] text-rose-100/75">
                Contact
              </p>
              <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
                Send flowers from Midori Flora any hour of the day.
              </h2>
              <p className="max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                Call us directly for bouquet orders, event florals, or same-day
                inquiries in and around Habaraduwa.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="rounded-[1.75rem] border border-white/15 bg-white/8 p-5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                  Phone
                </p>
                <p className="mt-3 font-serif text-2xl">{business.phone}</p>
              </a>
              <div className="rounded-[1.75rem] border border-white/15 bg-white/8 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                  Location
                </p>
                <p className="mt-3 font-serif text-2xl">Habaraduwa</p>
                <p className="mt-2 text-sm text-white/70">{business.location}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
