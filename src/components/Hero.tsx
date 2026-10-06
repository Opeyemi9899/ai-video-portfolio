import { useState } from "react";
import { defaultWhatsApp } from "../data/site";

export function PortraitImage({ className = "", rounded = "rounded-[32px]" }: { className?: string; rounded?: string }) {
  // Place your real photo at public/portrait.jpg
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`${rounded} ${className} flex flex-col items-center justify-center gap-3 border-2 border-dashed border-ink/20 bg-cream p-8 text-center`}
        role="img"
        aria-label="Portrait placeholder — add your photo at public/portrait.jpg"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-mint text-2xl" aria-hidden="true">
          ◉
        </span>
        <p className="font-display text-lg font-bold">Your portrait here</p>
        <p className="max-w-[26ch] text-sm text-muted">Add <code>public/portrait.jpg</code> to show your real photo.</p>
      </div>
    );
  }
  return (
    <img
      src="/portrait.jpg"
      alt="Portrait of Adewoye Opeyemi Precious, AI Video Creator"
      className={`${rounded} ${className} object-cover`}
      loading="eager"
      onError={() => setFailed(true)}
    />
  );
}

export function HeroVideoCard({ onPlay }: { onPlay: () => void }) {
  const [thumbFailed, setThumbFailed] = useState(false);
  return (
    <button
      type="button"
      onClick={onPlay}
      className="group absolute -bottom-8 -left-3 flex w-[228px] items-center gap-3 rounded-2xl border border-ink/10 bg-white p-3 text-left card-shadow transition hover:-translate-y-1 sm:-left-8 sm:w-[260px]"
      aria-label="Play showreel preview"
    >
      <span className="relative block h-[68px] w-[96px] shrink-0 overflow-hidden rounded-xl bg-cream">
        {!thumbFailed ? (
          <img
            src="/showreel-poster.jpg"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            loading="lazy"
            onError={() => setThumbFailed(true)}
          />
        ) : (
          <span className="flex h-full w-full flex-col items-center justify-center gap-1 bg-cream text-[11px] font-semibold text-muted">
            <span aria-hidden="true" className="text-lg">▣</span> Showreel
          </span>
        )}
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-ink shadow transition group-hover:scale-110 group-hover:bg-mint">
            ▶
          </span>
        </span>
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-bold">Showreel preview</span>
        <span className="block truncate text-[12px] text-muted">Add public/showreel.mp4</span>
        <span className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
          Watch <span aria-hidden="true">→</span>
        </span>
      </span>
    </button>
  );
}

export default function Hero({ onWatchWork }: { onWatchWork: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      {/* soft green wash + oversized type accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(60%_80%_at_80%_10%,#F3F9EF_0%,#fff_70%)]" aria-hidden="true" />
      <p className="pointer-events-none absolute -top-2 left-0 -z-10 hidden w-full overflow-hidden text-center font-display text-[13vw] leading-none font-extrabold text-ink/[0.04] select-none lg:block" aria-hidden="true">
        VIDEO&nbsp;•&nbsp;AI&nbsp;•&nbsp;VIDEO
      </p>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-10 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-16 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-4 py-2 text-[13px] font-semibold tracking-wide">
            <span className="h-2 w-2 rounded-full bg-mint-deep" aria-hidden="true" />
            AI Video Creator · Based in Akure, Nigeria
          </p>

          <h1 className="mt-6 text-[42px] leading-[1.02] font-extrabold text-balance sm:text-6xl lg:text-[68px]">
            I turn your ideas into <span className="hl-green">scroll-stopping</span>{" "}
            <span className="hl-gold-underline">AI&nbsp;videos</span>.
          </h1>

          <p className="font-hand mt-3 text-2xl text-gold" aria-hidden="true">
            made to be watched →
          </p>

          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
            I create cinematic shorts, music videos, product ads and AI UGC ads for small
            businesses and agencies — built around your marketing, sales or branding goals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={defaultWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Discuss Your Project <span aria-hidden="true">↗</span>
            </a>
            <button
              type="button"
              onClick={onWatchWork}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink/12 bg-white px-7 py-[14px] text-base font-semibold transition hover:border-ink hover:bg-cream"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mint text-sm" aria-hidden="true">▶</span>
              Watch My Work
            </button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-muted">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11Z" stroke="#B28A3E" strokeWidth="2" />
              <circle cx="12" cy="10" r="2.5" fill="#B28A3E" />
            </svg>
            Based in Nigeria. Creating for clients worldwide.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] pb-10">
          <div className="absolute -inset-4 rounded-[48px] bg-cream" aria-hidden="true" />
          <div className="absolute -top-3 -right-3 hidden items-center gap-1 rounded-full bg-ink px-4 py-2 text-[12px] font-bold text-white rotate-3 sm:inline-flex" aria-hidden="true">
            ✦ AI VIDEO • STORY • AD
          </div>
          <PortraitImage className="relative aspect-[4/5] w-full" rounded="blob-frame border-[6px] border-white card-shadow" />
          {/* decorative frame corners */}
          <div className="pointer-events-none absolute top-6 left-6 h-8 w-8 rounded-tl-2xl border-t-4 border-l-4 border-gold" aria-hidden="true" />
          <div className="pointer-events-none absolute right-6 bottom-16 h-8 w-8 rounded-br-2xl border-r-4 border-b-4 border-gold" aria-hidden="true" />
          <HeroVideoCard onPlay={onWatchWork} />
        </div>
      </div>
    </section>
  );
}
