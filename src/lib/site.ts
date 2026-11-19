export const COMPANY = "Perfect Adhesive Industry";
export const WHATSAPP_DISPLAY = "+92 308 6414402";
export const WHATSAPP_DIGITS = "923086414402";
export const EMAIL = "contact@pai-adhesive.pk";
export const ADDRESS = "Hafizabad Road, Gujranwala, 52250, Pakistan";
export const MAP_QUERY = "Hafizabad Road, Gujranwala 52250";

/** Editable placeholders â€” replace once the owner confirms. */
export const OWNER_NAME = "Hafiz Moazzam Hussain";
export const OWNER_TITLE = "Founder & Chief Executive";
export const BUSINESS_HOURS = "Monday â€“ Saturday, 9:00 AM â€“ 6:00 PM (Sunday closed)";
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

export function mailtoLink(subject = `Product Inquiry â€” ${COMPANY}`, body?: string) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL}?${params.join("&")}`;
}

export function productMailto(name: string) {
  return mailtoLink(
    `Product Inquiry: ${name} â€” ${COMPANY}`,
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
  ].map((label) => ({ label, value: overrides[label] ?? TBP }));

export const PRODUCTS: Product[] = [
  {
    slug: "pai-super-fast-glue-50gm",
    name: "P.A.I Super Fast Glue 50gm",
    line: "50gm bottle Â· Available in 1g, 2g, 20g, 50g",
    image: "/products/pai-super-fast-glue-50gm.png",
    gallery: ["/products/pai-super-fast-glue-50gm-carton.png", "/products/pai-super-fast-glue-20gm.png", "/products/pai-super-fast-glue-20gm-carton.png"],
    summary:
      "P.A.I Super Fast Glue in a 50gm bottle with spare nozzles, supplied in single and multi-pack boxes. Also available in 1g, 2g and 20g sizes.",
    applications: ["Metals", "Rubber", "Plastic", "Wood", "Ceramics"],
    industries: ["Retail", "Hardware stores", "Workshops", "Furniture & fittings"],
    packaging: "50gm bottle in individual box Â· Multi-pack carton Â· Sizes: 1g, 2g, 20g, 50g",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20Â°C to 25Â°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3â€“5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive Â· Spare nozzles included" }),
  },
  {
    slug: "pai-super-fast-glue",
    name: "P.A.I Super Fast Glue",
    line: "Instant adhesive Â· D20 bottle",
    image: "/products/pai-super-fast-glue-20gm.png",
    gallery: ["/products/pai-super-fast-glue-20gm-carton.png", "/products/pai-super-fast-glue-50gm.png"],
    summary:
      "P.A.I Super Fast Glue, supplied in retail box packaging with the P.A.I Super Glue D20 bottle.",
    applications: ["General-purpose bonding", "Household and workshop repairs"],
    industries: ["Retail", "Hardware stores", "Workshops"],
    packaging: "Retail box with D20 bottle",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20Â°C to 25Â°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3â€“5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive" }),
  },
  {
    slug: "pai-super-fast-glue-display",
    name: "P.A.I Super Fast Glue â€” Display Cards",
    line: "20-count retail Â· 12-count wholesale",
    image: "/products/pai-super-fast-glue-display-cards.png",
    summary:
      "P.A.I Super Fast Glue tubes mounted on branded display cards, available as a 20-count retail display and a 12-count wholesale display.",
    applications: ["Counter display for retail shops", "Wholesale distribution"],
    industries: ["Retailers", "Wholesalers", "Distributors"],
    packaging: "20-count retail display card Â· 12-count wholesale display card",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20Â°C to 25Â°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3â€“5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive" }),
  },
  {
    slug: "pai-precision-super-glue",
    name: "P.A.I Precision / Extra Super Glue",
    line: "Single-tube card & box pack",
    image: "/products/pai-precision-extra-super-glue.png",
    summary:
      "P.A.I Precision Super Glue on a single-tube card, alongside the P.A.I Extra Super Glue box pack.",
    applications: ["Plastic", "Wood", "Metal", "Leather", "Glass", "Ceramics", "Rubber"],
    industries: ["Retail", "Hardware", "Repair & maintenance"],
    packaging: "Single-tube blister card Â· Box pack",
    specs: specs({ Viscosity: "Low (thin, fast-flowing liquid)", Strength: "High bond strength on most rigid materials", "Temperature Resistance": "20Â°C to 25Â°C", "Color / Appearance": "Clear, colourless liquid", "Setting Time": "3â€“5 seconds (full cure ~24 hours)", "Shelf Life": "12 months unopened, stored cool and dry", "Other Specifications": "Cyanoacrylate-based instant adhesive" }),
  },
  {
    slug: "asiafix-edge-ultra-fixer",
    name: "Asiafix Edge Ultra Fixer",
    line: "PVC edge banding adhesive",
    image: "/products/asiafix-edge-ultra-fixer.png",
    gallery: ["/products/asiafix-edge-cartons.png"],
    summary:
      "Asiafix Edge Ultra Fixer by P.A.I â€” fast drying with an easy spreader, made specially for PVC edge banding.",
    applications: ["PVC edge banding"],
    industries: ["Furniture manufacturing", "Carpentry & woodwork", "Interior fit-out"],
    packaging: "350 gm bottle Â· Carton of 24 pcs (350 gm Ã— 24)",
    specs: specs({ Viscosity: "Mediumâ€“high (spreadable)", Strength: "Strong, durable bond for PVC edge to board", "Temperature Resistance": "20Â°C to 25Â°C", "Color / Appearance": "White / creamy, dries clear-ish", "Setting Time": "Quick dry â€” tack in minutes, full strength in ~24 hours", "Shelf Life": "12 months in sealed container", "Other Specifications": "Supplied with easy spreader nozzle" }),
  },
];

export const getProduct = (slug: string) => PRODUCTS.find((p) => p.slug === slug);
