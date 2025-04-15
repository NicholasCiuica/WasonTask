const cardContainer = document.querySelector("#card-container");
const ruleName = document.querySelector("#rule-name");
const ruleDefinition = document.querySelector("#rule-definition");
const infoText = document.querySelector("#info-text");
const sourcesContainer = document.querySelector("#sources-container");

class CardManager {
  constructor(cardContainer, ruleName, ruleDefinition, infoText, sourcesContainer, variation = 0) {
    this.cardContainer = cardContainer;
    this.ruleName = ruleName;
    this.ruleDefinition = ruleDefinition;
    this.infoText = infoText;
    this.sourcesContainer = sourcesContainer;
    //will contain card-inners
    this.cardList = [];
    this.setVariation(variation);
  }

  setVariation(variation) {
    this.variation = variation;
    this.setCards();
    this.setText();
  }

  setCards() {
    //delete any old cards
    this.cardList.length = 0;
    this.cardContainer.innerHTML = "";
    //create the four flippable card objects
    for(let i = 0; i < 4; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      this.cardContainer.appendChild(card);
    
      const cardInner = document.createElement("div");
      cardInner.classList.add("card-inner");
      card.appendChild(cardInner);
      this.cardList.push(cardInner);
    
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
    let cardValues;
    switch(this.variation) {
      case 0:
        cardValues = getOriginalWasonValues();
        this.cardContainer.style.fontSize = "3rem";
        break;
      case 1:
        cardValues = getAbstractWasonValues();
        this.cardContainer.style.fontSize = "3rem";
        break;
      case 2:
        cardValues = getTransitWasonValues();
        this.cardContainer.style.fontSize = "1.4rem";
        break;
      case 3:
        cardValues = getBeerWasonValues();
        this.cardContainer.style.fontSize = "2rem";
        break;
    }

    for(let i = 0; i < 4; i++) {
      this.cardList[i].querySelector(".card-front").textContent = cardValues[i].front;
      this.cardList[i].querySelector(".card-back").textContent = cardValues[i].back;
      if(cardValues[i].relevant === true) {
        this.cardList[i].classList.add("relevant");
      }
    }
  }

  setText() {
    this.ruleName.textContent = optionText.options[this.variation].ruleName;
    this.ruleDefinition.textContent = optionText.options[this.variation].ruleDefinition;
    this.infoText.textContent = optionText.options[this.variation].infoText;

    this.sourcesContainer.innerHTML = "";
    for(const sourceText of optionText.options[this.variation].sources) {
      const source = document.createElement("p");
      source.classList.add("source");
      source.textContent = sourceText;
      this.sourcesContainer.appendChild(source);
    }
  }

}


const cm = new CardManager(cardContainer, ruleName, ruleDefinition, infoText, sourcesContainer);

//button that flips selected cards
document.querySelector("#flip-button").onclick = () => {
  for(let i = 0; i < 4; i++) {
    if(cm.cardList[i].classList.contains("clicked")) {
      cm.cardList[i].classList.remove("clicked");
      cm.cardList[i].classList.add("flipped");
    }
  }
};

//unflip all flipped buttons
document.querySelector("#unflip-button").onclick = () => {
  for(let i = 0; i < 4; i++) {
    cm.cardList[i].classList.remove("flipped");
  }
};

//reset the cards
document.querySelector("#reset-button").onclick = () => {
  cm.setCards();
};

//different Wason Task variation options
const options = document.querySelectorAll('.option');
for(const option of options) {
  option.onclick = function() {
    const id = this.id;
    const variation = parseInt(id.substring(id.indexOf("-") + 1));
    console.log(id.substring(id.indexOf("-") + 1));
    cm.setVariation(variation);
    //underline just the most recently clicked option
    for(const o of options) {
      o.classList.remove("current");
    }
    this.classList.add("current");
  }
}
options[0].classList.add("current");

//button to toggle sources
document.querySelector("#sources-button").onclick = function() {
  if(sourcesContainer.classList.contains("hidden")) {
    sourcesContainer.classList.remove("hidden");
    this.textContent = "Hide Sources";
  } else {
    sourcesContainer.classList.add("hidden");
    this.textContent = "Show Sources";
  }
}