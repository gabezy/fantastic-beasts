export default function initAnimateScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < 450) {
          section.classList.add("activate");
        }
      });
    }
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}
