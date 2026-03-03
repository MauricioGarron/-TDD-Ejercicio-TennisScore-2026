class Tennis {
  constructor() {
    this.player1 = 0;
    this.player2 = 0;
  }

  player1Scores() {
    this.player1 += 1;
  }

  player2Scores() {
    this.player2 += 1;
  }
  
  score() {
    if (this.player1 === 3 && this.player2 === 3) {
  return "Deuce";
}
    if (this.player1 === 0 && this.player2 === 0) {
      return "Love - Love";
    }

    if (this.player1 === 1 && this.player2 === 0) {
      return "15 - Love";
    }

    if (this.player1 === 2 && this.player2 === 0) {
      return "30 - Love";
    }

    if (this.player1 === 1 && this.player2 === 1) {
      return "15 - 15";
    }
    if (this.player1 === 2 && this.player2 === 2) {
      return "30 - 30";
    }
    if (this.player1 === 3 && this.player2 === 3) {
      return "40 - 40";
    }
    if (this.player1 === 3 && this.player2 === 0) {
      return "40 - Love";
    }

    if (this.player1 === 4 && this.player2 === 0) {
      return "Game for Player 1";
    }

    if (this.player1 === 0 && this.player2 === 1) {
      return "Love - 15";
    }
    if (this.player1 === 0 && this.player2 === 2) {
      return "Love - 30";
    }
    if (this.player1 === 0 && this.player2 === 3) {
      return "Love - 40";
    }
    if (this.player1 === 0 && this.player2 === 4) {
      return "Game for Player 2";
    }
    if (this.player1 === 4 && this.player2 === 3) {
  return "Advantage Player 1";
}
if (this.player1 === 3 && this.player2 === 4) {
  return "Advantage Player 2";
}
  }
}

export default Tennis;