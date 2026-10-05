import { Mail, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export const btn = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-primary/90"),
  whatsapp: cn(base, "bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"),
  outline: cn(base, "border border-foreground/20 text-foreground hover:bg-foreground/5"),
  outlineInk: cn(base, "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10"),
};

export function WhatsAppButton({ href, label = "Chat on WhatsApp", className }: { href: string; label?: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cn(btn.whatsapp, className)}>
      <MessageCircle className="size-4" /> {label}
    </a>
  );
}

export function EmailButton({ href, label = "Email Us", className, ink }: { href: string; label?: string; className?: string; ink?: boolean }) {
  return (
    <a href={href} className={cn(ink ? btn.outlineInk : btn.outline, className)}>
      <Mail className="size-4" /> {label}
    </a>
  );
}
