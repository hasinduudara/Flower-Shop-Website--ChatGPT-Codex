import Link from "next/link";

import { business } from "@/lib/data";

import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="border-t border-rose-100 bg-white/90">
      <Container className="grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-3">
          <h2 className="font-serif text-2xl text-emerald-950">{business.name}</h2>
          <p className="max-w-md text-sm leading-6 text-emerald-900/70">
            Elegant, soft, and premium floral arrangements for daily gifting,
            celebrations, and unforgettable events.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-900/60">
            Explore
          </h3>
          <div className="flex flex-col gap-2 text-sm text-emerald-950">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="space-y-3 text-sm text-emerald-900/75">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-900/60">
            Visit
          </h3>
          <p>{business.location}</p>
          <p>{business.phone}</p>
          <p>{business.hours}</p>
        </div>
      </Container>
    </footer>
  );
}
