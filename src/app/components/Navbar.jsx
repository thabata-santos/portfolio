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

  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleLinkClick = (id) => {
    setIsOpen(false);
    // Smooth scroll is handled naturally by CSS html { scroll-behavior: smooth }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b1120]/60 backdrop-blur-sm border-b border-white/5">
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-4">

        <div className="flex flex-col leading-tight z-50 flex-shrink-0">
          <h1 className="font-title text-lg sm:text-xl md:text-3xl lg:text-4xl text-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] leading-tight whitespace-nowrap">
            Thabata Santos
          </h1>
          <span className="text-xs sm:text-sm md:text-base text-slate-400 mt-1 leading-tight">
            <span>{t.navbar.subtitle}</span>
          </span>
        </div>

        {/* Right: Controls Wrapper */}
        <div className="flex items-center gap-4">

          {/* Desktop Menu */}
          <div className="hidden md:flex nav-desktop pointer-events-auto gap-2 sm:gap-3 md:gap-4">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-5 py-2 text-base rounded-xl border backdrop-blur-md transition-all duration-300
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

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden nav-mobile-btn z-50 p-2 text-cyan-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#0b1120]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden
    ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
`}
        >
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleLinkClick(item.id)}
              className={`text-2xl font-title transition-colors duration-300
                ${active === item.id
                  ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  : "text-slate-300 hover:text-cyan-400"
                }
              `}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setLanguage(language === "en" ? "pt" : "en");
              setIsOpen(false);
            }}
            className="px-6 py-3 border border-cyan-400 rounded-xl text-cyan-400 text-xl hover:bg-cyan-400 hover:text-black transition"
          >
            {language === "en" ? "Mudar para Português" : "Switch to English"}
          </button>
        </div>

      </div>
    </nav>
  );
}
