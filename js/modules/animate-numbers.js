export default class AnimateNumbers {
  constructor(numbers, obseverTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers);
    this.observerTarget = document.querySelector(obseverTarget);
    this.observerClass = observerClass;

    // bind the object's THIS to the mutation's calback
    this.handleMutation = this.handleMutation.bind(this);
  }

  // receive a dom element within a number in the text
  // incrementfrom 0 to the max
  static incrementNumber(number) {
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
  }

  animateNumbers() {
    this.numbers.forEach((number) => this.constructor.incrementNumber(number));
  }
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animateNumbers();
    }
  }
  // add the MutationObserver for check when
  // the class "activate" is added to the element target
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numbers.length && this.observerTarget) {
      this.addMutationObserver();
      return this;
    }
  }
}
