const cardContainer = document.querySelector("#card-container");
let cardContainerWidth = cardContainer.clientWidth;
let cardContainerHeight = cardContainer.clientHeight;

const cardList = [];

{/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div> */}

for(let i = 0; i < 4; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  cardList.push(cardContainer.appendChild(card));

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");
  card.appendChild(cardInner);

  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");
  cardInner.appendChild(cardFront);

  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");
  cardInner.appendChild(cardBack);
}