import { useEffect, useMemo, useRef, useState } from "react";
import { categories, isEmbedUrl, toEmbedUrl, type Project } from "../data/projects";

function ThumbPlaceholder({ project }: { project: Project }) {
  const icon = project.aspect === "9:16" ? "▯" : "▭";
  return (
    <span className="flex h-full w-full flex-col items-center justify-center gap-2 bg-cream p-6 text-center" aria-hidden="true">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mint text-2xl">▶</span>
      <span className="text-[13px] font-bold tracking-wide text-ink/70 uppercase">{project.category}</span>
      <span className="font-display text-lg font-bold">{project.title}</span>
      <span className="text-xs text-muted">{icon} {project.aspect} · Add video + thumbnail</span>
    </span>
  );
}

function ProjectThumb({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);
  const ratioClass =
    project.aspect === "9:16" ? "thumb-9x16" : project.aspect === "1:1" ? "thumb-1x1" : "thumb-16x9";
  return (
    <span className={`relative block w-full overflow-hidden rounded-[20px] bg-cream ${ratioClass}`}>
      {!failed && project.poster ? (
        <img
          src={project.poster}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="absolute inset-0">
          <ThumbPlaceholder project={project} />
        </span>
      )}
      {project.poster && !failed && (
        <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" aria-hidden="true" />
      )}
      <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[12px] font-bold" aria-hidden="true">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[9px] text-white">▶</span>
        {project.aspect === "9:16" ? "Vertical" : project.aspect === "1:1" ? "Square" : "Widescreen"}
      </span>
      <span className="absolute right-3 bottom-3 flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg shadow-lg transition group-hover:scale-110 group-hover:bg-mint" aria-hidden="true">
        ▶
      </span>
    </span>
  );
}

export function VideoModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    setVideoFailed(false);
    closeRef.current?.focus();
  }, [project.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const embed = project.videoSrc ? isEmbedUrl(project.videoSrc) : false;

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="max-h-[94vh] w-full max-w-3xl overflow-y-auto rounded-t-[28px] bg-white p-5 sm:rounded-[28px] sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[12px] font-bold tracking-[0.14em] text-gold uppercase">{project.category}</p>
            <h3 id="video-title" className="mt-1 text-2xl font-bold">{project.title}</h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 text-xl transition hover:bg-cream"
            aria-label="Close video viewer"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl bg-ink">
          {project.videoSrc && !videoFailed ? (
            embed ? (
              <div className={project.aspect === "9:16" ? "mx-auto max-w-[360px]" : "w-full"}>
                <iframe
                  key={project.id}
                  src={toEmbedUrl(project.videoSrc)}
                  title={`${project.title} video`}
                  className={`w-full ${project.aspect === "9:16" ? "aspect-[9/16]" : project.aspect === "1:1" ? "aspect-square" : "aspect-video"}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <video
                key={project.id}
                controls
                playsInline
                preload="metadata"
                poster={project.poster || undefined}
                className={`w-full bg-black ${project.aspect === "9:16" ? "mx-auto aspect-[9/16] max-w-[380px]" : project.aspect === "1:1" ? "aspect-square" : "aspect-video"}`}
                onError={() => setVideoFailed(true)}
              >
                <source src={project.videoSrc} />
                Your browser does not support the video tag.
              </video>
            )
          ) : (
            <div className="flex flex-col items-center gap-3 px-8 py-14 text-center text-white">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 text-2xl" aria-hidden="true">▶</span>
              <p className="font-display text-lg font-bold">Video placeholder — {project.title}</p>
              <p className="max-w-md text-sm text-white/70">
                {project.videoSrc
                  ? "This video file could not be loaded. Check the path in src/data/projects.ts."
                  : "Add your video file to public/videos/ and set videoSrc in src/data/projects.ts. No autoplay, loads only when opened."}
              </p>
            </div>
          )}
        </div>

        <dl className="mt-5 grid gap-4 text-[15px] sm:grid-cols-2">
          <div className="rounded-2xl bg-cream p-4">
            <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">About this video</dt>
            <dd className="mt-1">{project.description}</dd>
          </div>
          <div className="rounded-2xl bg-cream p-4">
            <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">Project goal</dt>
            <dd className="mt-1">{project.goal}</dd>
          </div>
          <div className="rounded-2xl border border-ink/10 p-4">
            <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">My role</dt>
            <dd className="mt-1">{project.role}</dd>
          </div>
          <div className="rounded-2xl border border-ink/10 p-4">
            <dt className="text-[12px] font-bold tracking-wider text-muted uppercase">Project type</dt>
            <dd className="mt-1">{project.label || "—"}</dd>
          </div>
        </dl>

        <div className="mt-5 flex items-center justify-between">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-cream disabled:opacity-40"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition hover:bg-cream disabled:opacity-40"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Work({
  activeId,
  onOpen,
  onClose,
  onNav,
}: {
  activeId: string | null;
  onOpen: (id: string) => void;
  onClose: () => void;
  onNav: (dir: 1 | -1) => void;
}) {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = useMemo(
    () => (filter === "All" ? requireProjects() : requireProjects().filter((p) => p.category === filter)),
    [filter]
  );
  const activeIndex = filtered.findIndex((p) => p.id === activeId);
  const active = activeIndex >= 0 ? filtered[activeIndex] : null;

  // Keep modal in sync when filtering while open: fall back to full list lookup
  const modalProject = active ?? null;

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
      <p className="text-[13px] font-bold tracking-[0.18em] text-gold uppercase">✦ Selected work</p>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="max-w-xl text-4xl font-extrabold sm:text-5xl">A Few Videos I’m Proud Of</h2>
        <p className="max-w-md text-muted">Explore cinematic stories, music visuals and ads created with a clear purpose.</p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setFilter(c)}
            aria-pressed={filter === c}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              filter === c
                ? "bg-ink text-white shadow"
                : "border border-ink/15 bg-white hover:border-ink hover:bg-cream"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-[20px] border border-dashed border-ink/20 bg-cream/60 px-6 py-10 text-center text-muted">
          New {filter} projects coming soon — check back shortly, or{" "}
          <a href="#contact" className="font-bold text-ink underline decoration-gold decoration-2 underline-offset-4">
            discuss yours
          </a>
          .
        </p>
      ) : null}
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {filtered.map((p) => (
          <article key={p.id} className="group">
            <button
              type="button"
              onClick={() => onOpen(p.id)}
              className="block w-full text-left"
              aria-haspopup="dialog"
              aria-label={`Open video: ${p.title}`}
            >
              <ProjectThumb project={p} />
              <div className="mt-4 flex items-start justify-between gap-3 px-1">
                <div>
                  <p className="text-[12px] font-bold tracking-[0.12em] text-gold uppercase">{p.category}</p>
                  <h3 className="mt-1 text-xl font-bold transition group-hover:underline group-hover:decoration-mint group-hover:decoration-4 group-hover:underline-offset-4">
                    {p.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-[15px] text-muted">{p.description}</p>
                </div>
                <span className="mt-1 shrink-0 rounded-full bg-cream px-3 py-1 text-[12px] font-semibold text-ink/70">
                  {p.label || p.aspect}
                </span>
              </div>
            </button>
          </article>
        ))}
      </div>

      {modalProject && (
        <VideoModal
          project={modalProject}
          onClose={onClose}
          onPrev={() => onNav(-1)}
          onNext={() => onNav(1)}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex >= 0 && activeIndex < filtered.length - 1}
        />
      )}
    </section>
  );
}

// Local indirection so tree-shaking / HMR stays simple
import { projects } from "../data/projects";
function requireProjects() {
  return projects;
}
