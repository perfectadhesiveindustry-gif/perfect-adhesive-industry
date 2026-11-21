export const COMPANY = "Perfect Adhesive Industry";
export const WHATSAPP_DISPLAY = "+92 308 6414402";
export const WHATSAPP_DIGITS = "923086414402";
export const EMAIL = "contact@pai-adhesive.pk";
export const ADDRESS = "Hafizabad Road, Gujranwala, 52250, Pakistan";
export const MAP_QUERY = "Hafizabad Road, Gujranwala 52250";

/** Editable placeholders — replace once the owner confirms. */
export const OWNER_NAME = "Hafiz Moazzam Hussain";
export const OWNER_TITLE = "Founder & Chief Executive";
export const BUSINESS_HOURS = "Monday – Saturday, 9:00 AM – 6:00 PM (Sunday closed)";
export const TBP = "To be provided";

export function whatsappLink(message?: string) {
  const text =
    message ?? `Hello ${COMPANY}, I would like more information about your adhesive products.`;
  return `https://wa.me/${WHATSAPP_DIGITS}?text=${encodeURIComponent(text)}`;
}

export function productWhatsapp(name: string) {
  return whatsappLink(
    `Hello ${COMPANY}, I am interested in your ${name}. Please provide me with more information.`,
  );
}

export function mailtoLink(subject = `Product Inquiry — ${COMPANY}`, body?: string) {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: EMAIL, su: subject });
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export function productMailto(name: string) {
  return mailtoLink(
    `Product Inquiry: ${name} — ${COMPANY}`,
    `Hello ${COMPANY},\n\nI am interested in your ${name}. Please provide me with more information.\n\nThank you.`,
  );
}

export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  line: string;
  image: string;
  gallery?: string[];
  summary: string;
  applications: string[];
  industries: string[];
  packaging: string;
  specs: Spec[];
  /** When true, the parameter table shows only `specs` (no application/packaging rows). */
  specsOnly?: boolean;
};

const specs = (overrides: Partial<Record<string, string>> = {}): Spec[] =>
  [
    "Viscosity",
    "Strength",
    "Temperature Resistance",
    "Color / Appearance",
    "Setting Time",
    "Shelf Life",
    "Other Specifications",
  ].filter((label) => overrides[label] !== "").map((label) => ({ label, value: overrides[label] ?? TBP }));

export const PRODUCTS: Product[] = [
  {
    slug: "pai-super-fast-glue-50gm",
    name: "P.A.I Super Fast Glue 50gm",
    line: "50gm bottle · Available in 1g, 2g, 20g, 50g",
    image: "/products/pai-super-fast-glue-50gm-actual.jpg",
    gallery: ["/products/pai-super-fast-glue-carton-stock-actual.jpg", "/products/pai-super-fast-glue-20gm-actual.jpg", "/products/pai-super-fast-glue-carton-actual.jpg", "/products/pai-super-fast-glue-carton-alt-actual.jpg"],
    summary:
      "P.A.I Super Fast Glue in a 50gm bottle with spare nozzles, supplied in single and multi-pack boxes. Also available in 1g, 2g and 20g sizes.",
    applications: ["Metals", "Rubber", "Plastic", "Wood", "Ceramics"],
    industries: ["Retail", "Hardware stores", "Workshops", "Furniture & fittings"],
    packaging: "50gm bottle in individual box · Multi-pack carton · Sizes: 1g, 2g, 20g, 50g",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20°C to 25°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3–5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive · Spare nozzles included" }),
  },
  {
    slug: "pai-super-fast-glue",
    name: "P.A.I Super Fast Glue",
    line: "Instant adhesive · D20 bottle",
    image: "/products/pai-super-fast-glue-20gm-actual.jpg",
    gallery: ["/products/pai-super-fast-glue-carton-actual.jpg", "/products/pai-super-fast-glue-50gm-actual.jpg", "/products/pai-super-fast-glue-carton-alt-actual.jpg"],
    summary:
      "P.A.I Super Fast Glue, supplied in retail box packaging with the P.A.I Super Glue D20 bottle.",
    applications: ["General-purpose bonding", "Household and workshop repairs"],
    industries: ["Retail", "Hardware stores", "Workshops"],
    packaging: "Retail box with D20 bottle",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20°C to 25°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3–5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive" }),
  },
  {
    slug: "pai-super-fast-glue-display",
    name: "P.A.I Super Fast Glue — Display Cards",
    line: "20-count retail · 12-count wholesale",
    image: "/products/pai-super-fast-glue-display-card-actual.jpg",
    gallery: ["/products/pai-super-fast-glue-display-card-alt-actual.jpg"],
    summary:
      "P.A.I Super Fast Glue tubes mounted on branded display cards, available as a 20-count retail display and a 12-count wholesale display.",
    applications: ["Counter display for retail shops", "Wholesale distribution"],
    industries: ["Retailers", "Wholesalers", "Distributors"],
    packaging: "20-count retail display card · 12-count wholesale display card",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20°C to 25°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3–5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive" }),
  },
  {
    slug: "pai-precision-super-glue",
    name: "P.A.I Precision / Extra Super Glue",
    line: "Single-tube card & box pack",
    image: "/products/pai-precision-extra-super-glue-actual.jpg",
    summary:
      "P.A.I Precision Super Glue on a single-tube card, alongside the P.A.I Extra Super Glue box pack.",
    applications: ["Plastic", "Wood", "Metal", "Leather", "Glass", "Ceramics", "Rubber"],
    industries: ["Retail", "Hardware", "Repair & maintenance"],
    packaging: "Single-tube blister card · Box pack",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20°C to 25°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3–5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive" }),
  },
  {
    slug: "asiafix-edge-ultra-fixer",
    name: "Asiafix Edge Ultra Fixer",
    line: "PVC edge banding adhesive",
    image: "/products/asiafix-edge-ultra-fixer-actual.jpg",
    gallery: ["/products/asiafix-edge-cartons-actual.jpg"],
    summary:
      "Asiafix Edge Ultra Fixer by P.A.I — fast drying with an easy spreader, made specially for PVC edge banding.",
    applications: ["PVC edge banding"],
    industries: ["Furniture manufacturing", "Carpentry & woodwork", "Interior fit-out"],
    packaging: "350 gm bottle · Carton of 24 pcs (350 gm × 24)",
    specs: specs({ Viscosity: "Medium–high (spreadable)", Strength: "Strong, durable bond for PVC edge to board", "Temperature Resistance": "20°C to 25°C", "Color / Appearance": "White / creamy, dries clear-ish", "Setting Time": "Quick dry — tack in minutes, full strength in ~24 hours", "Shelf Life": "12 months in sealed container", "Other Specifications": "Supplied with easy spreader nozzle" }),
  },
  {
    slug: "pai-super-fast-glue-activator-spray",
    name: "P.A.I Super Fast Glue Activator Spray",
    line: "Activator spray",
    image: "/products/pai-super-fast-glue-activator-spray-actual.jpg",
    summary:
      "P.A.I Super Fast Glue Activator Spray. Contact P.A.I for product-specific usage guidance and pack details.",
    applications: [],
    industries: ["Retail", "Hardware stores", "Workshops"],
    packaging: "200 ml spray can",
    specs: specs({
      Viscosity: "1500 CPS",
      Strength: "≥22 MPa",
      "Temperature Resistance": "",
      "Color / Appearance": "Clear / colourless",
      "Setting Time": "3 seconds",
      "Shelf Life": "36 months",
      "Other Specifications": "Cyanoacrylate activator",
    }),
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
