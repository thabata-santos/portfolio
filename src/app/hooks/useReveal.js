import { useEffect } from "react";
export default function useReveal() {
  useEffect(() => {
    const handleReveal = () => {
      if (window.innerWidth < 768) {
        const elements = document.querySelectorAll(".reveal");
        elements.forEach((el) => el.classList.add("visible"));
        return true; // Indicates mobile handled
      }
      return false; // Not mobile
    };

    // Attempt immediately
    if (handleReveal()) return;

    // Retry after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      if (handleReveal()) return;

      // If not mobile, set up observer
      const elements = document.querySelectorAll(".reveal");
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observerInstance.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
}
