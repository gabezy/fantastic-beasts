import outsideClick from "./outside-click.js";

export default class MenuMobile {
  constructor(menuBtn, menuList, events) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuList = document.querySelector(menuList);
    this.activateClass = "activate";
    if (events === undefined) this.events = ["click", "touchstart"];
    else this.events = events;

    // add bind for the callback function
    // reference the class
    this.openMenu = this.openMenu.bind(this);
  }
  openMenu(e) {
    const element = e.currentTarget;
    e.preventDefault();
    element.classList.toggle(this.activateClass);
    this.menuList.classList.toggle(this.activateClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activateClass);
      element.classList.remove(this.activateClass);
    });
  }
  addMenuEvents() {
    this.events.forEach((userEvent) => {
      this.menuBtn.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.menuBtn && this.menuList) {
      this.addMenuEvents();
    }
    return this;
  }
}
