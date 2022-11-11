const countdownDisplay = document.getElementById("countdown-display");
const rocket = document.getElementById("rocket");
let timeRemaining = 60;

// Task:
// 1. Write the JavaScript to count down from 60 to 0 and display the remaining time
// 2. When the countdown reaches 0, launch the rocket with an animation

function launch() {
  rocket.classList.add("launch");
}

function countDown() {
  let interval = setInterval((_) => {
    timeRemaining--;
    countdownDisplay.textContent = timeRemaining;
    if (timeRemaining == 0) {
      luck();
      clearInterval(interval);
    }
  }, 1000);
}

const luck = () => {
  const isLucky = Math.floor(Math.random() * 10);
  if (isLucky % 3 === 0) {
    countdownDisplay.textContent = "Terminated!";
    return false;
  }
  countdownDisplay.textContent = "Fire!";
  launch();
};

countDown();
// Stretch goals:
// 1) Add fire under the rocket.
// 2) Randomly don’t launch the rocket when the timer reaches 0.
