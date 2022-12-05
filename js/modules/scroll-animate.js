export default class ScrollAnimate {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.activateClass = "activate";
    this.checkDistance = this.checkDistance.bind(this);
  }
  // gets the distance between the top of the element
  // and the top of the page and return an object
  // containing the element and the offsetTop - 400
  getDistance() {
    this.distances = [...this.sections].map((section) => {
      const offset = section.offsetTop;
      return {
        element: section,
        offset: offset - 400,
      };
    });
  }
  // chech each section offset distance
  // to see if is lower than page's Y offset
  checkDistance() {
    this.distances.forEach((item) => {
      if (window.pageYOffset > item.offset) {
        item.element.classList.add("activate");
      }
    });
  }

  init() {
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener("scroll", this.checkDistance);
      return this;
    }
  }
  // remove the event in the scroll
  stop() {
    window.removeEventListener("scroll", this.checkDistance);
  }
}
