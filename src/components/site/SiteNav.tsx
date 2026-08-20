import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/content/profile";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-background/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-3xl items-center justify-between px-5 py-3 sm:px-6"
      >
        <a
          href="#home"
          className="font-serif text-sm font-semibold tracking-tight text-foreground"
        >
          K. A. Shafin
        </a>

        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none focus-visible:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-sm border border-border p-1.5 text-foreground md:hidden"
        >
          {open ? <X className="size-4" aria-hidden /> : <Menu className="size-4" aria-hidden />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-rule px-5 pb-4 pt-2 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
