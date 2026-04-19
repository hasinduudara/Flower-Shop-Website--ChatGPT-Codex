import type { Metadata } from "next";

import { ContactPanel } from "@/components/contact-panel";
import { Container } from "@/components/container";
import { PageShell } from "@/components/page-shell";
import { SectionHeading } from "@/components/section-heading";
import { business, reviews } from "@/lib/data";

export const metadata: Metadata = {
  title: "About | Midori Flora",
  description: "Learn about Midori Flora in Deniyakoratuwa, Habaraduwa.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="About"
              title="A modern flower shop with a calm, graceful point of view."
              description={business.description}
            />
            <p className="text-lg leading-8 text-emerald-900/75">
              Midori Flora serves customers across Habaraduwa with elegant
              arrangements that feel soft, elevated, and memorable. The studio
              style leans into pastel tones, clean wrapping, and thoughtfully
              balanced floral textures.
            </p>
            <ContactPanel />
          </div>
          <div className="rounded-[2.5rem] border border-white/70 bg-white/75 p-8 shadow-[0_24px_90px_-60px_rgba(14,48,35,0.75)] backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#fdf1f6,#fff)] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Business Name
                </p>
                <p className="mt-3 font-serif text-3xl text-emerald-950">
                  {business.name}
                </p>
              </div>
              <div className="rounded-[1.75rem] bg-[linear-gradient(180deg,#f3faf5,#fff)] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                  Availability
                </p>
                <p className="mt-3 font-serif text-3xl text-emerald-950">
                  24 Hours
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-[2rem] bg-[linear-gradient(180deg,#ffffff,#f8fbf9)] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-emerald-900/55">
                Why customers choose us
              </p>
              <div className="mt-5 space-y-4">
                {reviews.map((review) => (
                  <div
                    key={review.name}
                    className="rounded-[1.5rem] border border-emerald-950/8 bg-white p-4"
                  >
                    <p className="text-sm leading-6 text-emerald-900/72">
                      “{review.quote}”
                    </p>
                    <p className="mt-3 text-sm font-semibold text-emerald-950">
                      {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
