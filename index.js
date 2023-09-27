let suits = ["♥", "♦", "♣", "♠"];
let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

const generateCardOfDecks = (suits, numbers) => {
  let cardOfDecks = [];
  suits.forEach((suit) => {
    numbers.forEach((number, index) => {
      cardOfDecks.push({ suit: suit, number: number, value: index });
    });
  });
  console.log(cardOfDecks);
};
