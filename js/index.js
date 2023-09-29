const cardSuits = ["♥", "♦", "♣", "♠"];
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

let playerCard;
let gameCard;

const messageInput = document.querySelector(".result-message");
const buttonGreater = document.querySelector(".greater-button");
const buttonSmaller = document.querySelector(".smaller-button");
const buttonStarter = document.querySelector(".start-button");
const buttonStartContainer = document.querySelector(".start-button-container");
const cardsContainer = document.querySelector(".cards-container");
const cardMask = document.querySelector(".card-mask");
const cardRight = document.querySelector(".card-right");

const generateDeck = () => {
  const deckCards = [];

  cardSuits.forEach((cardSuit) => {
    cardValues.forEach((cardValue, position) => {
      deckCards.push({ suit: cardSuit, value: cardValue, score: position });
    });
  });

  return deckCards;
};

const getRandomCard = () =>
  generateDeck()[Math.floor(Math.random() * generateDeck().length)];

const showGameLeftCard = () => {
  let card = getRandomCard();

  const cornerValue = document.querySelectorAll(".value-corner-left");
  cornerValue.forEach((nodo) => {
    nodo.textContent = card.value;
  });

  const cornerSuit = document.querySelectorAll(".suit-corner-left");
  cornerSuit.forEach((nodo) => {
    nodo.textContent = card.suit;
  });

  const centerSuit = document.querySelector(".suit-middle-element-left");
  centerSuit.textContent = card.suit;
};

const showGameRightCard = () => {
  let card = getRandomCard();

  const cornerValue = document.querySelectorAll(".value-corner-right");
  cornerValue.forEach((nodo) => {
    nodo.textContent = card.value;
  });

  const cornerSuit = document.querySelectorAll(".suit-corner-right");
  cornerSuit.forEach((nodo) => {
    nodo.textContent = card.suit;
  });

  const centerSuit = document.querySelector(".suit-middle-element-right");
  centerSuit.textContent = card.suit;
};

const compareHandResult = () => {
  return playerCard.score > gameCard.score ? true : false;
};

const revealGameResult = (resultGame) => {
  if (resultGame === true) {
    const cornerValue = document.querySelector(".show-message");
    cornerValue.textContent = "Has ganado!";
  }

  if (resultGame === false) {
    const cornerValue = document.querySelector(".show-message");
    cornerValue.textContent = "Has perdido!";
  }
};

buttonStarter.addEventListener("click", () => {
  gameCard = getRandomCard();
  playerCard = getRandomCard();
  showGameLeftCard();
  showGameRightCard();
  cardsContainer.classList.remove("hidden");
  buttonGreater.classList.remove("hidden");
  buttonSmaller.classList.remove("hidden");
  buttonStarter.classList.add("hidden");
  buttonStarter.classList.add("hidden");
});

buttonGreater.addEventListener("click", (event) => {
  event.stopPropagation();

  cardMask.classList.add("hidden");
  cardRight.classList.remove("hidden");

  if (compareHandResult()) {
    revealGameResult(true);
    console.log("ganado");
  } else if (!compareHandResult()) {
    revealGameResult(false);
    console.log("perdido");
  }
});

buttonSmaller.addEventListener("click", (event) => {
  event.stopPropagation();

  cardMask.classList.add("hidden");
  cardRight.classList.remove("hidden");

  if (compareHandResult()) {
    revealGameResult(true);
    console.log("ganado");
  } else if (!compareHandResult()) {
    revealGameResult(false);
    console.log("perdido");
  }
});
