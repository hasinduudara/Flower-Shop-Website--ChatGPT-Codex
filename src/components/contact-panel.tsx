import { business } from "@/lib/data";

export function ContactPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900/55">
          Rating
        </p>
        <p className="mt-3 font-serif text-3xl text-emerald-950">
          {business.rating}
        </p>
        <p className="mt-2 text-sm text-emerald-900/70">
          Based on {business.reviewsCount} reviews
        </p>
      </div>
      <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900/55">
          Phone
        </p>
        <a
          href={`tel:${business.phone.replace(/\s+/g, "")}`}
          className="mt-3 block font-serif text-2xl text-emerald-950"
        >
          {business.phone}
        </a>
        <p className="mt-2 text-sm text-emerald-900/70">{business.hours}</p>
      </div>
      <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-900/55">
          Location
        </p>
        <p className="mt-3 font-serif text-2xl text-emerald-950">
          Habaraduwa
        </p>
        <p className="mt-2 text-sm text-emerald-900/70">{business.location}</p>
      </div>
    </div>
  );
}
