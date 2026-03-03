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