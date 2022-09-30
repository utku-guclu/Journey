const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
  modalCloseBtn.disabled = true;
}, 1500);

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", () => {
  modalChoiceBtns.classList.toggle("modal-choice-btns-reverse");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const username = consentFormData.get("username");
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
  </div>
`;
  setTimeout(() => {
    document.getElementById("uploadText").innerText = `
    Making the sale...`;
  }, 2000);
  setTimeout(() => {
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks <span class="modal-display-name">${username}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3500);
});
