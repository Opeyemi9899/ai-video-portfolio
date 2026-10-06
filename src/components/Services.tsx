import type { ReactNode } from "react";
import { services } from "../data/services";
import Reveal from "./Reveal";

const icons: Record<string, ReactNode> = {
  film: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M7 5v14M17 5v14M3 10h4M3 14h4M17 10h4M17 14h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M10.5 12.5v-3l2.5 1.5-2.5 1.5Z" fill="currentColor" />
    </svg>
  ),
  music: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7" cy="18" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M10 18V6l10-2v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  box: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 4 7v10l8 4 8-4V7l-8-4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 7l8 4 8-4M12 11v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  ),
  user: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
};

export default function Services() {
  return (
    <section id="services" className="bg-cream/70 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-[13px] font-bold tracking-[0.18em] text-gold uppercase">✦ What I create</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-extrabold text-balance sm:text-5xl">
          Creative Videos. Clear Business Purpose.
        </h2>
        <p className="font-hand mt-3 text-center text-2xl text-gold" aria-hidden="true">
          pick the one that fits your goal ~
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <article className="flex h-full flex-col rounded-[28px] border border-ink/10 bg-white p-7 card-shadow transition hover:-translate-y-1.5 hover:shadow-xl">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cream text-ink">
                  <span className="text-mint-deep [&_svg]:text-ink">{icons[s.icon]}</span>
                </span>
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{s.description}</p>
                <a
                  href={s.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-bold underline decoration-gold decoration-2 underline-offset-8 transition hover:gap-3 hover:decoration-4"
                  aria-label={`Discuss ${s.title} on WhatsApp`}
                >
                  Discuss This Service <span aria-hidden="true">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
