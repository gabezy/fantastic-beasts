export default function initAccordionList() {
  const activateClass = "activate";

  const accordionList = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

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
