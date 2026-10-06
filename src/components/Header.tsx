import { useEffect, useState } from "react";
import { contact, defaultWhatsApp, site } from "../data/site";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(24,34,27,0.35)]" : "bg-white"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex flex-col leading-none" aria-label="Back to top — Opeyemi Precious">
          <span className="font-display text-[19px] font-bold text-ink">{site.brand}</span>
          <span className="mt-1 text-[12px] font-medium tracking-[0.14em] text-muted uppercase">
            {site.role}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-ink/80 transition hover:text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-8"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={defaultWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Discuss Your Project
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-[2px] w-full bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span className={`absolute left-0 top-[7px] h-[2px] w-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-ink/10 bg-white px-5 pt-2 pb-6 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink/8 py-4 text-lg font-semibold"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={defaultWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-4 text-base font-semibold text-white"
          >
            Discuss Your Project <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-3 text-center text-sm text-muted">
            <a href={contact.emailHref} className="underline underline-offset-4">{contact.email}</a>
          </p>
        </div>
      )}
    </header>
  );
}
