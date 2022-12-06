import outsideClick from "./outside-click.js";

export default class DropdownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    if (events === undefined) this.events = ["touchstart", "click"];
    else this.events = events;
    this.activateClass = "activate";

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }
  // active the functiom e add
  // the events and add the fucntion
  // that observe the outside clicl
  activeDropdownMenu(e) {
    const element = e.currentTarget;
    e.preventDefault();
    element.classList.toggle(this.activateClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activateClass);
    });
  }
  // add the function to the dropdown menu
  addMenuEvents() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvents) => {
        menu.addEventListener(userEvents, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addMenuEvents();
    }
    return this;
  }
}
