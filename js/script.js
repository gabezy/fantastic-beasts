function initTabNav() {
  const activateClass = "activate";

  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tabcontent div");

  if (tabcontent.length && tabmenu.length) {
    tabcontent[0].classList.add(activateClass);

    function activateTab(index) {
      tabcontent.forEach((content) => content.classList.remove(activateClass));
      tabcontent[index].classList.add(activateClass);
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activateTab(index);
      });
    });
  }
}
initTabNav();

// FAQ Effect

function initAccordionList() {
  const activateClass = "activate";

  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.toggle(activateClass);

    function activateAccordion(event) {
      this.classList.toggle(activateClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activateAccordion);
    });
  }
}

initAccordionList();

// smooth scroll

function initSmoothScroll() {
  const linksInternal = document.querySelectorAll(".js-menu a[href^='#']");

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

initSmoothScroll();

// Scroll Animation

function initAnimateScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    // const windowHeightCacl = window.innerHeight * 0.01;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        // const isSectionVisible = sectionTop - windowHeightCacl;
        if (sectionTop < 450) {
          section.classList.add("activate");
        }
      });
    }
    animateScroll();

    window.addEventListener("scroll", animateScroll);
  }
}

initAnimateScroll();

//

function initZoom() {
  window.addEventListener("keydown", zoom);

  const fontSiezes = ["100%", "120%", "150%", "175%", "200%"];

  let currentPerc = 0;

  function zoom(event) {
    if (event.key === "+" && currentPerc < 5) {
      ++currentPerc;
      document.documentElement.style.fontSize = fontSiezes[currentPerc];
    } else if (event.key === "-" && currentPerc > -1) {
      --currentPerc;
      document.documentElement.style.fontSize = fontSiezes[currentPerc];
    }
  }
}

initZoom();
