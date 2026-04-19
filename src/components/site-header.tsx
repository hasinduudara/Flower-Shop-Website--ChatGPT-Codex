import Link from "next/link";

import { business } from "@/lib/data";

import { Container } from "./container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rose-100/80 bg-white/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f9dce7,#d8efdf)] text-lg shadow-sm">
            MF
          </div>
          <div>
            <p className="font-serif text-xl text-emerald-950">{business.name}</p>
            <p className="text-xs uppercase tracking-[0.28em] text-emerald-900/55">
              Premium Florals
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-emerald-950 transition hover:text-rose-500"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${business.phone.replace(/\s+/g, "")}`}
          className="inline-flex rounded-full bg-emerald-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Call Now
        </a>
      </Container>
    </header>
  );
}
