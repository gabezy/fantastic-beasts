import AnimateNumbers from "./animate-numbers.js";

export default function fetchAnimals(url, targetElement) {
  const gridNumbers = document.querySelector(targetElement);

  // create the div that contains the
  // animals info
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("animal-number");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`;
    return div;
  }

  function fillAnimals(animal) {
    const divAnimal = createAnimal(animal);
    gridNumbers.appendChild(divAnimal);
  }

  // get the animal through the json file
  // & create each animal using createAnimal
  async function createAnimals() {
    try {
      // fetch e wait the response
      const animalsResponse = await fetch(url);
      const animalsJSON = await animalsResponse.json();
      animalsJSON.forEach((animal) => fillAnimals(animal));
      const animateNumbers = new AnimateNumbers(
        "[data-number]",
        ".numbers",
        "activate"
      ).init();
    } catch (error) {
      console.log(error);
    }
  }

  return createAnimals();
}
