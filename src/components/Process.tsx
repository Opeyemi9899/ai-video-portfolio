import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Discuss", text: "Share your idea, audience and project goal.", icon: "◐" },
  { n: "02", title: "Plan", text: "Shape the concept, visual style and key message.", icon: "✎" },
  { n: "03", title: "Create", text: "Produce the visuals, edit the video and refine the agreed direction.", icon: "▶" },
  { n: "04", title: "Deliver", text: "Prepare the agreed final video for its intended platform.", icon: "⬢" },
];

export default function Process() {
  return (
    <section id="process" className="bg-cream/70 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-[13px] font-bold tracking-[0.18em] text-gold uppercase">✦ How we work</p>
        <h2 className="mx-auto mt-3 max-w-xl text-center text-4xl font-extrabold text-balance sm:text-5xl">
          From Your Idea to the Final Video
        </h2>

        <ol className="relative mt-12 grid gap-5 md:grid-cols-4">
          {/* connector */}
          <div className="tick-line absolute top-10 right-[12%] left-[12%] hidden md:block" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <li className="relative rounded-[28px] border border-ink/10 bg-white p-7 text-center card-shadow">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ink text-xl text-white" aria-hidden="true">
                  {s.icon}
                </span>
                <p className="mt-4 font-display text-sm font-bold tracking-[0.2em] text-gold">{s.n}</p>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
