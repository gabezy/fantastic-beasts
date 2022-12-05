export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activateClass = "activate";
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activateClass);
  }

  // add the events to accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // init function
  init() {
    if (this.accordionList.length) {
      // toggle the first item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
      return this;
    }
  }
}
