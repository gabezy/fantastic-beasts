export default function initOpening() {
  const days = document.querySelector("[data-day]");
  const daysWeek = days.dataset.day.split(",").map(Number);
  const timeWeek = days.dataset.time.split(",").map(Number);

  const dateNow = new Date();
  const dayNow = dateNow.getDay();
  const hourNow = dateNow.getHours();

  const weekOpen = daysWeek.includes(dayNow);
  const timeOpen = hourNow >= timeWeek[0] && hourNow < timeWeek[1];

  if (weekOpen && timeOpen) {
    days.classList.add("open");
  }
}
