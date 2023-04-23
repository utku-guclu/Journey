import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://playground-f69c3-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const foodsInDB = ref(database, "foods");

// console.log(app);

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingList = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
  const inputValue = capitalize(inputFieldEl.value);
  // add to database
  inputValue && push(foodsInDB, inputValue);

  clearValue(inputFieldEl);
  //   addToList(shoppingList, inputValue);
  //   console.log(`${inputValue} added to database`);
});

// updates the database
onValue(foodsInDB, function (snapshot) {
  if (snapshot.exists()) {
    let foodsArray = Object.entries(snapshot.val());

    clearHTML(shoppingList);
    // fetch from database
    foodsArray.forEach((food) => {
      addToList(shoppingList, food);
    });
  } else {
    shoppingList.innerHTML = "No jutsu here...";
  }
});

const clearValue = (element) => (element.value = "");
const clearHTML = (element) => (element.innerHTML = "");

const addToList = (element, value) => {
  const currentItemID = value[0];
  const currentItemValue = value[1];

  const newEl = document.createElement("li");
  newEl.textContent = currentItemValue;
  element.appendChild(newEl);

  newEl.addEventListener("dblclick", () => {
    let exactLocationOfFoodsInDB = ref(database, `foods/${currentItemID}`);
    // console.log(exactLocationOfFoodsInDB);
    remove(exactLocationOfFoodsInDB);
  });
};

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
