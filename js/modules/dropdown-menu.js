import outsideClick from "./outside-click.js";

export default function initDropdownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");
  const mode = "activate";

  dropDownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle(mode);
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove(mode);
    });
  }
}
