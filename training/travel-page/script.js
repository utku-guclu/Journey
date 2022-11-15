import places from "./data.js";

const cardList = document.getElementById("card-list");

cardList.innerHTML = places
  .map((place) => {
    return `
     <li>
       <img src="${place.image}" alt="City of ${place.name}">
       <div class="item-content">
         <div>
           <h2>${place.name}</h2>
           <p>
             ${place.description}
           </p>
         </div>
         <div class="actions">
           <a href="${place.wiki}">Explore &#x2192</a>
         </div>
       </div>
     </li>
  `;
  })
  .join("");
