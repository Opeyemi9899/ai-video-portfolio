import { contact, defaultWhatsApp } from "../data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[36px] bg-cream px-6 py-12 text-center sm:px-12 lg:px-20 lg:py-16">
          {/* decorative play / frame marks */}
          <span className="pointer-events-none absolute top-6 left-8 hidden font-display text-5xl text-ink/8 sm:block" aria-hidden="true">▶</span>
          <span className="pointer-events-none absolute right-8 bottom-6 hidden font-display text-5xl text-ink/8 sm:block" aria-hidden="true">✦</span>
          <span className="pointer-events-none absolute top-8 right-10 h-10 w-10 rounded-tr-2xl border-t-4 border-r-4 border-gold/60" aria-hidden="true" />
          <span className="pointer-events-none absolute bottom-8 left-10 h-10 w-10 rounded-bl-2xl border-b-4 border-l-4 border-gold/60" aria-hidden="true" />

          <p className="text-[13px] font-bold tracking-[0.18em] text-gold uppercase">✦ Let’s create</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-extrabold text-balance sm:text-5xl">
            Have a Video Project in Mind?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-muted">
            Tell me what you want to create. Let’s discuss a video that fits your brand,
            audience and goal.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={defaultWhatsApp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Discuss Your Project <span aria-hidden="true">↗</span>
            </a>
            <a
              href={contact.emailHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-ink/15 bg-white px-8 py-[14px] text-base font-semibold transition hover:border-ink sm:w-auto"
            >
              Send Me an Email
            </a>
          </div>

          <dl className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-2">
            <div className="rounded-2xl bg-white/80 px-5 py-4">
              <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">Phone / WhatsApp</dt>
              <dd className="mt-1 font-semibold">
                <a href={contact.phoneHref} className="underline decoration-mint decoration-[3px] underline-offset-4">{contact.phoneDisplay}</a>
                {" · "}
                <a href={defaultWhatsApp} target="_blank" rel="noreferrer" className="underline decoration-gold decoration-2 underline-offset-4">WhatsApp</a>
              </dd>
            </div>
            <div className="rounded-2xl bg-white/80 px-5 py-4">
              <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">Email</dt>
              <dd className="mt-1 font-semibold break-all">
                <a href={contact.emailHref} className="underline decoration-mint decoration-[3px] underline-offset-4">{contact.email}</a>
              </dd>
            </div>
            <div className="rounded-2xl bg-white/80 px-5 py-4">
              <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">Location</dt>
              <dd className="mt-1 font-semibold">{contact.location}</dd>
            </div>
            <div className="rounded-2xl bg-white/80 px-5 py-4">
              <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">Availability</dt>
              <dd className="mt-1 font-semibold">{contact.availability}</dd>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}
