import Tennis from "./tennis.js";

describe("Tennis", () => {
  it("inicia en Love - Love", () => {
    const game = new Tennis();
    expect(game.score()).toEqual("Love - Love");
  });
});