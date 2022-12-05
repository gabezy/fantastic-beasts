export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activateClass = "activate";
  }
  activateTab(index) {
    const currentTabContent = this.tabContent[index];
    // take the "data-anime" atrribute's
    const anime = currentTabContent.dataset.anime;
    //remove activateClass for all tabContent
    this.tabContent.forEach((content) =>
      content.classList.remove(this.activateClass)
    );
    currentTabContent.classList.add(this.activateClass, anime);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activateTab(index));
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // activate first tab
      this.activateTab(0);
      this.addTabNavEvent();
      return this;
    }
  }
}
