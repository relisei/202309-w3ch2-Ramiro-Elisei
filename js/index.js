const cardSuits = ["♥", "♦", "♣", "♠"];
const cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

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
  generateDeck()[Math.floor(Math.random() * generateDeck.length)];

getRandomCard();
