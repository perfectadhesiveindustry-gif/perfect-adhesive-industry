import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SpecTable } from "@/components/site/ProductPanel";
import { EmailButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { InquiryForm } from "@/components/site/InquiryForm";
import { getProduct, productMailto, productWhatsapp } from "@/lib/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    const title = p ? `${p.name} — Perfect Adhesive Industry` : "Product — Perfect Adhesive Industry";
    const desc = p?.summary ?? "P.A.I adhesive product details.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  return (
    <>
      <div className="container-x pt-8">
        <Link to="/products" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> All products
        </Link>
      </div>
      <section className="container-x grid gap-10 py-8 lg:grid-cols-2">
        <div className="space-y-4">
          <img src={p.image} alt={p.name} className="max-h-[560px] w-full scale-[1.08] border bg-muted object-contain p-1" />
          {p.gallery?.map((g) => <img key={g} src={g} alt={`${p.name} packaging`} className="max-h-[460px] w-full scale-[1.06] border bg-muted object-contain p-1" />)}
        </div>
        <div>
          <p className="eyebrow text-primary">{p.line}</p>
          <h1 className="mt-2 text-3xl font-black md:text-4xl">{p.name}</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">{p.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton href={productWhatsapp(p.name)} label="Request Product Information" />
            <EmailButton href={productMailto(p.name)} label="Send Inquiry" />
          </div>
          <h2 className="eyebrow mt-10 mb-3 text-muted-foreground">Technical parameters</h2>
          <SpecTable product={p} />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h2 className="eyebrow mb-3 text-muted-foreground">Applications</h2>
              <ul className="flex flex-wrap gap-2">{p.applications.map((a) => <li key={a} className="border px-2.5 py-1 text-sm">{a}</li>)}</ul>
            </div>
            <div>
              <h2 className="eyebrow mb-3 text-muted-foreground">Suitable for</h2>
              <ul className="flex flex-wrap gap-2">{p.industries.map((a) => <li key={a} className="border px-2.5 py-1 text-sm">{a}</li>)}</ul>
            </div>
          </div>
          <div className="mt-6">
            <h2 className="eyebrow mb-2 text-muted-foreground">Packaging</h2>
            <p className="font-medium">{p.packaging}</p>
          </div>
        </div>
      </section>
      <section className="border-t bg-secondary/60 py-16">
        <div className="container-x max-w-3xl">
          <h2 className="text-2xl font-extrabold">Inquire about {p.name}</h2>
          <div className="mt-6 border bg-card p-6"><InquiryForm defaultProduct={p.name} /></div>
        </div>
      </section>
    </>
  );
}
