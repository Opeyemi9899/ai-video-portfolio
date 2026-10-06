import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  // Keep hidden until real testimonials are supplied. Do not invent quotes.
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-center text-[13px] font-bold tracking-[0.18em] text-gold uppercase">✦ Client feedback</p>
      <h2 id="testimonials-heading" className="mt-3 text-center text-4xl font-extrabold sm:text-5xl">
        What Clients Say
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <figure key={i} className="rounded-[28px] border border-ink/10 bg-white p-7 card-shadow">
            <span className="font-display text-4xl text-mint-deep" aria-hidden="true">“</span>
            <blockquote className="mt-1 text-[16px] leading-relaxed">{t.quote}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              {t.photo ? (
                <img src={t.photo} alt="" className="h-11 w-11 rounded-full object-cover" loading="lazy" />
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream font-bold" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
              )}
              <span>
                <span className="block text-[15px] font-bold">{t.name}</span>
                {t.businessOrRole && <span className="block text-sm text-muted">{t.businessOrRole}</span>}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
