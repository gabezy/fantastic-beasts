export default function initZoom() {
  window.addEventListener("keydown", zoom);

  const fontSiezes = ["100%", "120%", "150%", "175%", "200%"];

  let currentPerc = 0;

  function zoom(event) {
    if (event.key === "+" && currentPerc < 5) {
      ++currentPerc;
      document.documentElement.style.fontSize = fontSiezes[currentPerc];
    } else if (event.key === "-" && currentPerc > -1) {
      --currentPerc;
      document.documentElement.style.fontSize = fontSiezes[currentPerc];
    }
  }
}
