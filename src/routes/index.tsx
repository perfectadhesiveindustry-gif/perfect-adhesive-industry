import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Factory, MessageCircle, PackageCheck, Truck } from "lucide-react";
import owner from "@/assets/owner.jpg.asset.json";
import { InquiryForm } from "@/components/site/InquiryForm";
import { EmailButton, WhatsAppButton, btn } from "@/components/site/ContactButtons";
import { ADDRESS, COMPANY, EMAIL, OWNER_NAME, OWNER_TITLE, PRODUCTS, WHATSAPP_DISPLAY, mailtoLink, productWhatsapp, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Perfect Adhesive Industry (P.A.I) â€” Adhesive Manufacturer, Gujranwala" },
      { name: "description", content: "P.A.I super glue, Asiafix Edge PVC edge-banding adhesive and bulk industrial adhesive supply from Gujranwala, Pakistan." },
      { property: "og:title", content: "Perfect Adhesive Industry (P.A.I)" },
      { property: "og:description", content: "Adhesive manufacturer and supplier â€” super glue, edge-banding adhesive and bulk supply." },
    ],
  }),
  component: Home,
});

const STRENGTHS = [
  { icon: Factory, title: "In-house production", text: "Adhesives produced at our own facility on Hafizabad Road, Gujranwala." },
  { icon: Boxes, title: "Retail to bulk", text: "From single-tube cards and display boards to 1000 kg industrial totes." },
  { icon: PackageCheck, title: "Branded packaging", text: "Recognisable P.A.I and Asiafix packaging for retailers and distributors." },
  { icon: Truck, title: "Distributor supply", text: "Wholesale display packs designed for dealers and trade counters." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="blueprint absolute inset-0 opacity-40" />
        <div className="container-x relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.05fr_1fr]">
          <div className="fade-up">
            <p className="eyebrow text-signal">Adhesive Manufacturer Â· Gujranwala, Pakistan</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.02] md:text-6xl">
              Perfect Adhesive Industry
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
              Makers of P.A.I Super Glue and Asiafix Edge â€” adhesives for retail shelves, workshops,
              furniture makers and industrial buyers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className={btn.primary}>View Products <ArrowRight className="size-4" /></Link>
              <WhatsAppButton href={whatsappLink()} />
              <EmailButton href={mailtoLink()} ink />
            </div>
          </div>
          <div className="fade-up relative" style={{ animationDelay: "120ms" }}>
            <img src="/products/pai-super-fast-glue-20gm.png" alt="P.A.I Super Fast Glue box and D20 bottle" className="w-full border border-ink-line shadow-2xl" />
            <div className="absolute -bottom-4 left-4 bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">P.A.I Super Fast Glue</div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-x grid gap-10 py-20 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Who we are</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">A registered adhesive manufacturer serving trade and industry.</h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {COMPANY} (P.A.I) manufactures and supplies adhesives under the P.A.I and Asiafix brands.
          Our range covers instant super glues in retail and wholesale packs, PVC edge-banding adhesive for
          the furniture trade, and bulk supply in drums and IBC totes for manufacturers.
        </p>
      </section>

      {/* Featured products */}
      <section className="border-y bg-secondary/60 py-20">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow text-primary">Product range</p>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Featured adhesives</h2>
            </div>
            <Link to="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">Full catalogue <ArrowRight className="size-4" /></Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article key={p.slug} className="group flex flex-col border bg-card">
                <Link to="/products/$slug" params={{ slug: p.slug }} className="block overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="aspect-[4/3] w-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]" />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <p className="eyebrow text-muted-foreground">{p.line}</p>
                  <h3 className="mt-1 text-lg font-bold">{p.name}</h3>
                  <div className="mt-auto flex gap-4 pt-4 text-sm font-semibold">
                    <Link to="/products/$slug" params={{ slug: p.slug }} className="text-accent hover:underline">Details</Link>
                    <a href={productWhatsapp(p.name)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-whatsapp hover:underline">
                      <MessageCircle className="size-4" /> Inquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="container-x py-20">
        <p className="eyebrow text-primary">Why P.A.I</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold md:text-4xl">Built for dependable supply.</h2>
        <div className="mt-10 grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {STRENGTHS.map((s) => (
            <div key={s.title} className="bg-card p-6">
              <s.icon className="size-7 text-primary" />
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Owner */}
      <section className="container-x grid items-center gap-10 py-20 md:grid-cols-[minmax(0,22rem)_1fr]">
        <img src={owner.url} alt={`${OWNER_NAME}, ${COMPANY}`} loading="lazy" className="aspect-[4/5] w-full object-cover object-top" />
        <div>
          <p className="eyebrow text-primary">Leadership</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">{OWNER_NAME}</h2>
          <p className="mt-1 font-mono text-sm uppercase tracking-wider text-muted-foreground">{OWNER_TITLE} Â· {COMPANY}</p>
          <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
            Hafiz Moazzam Hussain leads Perfect Adhesive Industry with a focus on consistent quality, honest dealing and dependable supply. Under his direction, P.A.I serves retailers, distributors and manufacturers with adhesives they can trust, backed by direct, personal service.
          </p>
          <Link to="/about" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline">About the company <ArrowRight className="size-4" /></Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-extrabold md:text-3xl">Customers & distributors â€” let's talk.</h2>
            <p className="mt-2 opacity-90">Ask about products, wholesale packs or bulk supply.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton href={whatsappLink()} label={`WhatsApp ${WHATSAPP_DISPLAY}`} />
            <EmailButton href={mailtoLink()} ink />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="eyebrow text-primary">Contact</p>
          <h2 className="mt-3 text-3xl font-extrabold">Request product information</h2>
          <dl className="mt-8 space-y-5 text-sm">
            <div><dt className="eyebrow text-muted-foreground">WhatsApp</dt><dd><a className="text-lg font-semibold hover:text-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a></dd></div>
            <div><dt className="eyebrow text-muted-foreground">Email</dt><dd><a className="break-all text-lg font-semibold hover:text-primary" href={mailtoLink()}>{EMAIL}</a></dd></div>
            <div><dt className="eyebrow text-muted-foreground">Address</dt><dd className="text-lg font-semibold">{ADDRESS}</dd></div>
          </dl>
        </div>
        <div className="border bg-card p-6 md:p-8"><InquiryForm /></div>
      </section>
    </>
  );
}
