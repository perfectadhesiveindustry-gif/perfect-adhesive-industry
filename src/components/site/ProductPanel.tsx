import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/site";
import { productMailto, productWhatsapp, TBP } from "@/lib/site";
import { EmailButton, WhatsAppButton } from "./ContactButtons";

export function SpecTable({ product }: { product: Product }) {
  const rows = product.specsOnly
    ? product.specs
    : [
        ...product.specs.slice(0, 3),
        { label: "Application", value: product.applications.join(", ") },
        { label: "Packaging", value: product.packaging },
        ...product.specs.slice(3),
      ];
  return (
    <dl className="divide-y border-y">
      {rows.map((r) => (
        <div key={r.label} className="grid grid-cols-[minmax(0,10rem)_1fr] gap-4 py-2.5 text-sm">
          <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{r.label}</dt>
          <dd className={r.value === TBP ? "italic text-muted-foreground/70" : "font-medium"}>
            {r.value === TBP ? "[To be provided]" : r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function ProductPanel({ product, index }: { product: Product; index: number }) {
  return (
    <article id={product.slug} className="grid overflow-hidden border bg-card lg:grid-cols-2">
      <Link to="/products/$slug" params={{ slug: product.slug }} className="group relative block overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[4/3] h-full w-full scale-[1.12] object-contain p-1 transition-transform duration-500 group-hover:scale-[1.18]"
        />
        <span className="eyebrow absolute left-4 top-4 bg-ink px-2 py-1 text-ink-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
      </Link>
      <div className="flex flex-col p-6 md:p-8">
        <p className="eyebrow text-primary">{product.line}</p>
        <h3 className="mt-2 text-2xl font-extrabold md:text-3xl">{product.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.summary}</p>
        <div className="mt-6">
          <SpecTable product={product} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <WhatsAppButton href={productWhatsapp(product.name)} label="Product Inquiry" />
          <EmailButton href={productMailto(product.name)} label="Email Inquiry" />
          <Link to="/products/$slug" params={{ slug: product.slug }} className="inline-flex items-center gap-1 px-2 py-3 text-sm font-semibold text-accent hover:underline">
            Details <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
