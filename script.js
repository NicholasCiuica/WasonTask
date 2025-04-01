const cardContainer = document.querySelector("#card-container");

//contains card-inners because those contain the card-fronts
//and card-backs and because transformations are to be done on 

const cardList = [];

function setCards() {
  //delete any old cards
  cardList.length = 0;
  cardContainer.innerHTML = "";
  //create the four flippable card objects
  for(let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);
  
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");
    card.appendChild(cardInner);
    cardList.push(cardInner);
  
    cardInner.onclick = function() {
      this.classList.toggle("clicked");
    }
  
    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    cardFront.textContent = "A";
    cardInner.appendChild(cardFront);
  
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");
    cardBack.textContent = "B";
    cardInner.appendChild(cardBack);
  }
  
  //give the cards their values
  const cardValues = getNormalWasonValues();
  for(let i = 0; i < 4; i++) {
    cardList[i].querySelector(".card-front").textContent = cardValues[i].front;
    cardList[i].querySelector(".card-back").textContent = cardValues[i].back;
    if(cardValues[i].relevant === true) {
      cardList[i].classList.add("relevant");
    }
  }
}
setCards();

//button that flips selected cards
document.querySelector("#flip-button").onclick = () => {
  for(let i = 0; i < 4; i++) {
    if(cardList[i].classList.contains("clicked")) {
      cardList[i].classList.remove("clicked");
      cardList[i].classList.add("flipped");
    }
  }
};

//unflip all flipped buttons
document.querySelector("#unflip-button").onclick = () => {
  for(let i = 0; i < 4; i++) {
    cardList[i].classList.remove("flipped");
  }
};

//reset the cards
document.querySelector("#reset-button").onclick = setCards;