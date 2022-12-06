export default class Operation {
  constructor(days) {
    this.days = document.querySelector(days);
    this.activateClass = "open";
  }
  getOperationData() {
    this.daysWeek = this.days.dataset.day.split(",").map(Number);
    this.timeWeek = this.days.dataset.time.split(",").map(Number);
  }
  dataNow() {
    this.dateNow = new Date();
    this.dayNow = this.dateNow.getDay();
    this.hourNow = this.dateNow.getUTCHours() - 3;
  }
  isOpen() {
    const weekOpen = this.daysWeek.includes(this.dataNow);
    const timeOpen =
      this.hourNow >= this.timeWeek[0] && this.hourNow < this.timeWeek[1];
    return weekOpen && timeOpen;
  }
  activateOpen() {
    if (this.isOpen()) {
      this.days.classList.add(this.activateClass);
    }
  }

  init() {
    if (this.days) {
      this.getOperationData();
      this.dataNow();
      this.activateOpen();
    }
    return this;
  }
}
