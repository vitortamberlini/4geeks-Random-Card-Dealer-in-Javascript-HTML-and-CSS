/* eslint-disable */

function _random_choice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function random_suit() {
  const suits = ["spades", "hearts", "diamonds", "clubs"];

  return _random_choice(suits);
}

function random_rank() {
  const ranks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  return _random_choice(ranks);
}

function random_card() {
  const suit = random_suit();
  const rank = random_rank();

  card = {
    suit: suit,
    rank: rank
  };

  return card;
}

function generate_random_card() {
  const card = random_card();

  document
    .querySelectorAll("#suits-top, #suits-bottom")
    .forEach(element => (element.classList = `suits ${card.suit}`));

  document.querySelector("#card-rank").textContent = card.rank;
}

window.onload = function() {
  generate_random_card();
  document
    .querySelector("#shuffle-button")
    .addEventListener("click", generate_random_card);
};
