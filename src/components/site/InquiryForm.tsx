import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { COMPANY, PRODUCTS, mailtoLink, whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional(),
  phone: z.string().trim().regex(/^\+?[0-9\s-]{7,20}$/, "Enter a valid phone / WhatsApp number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  product: z.string().min(1, "Select a product"),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1500),
});

type Fields = z.infer<typeof schema>;
const empty: Fields = { name: "", company: "", phone: "", email: "", product: "", message: "" };

const input = "w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-ring/30";

export function InquiryForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [v, setV] = useState<Fields>({ ...empty, product: defaultProduct });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState<null | "whatsapp" | "email">(null);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setV((s) => ({ ...s, [k]: e.target.value }));

  const compose = (d: Fields) =>
    `Hello ${COMPANY},\n\nProduct of interest: ${d.product}\n\n${d.message}\n\nName: ${d.name}${d.company ? `\nCompany: ${d.company}` : ""}\nPhone/WhatsApp: ${d.phone}\nEmail: ${d.email}`;

  const submit = (via: "whatsapp" | "email") => {
    const r = schema.safeParse(v);
    if (!r.success) {
      const e: typeof errors = {};
      r.error.issues.forEach((i) => (e[i.path[0] as keyof Fields] ??= i.message));
      setErrors(e);
      setSent(null);
      return;
    }
    setErrors({});
    const text = compose(r.data);
    if (via === "whatsapp") {
      window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(`Product Inquiry: ${r.data.product} — ${COMPANY}`, text);
    }
    setSent(via);
  };

  const err = (k: keyof Fields) => errors[k] && <p className="mt-1 text-xs text-destructive">{errors[k]}</p>;

  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        submit("whatsapp");
      }}
      className="grid gap-4 sm:grid-cols-2"
    >
      <label className="text-sm font-medium">Name *<input className={`${input} mt-1`} value={v.name} onChange={set("name")} />{err("name")}</label>
      <label className="text-sm font-medium">Company (optional)<input className={`${input} mt-1`} value={v.company} onChange={set("company")} />{err("company")}</label>
      <label className="text-sm font-medium">Phone / WhatsApp *<input className={`${input} mt-1`} inputMode="tel" value={v.phone} onChange={set("phone")} />{err("phone")}</label>
      <label className="text-sm font-medium">Email *<input className={`${input} mt-1`} type="email" value={v.email} onChange={set("email")} />{err("email")}</label>
      <label className="text-sm font-medium sm:col-span-2">Product of Interest *
        <select className={`${input} mt-1`} value={v.product} onChange={set("product")}>
          <option value="">Select a product…</option>
          {PRODUCTS.map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
          <option value="General / Distribution inquiry">General / Distribution inquiry</option>
        </select>
        {err("product")}
      </label>
      <label className="text-sm font-medium sm:col-span-2">Message *<textarea rows={5} className={`${input} mt-1`} value={v.message} onChange={set("message")} />{err("message")}</label>
      <div className="flex flex-wrap gap-3 sm:col-span-2">
        <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground hover:bg-whatsapp/90">
          <MessageCircle className="size-4" /> Submit Inquiry via WhatsApp
        </button>
        <button type="button" onClick={() => submit("email")} className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 px-5 py-3 text-sm font-semibold hover:bg-foreground/5">
          <Mail className="size-4" /> Submit via Email
        </button>
      </div>
      {Object.keys(errors).length > 0 && (
        <p className="text-sm text-destructive sm:col-span-2">Please correct the highlighted fields.</p>
      )}
      {sent && (
        <div className="flex gap-3 border border-whatsapp/40 bg-whatsapp/10 p-4 text-sm sm:col-span-2">
          <CheckCircle2 className="size-5 shrink-0 text-whatsapp" />
          <p>
            Your inquiry has been prepared in {sent === "whatsapp" ? "WhatsApp" : "your email app"}. Press <strong>Send</strong> there to deliver it to {COMPANY}. If nothing opened, please use the WhatsApp or email details on this page.
          </p>
        </div>
      )}
    </form>
  );
}
