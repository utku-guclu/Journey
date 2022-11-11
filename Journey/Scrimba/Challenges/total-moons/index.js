const solarSystem = document.getElementById("solarSystem");
const planetsObj = [
  {
    name: "Mercury",
    moons: 0,
  },
  {
    name: "Venus",
    moons: 0,
  },
  {
    name: "Earth",
    moons: 1,
  },
  {
    name: "Mars",
    moons: 2,
  },
  {
    name: "Jupiter",
    moons: 67,
  },
  {
    name: "Saturn",
    moons: 62,
  },
  {
    name: "Uranus",
    moons: 27,
  },
  {
    name: "Neptune",
    moons: 14,
  },
];

// Task:
// 1. Display each planet’s name and number of moons in the DOM
// 2. Calculate and display the total number of moons in the solar system below

// Stretch goals:
// - 1: Make the numbers count up on page load
// - 2: Make the planet names bold.

const render = () => {
  const planetEl = planetsObj
    .map((planet) => {
      return `
            <p>
              <strong>${planet.name}</strong>: ${planet.moons} moons
            </p>
      `;
    })
    .join("");

  solarSystem.innerHTML = planetEl;

  const totalMoons = planetsObj.reduce((acc, planet) => acc + planet.moons, 0);

  const totalMoonsEl = document.createElement("div");
  totalMoonsEl.innerHTML = `<h1 class= "total-moons-p">TOTAL MOONS IN THE SOLAR SYSTEM: ${totalMoons}</h1>`;
  setTimeout(() => {
    document.body.appendChild(totalMoonsEl);
    totalMoonsEl.classList.add("total-moons-animate");
  }, 1000);

  setTimeout(() => {
    totalMoonsEl.classList.remove("total-moons-animate");
  }, 3000);
};

render();
