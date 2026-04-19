import type { Review } from "@/lib/data";

type TestimonialCardProps = {
  review: Review;
};

export function TestimonialCard({ review }: TestimonialCardProps) {
  return (
    <article className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_20px_70px_-50px_rgba(14,48,35,0.6)] backdrop-blur">
      <div className="mb-5 flex gap-1 text-rose-400">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
      <p className="text-base leading-7 text-emerald-900/75">“{review.quote}”</p>
      <div className="mt-6">
        <p className="font-semibold text-emerald-950">{review.name}</p>
        <p className="text-sm text-emerald-900/60">{review.title}</p>
      </div>
    </article>
  );
}
