const solarSystem = document.getElementById("solarSystem");
const planets = [
  {
    name: "Mercury",
    diameter: 4879,
    color: "grey",
  },
  {
    name: "Venus",
    diameter: 12104,
    color: "yellow",
  },
  {
    name: "Earth",
    diameter: 12742,
    color: "green",
  },
  {
    name: "Mars",
    diameter: 6779,
    color: "pink",
  },
  {
    name: "Jupiter",
    diameter: 139822,
    color: "yellow",
  },
  {
    name: "Saturn",
    diameter: 116464,
    color: "orange",
  },
  {
    name: "Uranus",
    diameter: 50724,
    color: "grey",
  },
  {
    name: "Neptune",
    diameter: 49244,
    color: "blue",
  },
];

// Task:
// Write a function to render
// the planets from the planets array using JavaScript.

// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)

const calculateCircumference = (diameter) => {
  return diameter * Math.PI;
};

const planetElements = planets
  .map((planet) => {
    return `
        <div 
            style="
                background: conic-gradient(#000 0deg 180deg, var(--${
                  planet.color
                }) 180deg 360deg);
                border-radius: 50%;
                width: ${planet.diameter / 1000}px;
                height: ${planet.diameter / 1000}px;
                cursor: pointer;
                " 
            class="planet"
            id="${planet.name}"    
        >
        </div>
    `;
  })
  .join("");

solarSystem.innerHTML = planetElements;

solarSystem.addEventListener("mouseover", (e) => {
  const header = document.getElementById("header");
  header.textContent = e.target.id;
  if (e.target.id === "solarSystem") {
    header.textContent = "Solar System";
  }
});
