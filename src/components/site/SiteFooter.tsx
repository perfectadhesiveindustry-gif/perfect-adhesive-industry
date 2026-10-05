import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./SiteHeader";
import { ADDRESS, COMPANY, EMAIL, PRODUCTS, WHATSAPP_DIGITS, WHATSAPP_DISPLAY, mailtoLink, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-muted">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed">Adhesive manufacturer and supplier based in Gujranwala, Pakistan.</p>
        </div>
        <div>
          <h4 className="eyebrow mb-4 text-ink-foreground">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-ink-foreground">About Us</Link></li>
            <li><Link to="/products" className="hover:text-ink-foreground">Products</Link></li>
            <li><Link to="/contact" className="hover:text-ink-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4 text-ink-foreground">Products</h4>
          <ul className="space-y-2 text-sm">
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-ink-foreground">{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="eyebrow mb-4 text-ink-foreground">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex gap-2 hover:text-ink-foreground"><MessageCircle className="size-4 shrink-0" />{WHATSAPP_DISPLAY}</a></li>
            <li><a href={`tel:+${WHATSAPP_DIGITS}`} className="flex gap-2 hover:text-ink-foreground"><Phone className="size-4 shrink-0" />Call {WHATSAPP_DISPLAY}</a></li>
            <li><a href={mailtoLink()} className="flex gap-2 break-all hover:text-ink-foreground"><Mail className="size-4 shrink-0" />{EMAIL}</a></li>
            <li className="flex gap-2"><MapPin className="size-4 shrink-0" />{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="container-x py-5 text-xs">© {new Date().getFullYear()} {COMPANY}. All rights reserved.</div>
      </div>
    </footer>
  );
}
