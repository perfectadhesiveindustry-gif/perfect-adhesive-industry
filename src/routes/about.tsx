import { createFileRoute } from "@tanstack/react-router";
import owner from "@/assets/owner.jpg.asset.json";
import { EmailButton, WhatsAppButton } from "@/components/site/ContactButtons";
import { COMPANY, OWNER_NAME, OWNER_TITLE, mailtoLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Perfect Adhesive Industry (P.A.I)" },
      { name: "description", content: "Company profile of Perfect Adhesive Industry, adhesive manufacturer in Gujranwala, Pakistan." },
      { property: "og:title", content: "About Perfect Adhesive Industry" },
      { property: "og:description", content: "Who we are, how we work, and the people behind P.A.I adhesives." },
    ],
  }),
  component: About,
});

const PILLARS = [
  { t: "Professional identity", d: "A registered adhesive company trading under the P.A.I and Asiafix brands." },
  { t: "Manufacturing expertise", d: "Instant super glues and PVC edge-banding adhesive produced and packed in-house." },
  { t: "Commitment to quality", d: "A consistent approach to product quality, packaging and dependable supply." },
  { t: "Customer focus", d: "Direct contact with the manufacturer for retailers, distributors and industrial buyers." },
  { t: "Product reliability", d: "Consistent formulations and packaging customers can recognise and reorder." },
  { t: "Industrial approach", d: "Supply from single retail packs up to 1000 kg industrial totes." },
];

function About() {
  return (
    <>
      <section className="relative bg-ink text-ink-foreground">
        <div className="blueprint absolute inset-0 opacity-30" />
        <div className="container-x relative py-16 md:py-20">
          <p className="eyebrow text-signal">About Us</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black md:text-5xl">{COMPANY}</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-muted">Adhesive manufacturer and supplier based on Hafizabad Road, Gujranwala.</p>
        </div>
      </section>

      <section className="container-x py-20">
        <div>
          <p className="eyebrow text-primary">Background</p>
          <h2 className="mt-3 text-3xl font-extrabold">Company profile</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {COMPANY} (P.A.I) manufactures and supplies adhesives for retail, trade and industrial customers.
            Our products include P.A.I Super Fast Glue, P.A.I Precision and Extra Super Glue, and Asiafix Edge
            Ultra Fixer for PVC edge banding, with bulk supply available for manufacturers.
          </p>
                  </div>
      </section>

      <section className="border-y bg-secondary/60 py-20">
        <div className="container-x grid gap-px border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.t} className="bg-card p-6">
              <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x grid items-center gap-12 py-20 md:grid-cols-[minmax(0,26rem)_1fr]">
        <img src={owner.url} alt={`${OWNER_NAME}, ${COMPANY}`} className="aspect-[4/5] w-full object-cover object-top" />
        <div>
          <p className="eyebrow text-primary">Leadership</p>
          <h2 className="mt-3 text-4xl font-extrabold">{OWNER_NAME}</h2>
          <p className="mt-1 font-mono text-sm uppercase tracking-wider text-muted-foreground">{OWNER_TITLE}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">Hafiz Moazzam Hussain leads Perfect Adhesive Industry with a focus on consistent quality, honest dealing and dependable supply. Under his direction, P.A.I serves retailers, distributors and manufacturers with adhesives they can trust, backed by direct, personal service.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton href={whatsappLink()} label="Contact via WhatsApp" />
            <EmailButton href={mailtoLink()} />
          </div>
        </div>
      </section>
    </>
  );
}
