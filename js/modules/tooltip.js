export default class Tooltip {
  constructor(tooltip, minWidth) {
    this.tooltips = document.querySelectorAll(tooltip);
    this.minWidth = window.matchMedia(minWidth).matches;

    // class's object bind to callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  // move the tooltip based on him styles
  // accord to the mouse
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 30}px`;
    if (e.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 200}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 30}px`;
    }
  }
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }
  // create the tooltip box and append to the body
  createTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }
  // cria a tooltip and add the mousemove & mouseleave events
  // to the target
  onMouseOver({ currentTarget }) {
    // create the tooltipbox and put the property
    this.createTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }
  // add the mousemove & mouseleave for each tooltip
  addToolTipsEvents() {
    this.tooltips.forEach((item) =>
      item.addEventListener("mouseover", this.onMouseOver)
    );
  }

  init() {
    if (this.tooltips.length && this.minWidth) {
      this.addToolTipsEvents();
    }
    return this;
  }
}
