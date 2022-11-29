export default function initTabNav() {
  const activateClass = "activate";

  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabcontent = document.querySelectorAll("[data-tab='content'] section");

  if (tabcontent.length && tabMenu.length) {
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activateTab(index);
      });
    });

    tabcontent[0].classList.add(activateClass, tabcontent[0].dataset.anime);

    function activateTab(index) {
      const currentTabContent = tabcontent[index];
      const anime = currentTabContent.dataset.anime;
      tabcontent.forEach((content) => content.classList.remove(activateClass));
      currentTabContent.classList.add(activateClass, anime);
    }
  }
}
