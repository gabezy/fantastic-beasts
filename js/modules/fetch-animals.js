import initAnimateNumbers from "./animate-numbers.js";

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      const gridNumbers = document.querySelector(".grid-numbers");

      animalsJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        gridNumbers.appendChild(divAnimal);
      });
      initAnimateNumbers();
    } catch (error) {
      console.log(error);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  fetchAnimals("./animais-api.json");
}
