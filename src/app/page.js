"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import NeuralBackground from "./components/NeuralBackground";
import BrainBackground from "./components/BrainBackground";
import useReveal from "./hooks/useReveal";
import translations from "./data/translations";

export default function Home() {

  const [language, setLanguage] = useState("en");
  const t = translations[language] || translations.en;

  useReveal();

useEffect(() => {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}, []);

  return (
    <main className="relative min-h-screen bg-[#0b1120] overflow-x-hidden">

      {/* Navbar */}
      <Navbar language={language} setLanguage={setLanguage} />


     {/* BACKGROUND */}
<div className="fixed inset-0 z-0 pointer-events-none">
  <NeuralBackground />
  <BrainBackground />
</div>

    {/* CONTEÚDO */}
    <div className="relative z-10">

{/* ABOUT SECTION */}
<section
  id="sobre"
  className="relative min-h-screen flex items-start pt-40 px-10 z-10"
>
  <div className="glass-card interactive-card about-card max-w-sm w-full">
    <h2 className="font-title text-4xl font-semibold text-cyan-400 mb-6">
      {t.about.title}
    </h2>

    <p className="text-[#cbd5e1] leading-relaxed text-lg">
     {t.about.description}
    </p>
  </div>
</section>

      {/* SKILLS */}
      <section className="flex justify-center px-6 pb-32 reveal">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">

          <div className="glass-card interactive-card">
            <h3 className="font-title text-xl font-semibold mb-4 text-cyan-400">
              Hard Skills
            </h3>
            <ul className="space-y-2 text-gray-300">
  {t.skills.hardItems.map((item, index) => (
    <li key={index}>• {item}</li>
  ))}
</ul>
          </div>

          <div className="glass-card interactive-card">
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
  className="relative min-h-screen flex flex-col justify-center items-center px-10 z-10 reveal"
>
  <h2 className="font-title text-5xl font-semibold text-cyan-400 mb-16">
    {t.projects.title}
  </h2>

  <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full">
  {t.projects.items.map((project, index) => (
    <div key={index} className="glass-card interactive-card">
      <h3 className="font-title text-2xl font-semibold text-[#93c5fd] mb-4">
        {project.title}
      </h3>
      <p className="text-[#cbd5e1]">
        {project.description}
      </p>
    </div>
  ))}
</div>

</section>

<section
  id="certificacoes"
  className="relative min-h-screen flex flex-col justify-center items-center px-10 z-10 reveal"
>
  <h2 className="font-title text-5xl font-semibold text-cyan-400 mb-16">
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
  className="relative min-h-screen flex flex-col justify-center items-center px-10 z-10 reveal"
>
  <h2 className="font-title text-5xl font-semibold text-cyan-400 mb-16">
    {t.contact.title}
  </h2>

  <div className="flex gap-8">

  <a
    href="https://www.linkedin.com/in/thabata-santos"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/icons/linkedin.svg"
      className="w-8 h-8 hover:scale-110 transition"
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
      className="w-8 h-8 hover:scale-110 transition"
      alt="GitHub"
    />
  </a>

  <a href="mailto:thabata@thabatasantos.com">
    <img
      src="/icons/email.svg"
      className="w-8 h-8 hover:scale-110 transition"
      alt="Email"
    />
  </a>

</div>
</section>
    </div>
  </main>
);}
