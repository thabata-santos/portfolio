"use client";
import { useState, useEffect } from "react";
import translations from "../data/translations";
export default function Navbar({ language, setLanguage }) {
  const [active, setActive] = useState("sobre");
  const t = translations[language] || translations.en;

useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        // 🔥 About + Skills continuam como "sobre"
        if (id === "sobre" || id === "skills-section") {
          setActive("sobre");
        } else if (id) {
          setActive(id);
        }
      });
    },
    { rootMargin: "-30% 0px -45% 0px" }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);


  const items = [
    { label: t.navbar.about, id: "sobre" },
    { label: t.navbar.projects, id: "projetos" },
    { label: t.navbar.certifications, id: "certificacoes" },
    { label: t.navbar.contact, id: "contato" },
  ];


  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="relative max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        <div className="flex flex-col leading-tight">
          <h1 className="font-title text-2xl sm:text-3xl md:text-4xl lg:text-5x1 text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] leading-tight">
            Thabata Santos
          </h1>
          <span className="text-xs sm:text-sm md:text-base text-slate-400 mt-1 leading-tight">
            <span>{t.navbar.subtitle}</span>
          </span>
        </div>

        <div className="pointer-events-auto flex gap-2 sm:gap-3 md:gap-4">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-xl border backdrop-blur-md transition-all duration-300
                ${active === item.id
                  ? "border-cyan-400 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                  : "border-[#1e293b] text-[#cbd5e1] hover:border-cyan-400 hover:text-cyan-400"
                }
              `}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => setLanguage(language === "en" ? "pt" : "en")}
            className="px-4 py-2 border border-cyan-400 rounded-xl text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            {language === "en" ? "PT" : "EN"}
          </button>

        </div>
      </div>
    </nav>
  );
}
