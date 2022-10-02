import { catsData } from "./data.js";

const emoRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOpt = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

emoRadios.addEventListener("change", highlightCheckedOption);

memeModalCloseBtn.addEventListener("click", closeModal);
// initialize(0)
getImageBtn.addEventListener("click", () => {
  try {
    renderCat();
  } catch (error) {
    alert("Select Your Current Emotion");
  }
});

function highlightCheckedOption(e) {
  const radioItems = document.getElementsByClassName("radio");
  for (let item of radioItems) {
    item.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

function closeModal() {
  memeModal.style.display = "none";
}
// 1
function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `<img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >`;
  memeModal.style.display = "flex";
}
// 2
function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();
  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomCatNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomCatNumber];
  }
}
// 3
function getMatchingCatsArray() {
  const selectedEmotion = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  const isGif = gifsOnlyOpt.checked;
  const matchingCatsArray = catsData.filter((data) =>
    isGif
      ? data.emotionTags.includes(selectedEmotion) && data.isGif
      : data.emotionTags.includes(selectedEmotion)
  );
  return matchingCatsArray;
}

function getEmotionsArray(cats) {
  const emoArr = [];
  for (let cat of cats) {
    for (let emo of cat.emotionTags) {
      !emoArr.includes(emo) && emoArr.push(emo);
    }
  }
  return emoArr;
}

function renderEmotionsRadios(cats) {
  let radioItems = "";
  const emotions = getEmotionsArray(cats);
  emotions.forEach((emo) => {
    radioItems += `
        <div class="radio">
            <label for="${emo}">${emo}</label>
            <input 
                type="radio"
                id="${emo}"
                value="${emo}"
                name="emotions"
            >
        </div>
        `;
  });
  emoRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData);
