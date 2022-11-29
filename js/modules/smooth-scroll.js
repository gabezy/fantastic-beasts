export default function initSmoothScroll() {
  const linksInternal = document.querySelectorAll(
    "[data-anime='smooth'] a[href^='#']"
  );

  if (linksInternal.length) {
    function scrollToSection(event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }

    linksInternal.forEach((link) => {
      link.addEventListener("click", scrollToSection);
    });
  }
}
