import Tennis from "./tennis.js";

const game = new Tennis();
const scoreElement = document.querySelector("#score");

scoreElement.innerHTML = game.score();