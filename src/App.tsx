import { useCallback, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { projects } from "./data/projects";

export default function App() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const scrollToWork = useCallback(() => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleNav = useCallback(
    (dir: 1 | -1) => {
      // Navigate within the currently visible (unfiltered-or-filtered) order.
      // Work.tsx owns the filter; simplest robust nav: move through full list order.
      if (!activeId) return;
      const idx = projects.findIndex((p) => p.id === activeId);
      const next = projects[idx + dir];
      if (next) setActiveId(next.id);
    },
    [activeId]
  );

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero onWatchWork={scrollToWork} />
        <Reveal>
          <Work
            activeId={activeId}
            onOpen={setActiveId}
            onClose={() => setActiveId(null)}
            onNav={handleNav}
          />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
