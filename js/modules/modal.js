export default class Modal {
  constructor(btnOpen, btnClose, container) {
    this.modalOpen = document.querySelector(btnOpen);
    this.modalClose = document.querySelector(btnClose);
    this.modalContainer = document.querySelector(container);
    this.activateClass = "activate";

    // bind this to callback to
    // reference to the class's object
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickToExit = this.clickToExit.bind(this);
  }
  toggleModal() {
    this.modalContainer.classList.toggle(this.activateClass);
  }
  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }
  // close the modal when click outside
  clickToExit(e) {
    if (e.target === e.currentTarget) this.toggleModal(e);
  }
  addModalEvents() {
    this.modalOpen.addEventListener("click", this.eventToggleModal);
    this.modalClose.addEventListener("click", this.eventToggleModal);
    this.modalContainer.addEventListener("click", this.clickToExit);
  }

  init() {
    if (this.modalOpen && this.modalClose && this.modalContainer) {
      this.addModalEvents();
      return this;
    }
  }
}
