import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("inicia en Love - Love", () => {
    const game = new Tennis();
    expect(game.score()).toEqual("Love - Love");
  });
});

it("player 1 anota una vez y llega a 15", () => {
  const game = new Tennis();
  game.player1Scores();
  expect(game.score()).toEqual("15 - Love");
});

it("player 1 anota dos veces y llega a 30", () => {
  const game = new Tennis();
  game.player1Scores();
  game.player1Scores();
  expect(game.score()).toEqual("30 - Love");
});

it("player 1 anota tres veces y llega a 40", () => {
  const game = new Tennis();
  game.player1Scores();
  game.player1Scores();
  game.player1Scores();
  expect(game.score()).toEqual("40 - Love");
});

it("player 1 anota cuatro veces y gana el game", () => {
  const game = new Tennis();
  game.player1Scores();
  game.player1Scores();
  game.player1Scores();
  game.player1Scores();
  expect(game.score()).toEqual("Game for Player 1");
});