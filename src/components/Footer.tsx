import { contact, defaultWhatsApp, site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-1 text-[13px] font-semibold tracking-[0.14em] text-muted uppercase">{site.role}</p>
          <p className="mt-3 text-[15px] text-muted">{site.tagline}</p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 text-[15px] font-medium">
          <a href="#work" className="hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">Work</a>
          <a href="#services" className="hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">Services</a>
          <a href="#about" className="hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">About</a>
          <a href="#process" className="hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">Process</a>
          <a href="#contact" className="hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">Contact</a>
        </nav>
        <div className="space-y-2 text-[15px] font-medium">
          <p>
            <a href={contact.emailHref} className="underline underline-offset-4">{contact.email}</a>
          </p>
          <p>
            <a href={defaultWhatsApp} target="_blank" rel="noreferrer" className="underline underline-offset-4">WhatsApp: {contact.phoneDisplay}</a>
          </p>
          {/* Add social links only when actual URLs are supplied. */}
        </div>
      </div>
      <div className="border-t border-ink/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-sm text-muted sm:px-8">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
