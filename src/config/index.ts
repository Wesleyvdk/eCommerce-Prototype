export const PRODUCT_CATEGORIES = [
  {
    label: "Shirts",
    value: "ui_kits" as const,
    featured: [
      {
        name: "Creator picks",
        href: `/products?category=ui_kits`,
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=ui_kits",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    label: "Hoodies",
    value: "icons" as const,
    featured: [
      {
        name: "Favorite Hoodie Picks",
        href: `/products?category=icons`,
        imageSrc: "/nav/icons/picks.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=icons&sort=desc",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "Bestselling Hoodies",
        href: "/products?category=icons",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
    ],
  },
];
