export default function initAccordionList() {
  const activateClass = "activate";

  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );
  function activateAccordion() {
    this.classList.toggle(activateClass);
  }

  if (accordionList.length) {
    accordionList[0].classList.toggle(activateClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activateAccordion);
    });
  }
}
