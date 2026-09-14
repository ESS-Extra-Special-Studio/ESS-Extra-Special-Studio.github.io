export const shop = {
  name: "ExtraSpecialStudioShop",
  origin: "https://ga0jn9-gj.myshopify.com",
  sitePath: "/shop",
  blurb:
    "Prints and goods from Extra Special Studio, printed to order. Payment stays on the shop. Music merch can sit beside these later.",
  /** Primary browse rails on /shop */
  collections: [
    { title: "This week’s drop", handle: "all", note: "Newest live pieces first.", featured: true, limit: 8 },
    { title: "Vintage geometric", handle: "vintage-geometric", note: "Quiet grids, bands, and Bauhaus-leaning prints." },
    { title: "Calm home", handle: "calm-home", note: "Wall art, pillows, and throws for quiet rooms." },
    { title: "Wall art", handle: "wall-art", note: "Matte prints for shelves and walls." },
    { title: "Desk and carry", handle: "desk-and-carry", note: "Mugs, notebooks, totes, and desk smalls." },
    { title: "Under £10", handle: "under-10", note: "Small goods and cards that stay easy to gift." },
    { title: "Prints", handle: "prints", note: "Art prints, postcards, and cards." },
    { title: "Goods", handle: "goods", note: "Mugs, totes, and the rest of the range." },
  ],
  themes: [
    { slug: "vintage-geometric", title: "Vintage geometric", handle: "vintage-geometric", lede: "Quiet grids and calm geometry — posters and matching goods." },
    { slug: "calm-home", title: "Calm home", handle: "calm-home", lede: "Wall art, pillows, and throws without loud graphics." },
    { slug: "wall-art", title: "Wall art", handle: "wall-art", lede: "Matte art prints for quiet walls." },
    { slug: "desk-and-carry", title: "Desk and carry", handle: "desk-and-carry", lede: "Mugs, notebooks, totes, and desk companions." },
    { slug: "under-10", title: "Under £10", handle: "under-10", lede: "Cards and small goods that stay easy to gift." },
  ],
};
