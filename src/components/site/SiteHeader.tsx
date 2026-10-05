import { Link } from "@tanstack/react-router";
import { Mail, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png.asset.json";
import { COMPANY, EMAIL, WHATSAPP_DISPLAY, mailtoLink, whatsappLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo.url} alt="" className="h-9 w-auto" />
      <span className="leading-none">
        <span className={`block font-display text-lg font-extrabold tracking-tight ${light ? "text-ink-foreground" : "text-foreground"}`}>
          P.A.I
        </span>
        <span className={`block text-[11px] font-medium uppercase tracking-[0.14em] ${light ? "text-ink-muted" : "text-muted-foreground"}`}>
          {COMPANY}
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-ink text-ink-muted">
        <div className="container-x flex h-9 items-center justify-between text-xs">
          <span className="hidden sm:block">Hafizabad Road, Gujranwala</span>
          <div className="flex items-center gap-5">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink-foreground">
              <MessageCircle className="size-3.5" /> {WHATSAPP_DISPLAY}
            </a>
            <a href={mailtoLink()} className="hidden items-center gap-1.5 hover:text-ink-foreground md:flex">
              <Mail className="size-3.5" /> {EMAIL}
            </a>
          </div>
        </div>
      </div>
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container-x flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground hover:bg-whatsapp/90"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </nav>
          <button aria-label="Open menu" className="lg:hidden" onClick={() => setOpen((o) => !o)}>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t lg:hidden">
            <nav className="container-x flex flex-col py-4">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b py-3 font-medium last:border-0">
                  {n.label}
                </Link>
              ))}
              <div className="mt-4 grid gap-3">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-sm bg-whatsapp py-3 font-semibold text-whatsapp-foreground">
                  <MessageCircle className="size-4" /> WhatsApp {WHATSAPP_DISPLAY}
                </a>
                <a href={mailtoLink()} className="flex items-center justify-center gap-2 rounded-sm border py-3 text-sm font-medium">
                  <Mail className="size-4" /> {EMAIL}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
