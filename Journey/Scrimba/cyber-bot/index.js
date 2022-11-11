/**
Challenge: 

- Make the styling more exciting once an activity idea comes 
back from the Bored API
    - Resources: DOM element "classList" property, uigradients.com, 
      Google Fonts, color.adobe.com
    - Some ideas:
      - Change the title from "BoredBot" to something more exciting!
      - Change the background to something less drab.
      - Bonus: Animate something on the screen to move around and add more 
        excitement to the page
*/
const blink = document.querySelector(".blink");
const static = new Audio("./fx/static.mp3");
const button = document.getElementById("get-activity");
const activity = document.getElementById("activity");

const randomBot = ["Happy", "Cool", "Fun", "Crazy", "Mad", "Bored"];

static.volume = 0.1;

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * randomBot.length);
  return arr[randomIndex];
}

async function action() {
  await fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      setTimeout(() => {
        activity.textContent = data.activity;
        blink.textContent = `🤖 ${getRandom(randomBot)}Bot 🤖`;
      }, 2000);

      setTimeout(() => {
        blink.classList.add("blink-me");
        button.classList.add("btn-crazy");
        document.body.classList.add("fun");
      }, 100);
      setTimeout(() => static.play());
      setTimeout(() => {
        button.classList.remove("btn-crazy");
        blink.classList.remove("blink-me");
        document.body.classList.remove("fun");
      }, 2000);
    });
}

button.addEventListener("click", action);
