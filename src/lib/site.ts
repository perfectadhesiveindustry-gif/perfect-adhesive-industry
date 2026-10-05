import superFastGlue from "@/assets/super-fast-glue.jpg.asset.json";
import displayCards from "@/assets/display-cards.jpg.asset.json";
import asiafixEdge from "@/assets/asiafix-edge.jpg.asset.json";
import asiafixCartons from "@/assets/asiafix-cartons.jpg.asset.json";
import bulkPackaging from "@/assets/bulk-packaging.jpg.asset.json";
import precisionGlue from "@/assets/precision-super-glue.jpg.asset.json";

export const COMPANY = "Perfect Adhesive Industry";
export const WHATSAPP_DISPLAY = "+92 312 7174808";
export const WHATSAPP_DIGITS = "923127174808";
export const EMAIL = "perfectadhesiveindustry@gmail.com";
export const ADDRESS = "Hafizabad Road, Gujranwala, 52250, Pakistan";
export const MAP_QUERY = "Hafizabad Road, Gujranwala 52250";

/** Editable placeholders — replace once the owner confirms. */
export const OWNER_NAME = "[Owner Name]";
export const OWNER_TITLE = "[Owner Title]";
export const BUSINESS_HOURS = "[Business hours — to be provided]";
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
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL}?${params.join("&")}`;
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
  ].map((label) => ({ label, value: overrides[label] ?? TBP }));

export const PRODUCTS: Product[] = [
  {
    slug: "pai-super-fast-glue",
    name: "P.A.I Super Fast Glue",
    line: "Instant adhesive · D20 bottle",
    image: superFastGlue.url,
    summary:
      "P.A.I Super Fast Glue, supplied in retail box packaging with the P.A.I Super Glue D20 bottle.",
    applications: ["General-purpose bonding", "Household and workshop repairs"],
    industries: ["Retail", "Hardware stores", "Workshops"],
    packaging: "Retail box with D20 bottle",
    specs: specs(),
  },
  {
    slug: "pai-super-fast-glue-display",
    name: "P.A.I Super Fast Glue — Display Cards",
    line: "20-count retail · 12-count wholesale",
    image: displayCards.url,
    summary:
      "P.A.I Super Fast Glue tubes mounted on branded display cards, available as a 20-count retail display and a 12-count wholesale display.",
    applications: ["Counter display for retail shops", "Wholesale distribution"],
    industries: ["Retailers", "Wholesalers", "Distributors"],
    packaging: "20-count retail display card · 12-count wholesale display card",
    specs: specs(),
  },
  {
    slug: "pai-precision-super-glue",
    name: "P.A.I Precision / Extra Super Glue",
    line: "Single-tube card & box pack",
    image: precisionGlue.url,
    summary:
      "P.A.I Precision Super Glue on a single-tube card, alongside the P.A.I Extra Super Glue box pack.",
    applications: ["Plastic", "Wood", "Metal", "Leather", "Glass", "Ceramics", "Rubber"],
    industries: ["Retail", "Hardware", "Repair & maintenance"],
    packaging: "Single-tube blister card · Box pack",
    specs: specs(),
  },
  {
    slug: "asiafix-edge-ultra-fixer",
    name: "Asiafix Edge Ultra Fixer",
    line: "PVC edge banding adhesive",
    image: asiafixEdge.url,
    gallery: [asiafixCartons.url],
    summary:
      "Asiafix Edge Ultra Fixer by P.A.I — fast drying with an easy spreader, made specially for PVC edge banding.",
    applications: ["PVC edge banding"],
    industries: ["Furniture manufacturing", "Carpentry & woodwork", "Interior fit-out"],
    packaging: "350 gm bottle · Carton of 24 pcs (350 gm × 24)",
    specs: specs(),
  },
  {
    slug: "bulk-industrial-supply",
    name: "Bulk Industrial Supply",
    line: "20 kg · 25 kg · 1000 kg",
    image: bulkPackaging.url,
    summary:
      "Adhesive supplied in bulk industrial containers for manufacturers and high-volume buyers.",
    applications: ["High-volume production lines", "Industrial and contract manufacturing"],
    industries: ["Manufacturers", "Industrial buyers", "Distributors"],
    packaging: "20 kg/drum · 25 kg/drum · 1000 kg IBC tote",
    specs: specs(),
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
