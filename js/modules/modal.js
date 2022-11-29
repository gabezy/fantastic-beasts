export default function initModal() {
  const modalLink = document.querySelector("[data-modal='open']");
  const modal = document.querySelector("[data-modal='container']");
  const modalClose = document.querySelector("[data-modal='close']");

  if (modalLink && modal && modalClose) {
    const activate = "activate";

    modalLink.addEventListener("click", toggleModal);
    modalClose.addEventListener("click", toggleModal);

    function toggleModal() {
      modal.classList.toggle(activate);
    }

    modal.addEventListener("click", clickToExit);

    function clickToExit(event) {
      if (event.target === this) toggleModal(event);
    }
  }
}
