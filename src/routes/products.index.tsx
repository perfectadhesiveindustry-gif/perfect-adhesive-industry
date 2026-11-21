import { createFileRoute } from "@tanstack/react-router";
import { ProductPanel } from "@/components/site/ProductPanel";
import { PRODUCTS } from "@/lib/site";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Perfect Adhesive Industry (P.A.I)" },
      { name: "description", content: "Catalogue of P.A.I super glues and Asiafix Edge PVC edge-banding adhesive." },
      { property: "og:title", content: "P.A.I Product Catalogue" },
      { property: "og:description", content: "Super glue and edge-banding adhesive from Perfect Adhesive Industry." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <section className="relative bg-ink text-ink-foreground">
        <div className="blueprint absolute inset-0 opacity-30" />
        <div className="container-x relative py-16">
          <p className="eyebrow text-signal">Product Catalogue</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Our adhesives</h1>
        </div>
      </section>
      <section className="container-x space-y-8 py-16">
        {PRODUCTS.map((p, i) => <ProductPanel key={p.slug} product={p} index={i} />)}
      </section>
    </>
  );
}
