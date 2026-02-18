"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";
import BrainBackground from "./components/BrainBackground";
import useReveal from "./hooks/useReveal";
import translations from "./data/translations";

export default function Home() {

  const [language, setLanguage] = useState("en");
  const [isDesktop, setIsDesktop] = useState(false);
  const t = translations[language] || translations.en;

  useReveal();

  useEffect(() => {
    // Scroll restoration
    window.scrollTo(0, 0);

    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const cursor = document.querySelector(".custom-cursor");

    // Safety check in case component unmounts or selector fails
    if (!cursor) return;

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const activate = () => cursor.classList.add("active");
    const deactivate = () => cursor.classList.remove("active");

    document.addEventListener("mousemove", moveCursor);

    const interactiveElements = document.querySelectorAll(
      "a, button, .interactive-card"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", activate);
      el.addEventListener("mouseleave", deactivate);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", activate);
        el.removeEventListener("mouseleave", deactivate);
      });
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden flex flex-col bg-gradient-to-b from-[#0b1120] via-[#0a0f1d] to-[#0b1120]">
      <div className="custom-cursor"></div>

      {/* Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />
      <div className="h-24 md:h-32" />


      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <NeuralBackground />

        <BrainBackground />
      </div>


      {/* CONTEÚDO */}
      <div className="relative z-10 flex flex-col flex-1 min-h-screen">

        {/* ABOUT SECTION */}
        <section
          id="sobre"
          className="
        relative
        z-10
        px-4
        pt-4
        pb-16
        md:px-6
        md:pt-12
        md:pb-32
        "
        >

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-10 md:gap-20 px-0 md:px-0">
            <div className="glass-card interactive-card about-card w-full md:w-[420px]">
              <h2 className="font-title text-3xl md:text-4xl font-semibold text-cyan-400 mb-6">
                {t.about.title}
              </h2>

              <p className="text-[#cbd5e1] leading-relaxed text-base md:text-lg">
                {t.about.description}
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        {/* SKILLS - Added min-h to ensure visibility and separate from About */}
        <section id="skills-section" className="flex justify-center items-center min-h-[50vh] px-4 md:px-10 py-24 md:py-32 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">

            <div id="hard-skills" className="glass-card interactive-card">
              <h3 className="font-title text-xl font-semibold mb-4 text-cyan-400">
                Hard Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                {t.skills.hardItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div id="soft-skills" className="glass-card interactive-card">
              <h3 className="font-title text-xl font-semibold mb-4 text-cyan-400">
                Soft Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                {t.skills.softItems.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        <section
          id="projetos"
          className="relative flex flex-col justify-center items-center min-h-screen px-4 md:px-10 py-24 md:py-32 z-10 reveal"
        >
          <h2 className="font-title text-xl md:text-6xl tracking-wide opacity-85 md:opacity-100 font-semibold text-cyan-400 mb-10 md:mb-16">
            {t.projects.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl w-full">
            {t.projects.items.map((project, index) => (
              <div key={index} className="glass-card interactive-card">
                <h3 className="font-title text-xl md:text-2xl font-semibold text-cyan-300/90 mb-4">
                  {project.title}
                </h3>
                <p className="text-[#cbd5e1] text-sm md:text-base">
                  {project.description}
                </p>
              </div>
            ))}
          </div>

        </section>

        <section
          id="certificacoes"
          className="relative flex flex-col justify-center items-center min-h-screen px-4 md:px-10 py-24 md:py-32 z-10 reveal"
        >
          <h2 className="font-title text-xl md:text-6xl tracking-wide opacity-85 md:opacity-100 font-semibold text-cyan-400 mb-10 md:mb-16">
            {t.certifications.title}
          </h2>

          <div className="glass-card interactive-card max-w-4xl w-full text-lg text-[#cbd5e1] flex flex-wrap gap-4">

            {t.certifications.items.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {item}
                {index < t.certifications.items.length - 1 && <span>|</span>}
              </span>
            ))}

          </div>
        </section>

        <section
          id="contato"
          className="relative flex flex-col justify-center items-center min-h-screen px-4 md:px-10 py-24 md:py-32 z-10 reveal"
        >
          <h2 className="font-title text-xl md:text-6xl tracking-wide opacity-85 md:opacity-100 font-semibold text-cyan-400 mb-10 md:mb-16">
            {t.contact.title}
          </h2>

          <div className="flex gap-6 mt-6 justify-center md:gap-10">

            <a
              href="https://www.linkedin.com/in/thabata-santos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/linkedin.svg"
                className="w-8 h-8 text-cyan-400 hover:scale-110 transition-all duration-300"
                alt="LinkedIn"
              />
            </a>

            <a
              href="https://github.com/thabata-santos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/github.svg"
                className="w-8 h-8 text-cyan-400 hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:scale-110 transition duration-300"
                alt="GitHub"
              />
            </a>

            <a href="mailto:thabata@thabatasantos.com">
              <img
                src="/icons/email.svg"
                className="w-8 h-8 text-cyan-400 hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] hover:scale-110 transition duration-300"
                alt="Email"
              />
            </a>

          </div>
        </section>
      </div>
    </main>
  );
}
