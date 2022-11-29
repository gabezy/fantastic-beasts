import outsideClick from "./outside-click.js";
export default function iniMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="mobile"]');
  const menuList = document.querySelector('[data-menu="list"]');

  if (menuBtn && menuList) {
    ["click", "touchstart"].forEach((userEvents) => {
      menuBtn.addEventListener(userEvents, openMenu);
    });

    function openMenu(event) {
      event.preventDefault();
      this.classList.toggle("activate");
      menuList.classList.toggle("activate");
      outsideClick(menuList, ["click", "touchstart"], () => {
        menuList.classList.remove("activate");
        this.classList.remove("activate");
      });
    }
  }
}
