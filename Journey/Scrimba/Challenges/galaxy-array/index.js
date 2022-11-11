// Task:
// Write a function to display a galaxy of stars (at least 100) in the DOM.
// Note: This requires very little code!

// Stretch goals:
// - 1. Ensure that the stars always fill each line
// - 2. Add different sizes of star
const galaxySize = 1000;
const stars = ["👾", "✨", "☄️", "✦", "⭐", "🌓", "🌠", "☀️", "💫", "🌎", "🛸"];
const starsCount = Math.round(galaxySize / stars.length);

const galaxy = document.getElementById("galaxy");
const galaxyArray = new Array(starsCount).fill(stars);
console.log(galaxyArray);
const galaxyEl = galaxyArray
  .map((star) => {
    return `<span>${star.join("")}</span>`;
  })
  .join("");

galaxy.innerHTML += galaxyEl;
