import { useState } from "react";
import { defaultWhatsApp } from "../data/site";

const benefits = [
  {
    title: "Strong opening hooks",
    text: "Built to earn the first three seconds and keep viewers watching.",
    icon: "◉",
  },
  {
    title: "Business-focused creativity",
    text: "Every visual choice supports your message and audience action.",
    icon: "⬣",
  },
  {
    title: "Purposeful storytelling",
    text: "Clear structure — idea, tension, payoff — tied to your goal.",
    icon: "✦",
  },
];

export default function About() {
  // Tries portrait-about.jpg first, then falls back to the hero portrait.jpg,
  // so uploading a single photo covers both slots.
  const [src, setSrc] = useState("/portrait-about.jpg");
  const [failed, setFailed] = useState(false);
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-[360px]">
          <div className="absolute -inset-3 rounded-[36px] bg-cream rotate-2" aria-hidden="true" />
          {!failed ? (
            <img
              src={src}
              alt="Opeyemi Precious portrait"
              loading="lazy"
              onError={() => {
                if (src !== "/portrait.jpg") setSrc("/portrait.jpg");
                else setFailed(true);
              }}
              className="relative aspect-[4/5] w-full rounded-[36px] border-4 border-white object-cover card-shadow"
            />
          ) : (
            <div
              className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 rounded-[36px] border-2 border-dashed border-ink/20 bg-cream p-8 text-center"
              role="img"
              aria-label="About photo placeholder — add your photo at public/portrait-about.jpg"
            >
              <span className="font-hand text-3xl text-gold">hello, that’s me →</span>
              <p className="font-display text-lg font-bold">About photo here</p>
              <p className="text-sm text-muted">Add <code>public/portrait-about.jpg</code> (or reuse portrait.jpg).</p>
            </div>
          )}
          <p className="font-hand absolute -right-2 -bottom-5 rotate-[-4deg] rounded-full bg-white px-4 py-2 text-xl text-ink shadow" aria-hidden="true">
            hi, I’m Opeyemi ✳
          </p>
        </div>

        <div>
          <p className="text-[13px] font-bold tracking-[0.18em] text-gold uppercase">✦ About me</p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">Hi, I’m Opeyemi.</h2>
          <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed text-ink/85">
            <p>
              I’m Adewoye Opeyemi Precious, an AI video creator based in Akure, Nigeria. I
              help brands turn ideas into cinematic videos designed to stop the scroll and
              support their business goals.
            </p>
            <p>
              With real business experience, I understand what businesses need from a video:
              a clear message, strong storytelling and a reason for the audience to take action.
            </p>
            <p>
              I focus on holding attention from the first three seconds. Every video starts
              with a purpose — whether that’s marketing, sales or branding.
            </p>
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-ink/10 bg-white p-4 card-shadow">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-mint text-base" aria-hidden="true">
                  {b.icon}
                </span>
                <p className="mt-3 text-[15px] font-bold">{b.title}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{b.text}</p>
              </div>
            ))}
          </div>

          <a
            href={defaultWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Discuss Your Project <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
