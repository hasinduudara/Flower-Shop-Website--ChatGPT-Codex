export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  shortDescription: string;
  description: string;
  stemCount: string;
  palette: string[];
  occasions: string[];
  rating: number;
};

export type Review = {
  name: string;
  title: string;
  quote: string;
};

export const business = {
  name: "Midori Flora",
  rating: 4.9,
  reviewsCount: 64,
  location: "Deniyakoratuwa, Habaraduwa",
  phone: "078 834 6488",
  hours: "Open 24 hours",
  description:
    "Midori Flora creates elegant floral arrangements for everyday gifting and meaningful celebrations. From graceful rose bouquets to joyful birthday florals and romantic wedding designs, every arrangement is prepared with a soft, premium touch.",
};

export const products: Product[] = [
  {
    slug: "roses-bouquet",
    name: "Roses Bouquet",
    category: "Signature Bouquet",
    price: "LKR 8,500",
    shortDescription:
      "Classic blush and ivory roses arranged for thoughtful gifting.",
    description:
      "A refined hand-tied bouquet layered with pastel roses, seasonal filler blooms, and textured greenery. Designed for anniversaries, heartfelt thank-yous, and elegant everyday surprises.",
    stemCount: "18 premium stems",
    palette: ["Blush Pink", "Ivory White", "Garden Green"],
    occasions: ["Anniversary", "Thank You", "Just Because"],
    rating: 4.9,
  },
  {
    slug: "birthday-bouquet",
    name: "Birthday Bouquet",
    category: "Celebration Flowers",
    price: "LKR 7,200",
    shortDescription:
      "Soft seasonal blooms crafted to brighten birthdays beautifully.",
    description:
      "A cheerful arrangement that balances playful color with a polished finish. This bouquet mixes roses, lisianthus-inspired tones, and airy foliage for a fresh birthday statement.",
    stemCount: "16 hand-selected stems",
    palette: ["Petal Pink", "Butter Cream", "Fresh Sage"],
    occasions: ["Birthday", "Surprise Delivery", "Best Wishes"],
    rating: 4.8,
  },
  {
    slug: "wedding-bouquet",
    name: "Wedding Bouquet",
    category: "Bridal Collection",
    price: "LKR 12,900",
    shortDescription:
      "Romantic wedding florals with delicate texture and a luxurious finish.",
    description:
      "Designed for ceremonies and portraits, this bridal bouquet blends soft roses, creamy blooms, and cascading greenery. The silhouette feels timeless, airy, and premium in every detail.",
    stemCount: "22 bridal stems",
    palette: ["Powder Pink", "Pearl White", "Eucalyptus Green"],
    occasions: ["Wedding", "Engagement", "Bridal Shoot"],
    rating: 5,
  },
];

export const featuredProducts = products.slice(0, 3);

export const reviews: Review[] = [
  {
    name: "Sandeepa",
    title: "Birthday surprise delivery",
    quote:
      "The bouquet looked even softer and more premium in person. Delivery was smooth and the flowers stayed fresh for days.",
  },
  {
    name: "Nethmi",
    title: "Wedding flowers",
    quote:
      "Midori Flora understood the exact mood I wanted for my wedding bouquet. It felt elegant, romantic, and beautifully finished.",
  },
  {
    name: "Amila",
    title: "Reliable late-night order",
    quote:
      "Being open 24 hours really helped. I ordered late and still got a stunning arrangement that felt thoughtfully made.",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
