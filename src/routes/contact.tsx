import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { InquiryForm } from "@/components/site/InquiryForm";
import { ADDRESS, BUSINESS_HOURS, EMAIL, MAP_QUERY, WHATSAPP_DIGITS, WHATSAPP_DISPLAY, mailtoLink, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Perfect Adhesive Industry (P.A.I)" },
      { name: "description", content: "Contact Perfect Adhesive Industry on WhatsApp +92 308 6414402 or email. Hafizabad Road, Gujranwala." },
      { property: "og:title", content: "Contact Perfect Adhesive Industry" },
      { property: "og:description", content: "Request product information via WhatsApp, email or the inquiry form." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP_DISPLAY, href: whatsappLink(), ext: true },
    { icon: Phone, label: "Phone", value: WHATSAPP_DISPLAY, href: `tel:+${WHATSAPP_DIGITS}` },
    { icon: Mail, label: "Email", value: EMAIL, href: mailtoLink() },
    { icon: MapPin, label: "Address", value: ADDRESS },
    { icon: Clock, label: "Business hours", value: BUSINESS_HOURS },
  ];
  return (
    <>
      <section className="relative bg-ink text-ink-foreground">
        <div className="blueprint absolute inset-0 opacity-30" />
        <div className="container-x relative py-16">
          <p className="eyebrow text-signal">Contact Us</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Request Product Information</h1>
          <p className="mt-4 max-w-2xl text-ink-muted">Message us on WhatsApp, send an email, or fill in the inquiry form.</p>
        </div>
      </section>
      <section className="container-x grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-px border bg-border">
          {items.map((i) => (
            <li key={i.label} className="flex gap-4 bg-card p-5">
              <i.icon className="mt-0.5 size-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow text-muted-foreground">{i.label}</p>
                {i.href ? (
                  <a href={i.href} {...(i.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="break-all font-semibold hover:text-primary">{i.value}</a>
                ) : (
                  <p className={i.value.startsWith("[") ? "italic text-muted-foreground" : "font-semibold"}>{i.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
        <div className="border bg-card p-6 md:p-8">
          <h2 className="mb-6 text-2xl font-extrabold">Inquiry form</h2>
          <InquiryForm />
        </div>
      </section>
      <section className="container-x pb-20">
        <iframe
          title="Perfect Adhesive Industry location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`}
          className="h-[380px] w-full border"
          loading="lazy"
        />
      </section>
    </>
  );
}
