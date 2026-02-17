export default function useReveal() {
  useEffect(() => {
    if (window.innerWidth < 768) {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const elements = document.querySelectorAll(".reveal");

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
  }, []);
}
