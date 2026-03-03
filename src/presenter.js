import Tennis from "./tennis.js";

const game = new Tennis();
const scoreElement = document.querySelector("#score");

scoreElement.innerHTML = game.score();

const player1Btn = document.querySelector("#player1-btn");

player1Btn.addEventListener("click", () => {
  game.player1Scores();
  scoreElement.innerHTML = game.score();
});