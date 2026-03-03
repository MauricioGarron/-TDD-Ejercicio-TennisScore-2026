class Tennis {
  constructor() {
    this.player1 = 0;
  }

  player1Scores() {
    this.player1 += 1;
  }

  score() {
    if (this.player1 === 0) {
      return "Love - Love";
    }

    if (this.player1 === 1) {
      return "15 - Love";
    }

    if (this.player1 === 2) {
      return "30 - Love";
    }

    if (this.player1 === 3) {
      return "40 - Love";
    }
  }
}

export default Tennis;