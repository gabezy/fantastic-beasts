export default function initAnimateNumbers() {
  function animateNumbers() {
    const numbers = document.querySelectorAll("[data-number]");

    numbers.forEach((number) => {
      const max = +number.innerText;
      const increment = Math.floor(max / 100);
      let i = 0;
      const timer = setInterval(() => {
        i += increment;
        number.innerText = i;
        if (i >= max) {
          clearInterval(timer);
          number.innerText = max;
        }
      }, 25 * Math.random());
    });
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("activate")) {
      observer.disconnect();
      animateNumbers();
    }
  }

  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
