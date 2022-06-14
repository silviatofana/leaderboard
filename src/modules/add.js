class LeaderBoard {
  constructor() {
    this.getScore();
  }

  getScore() {
    this.score = JSON.parse(localStorage.getItem('scores')) || [];
  }

  updateScore() {
    localStorage.setItem('scores', JSON.stringify(this.score));
  }

  addScore(iName, iScore) {
    const scores = { iName, iScore };
    this.score = [...this.score, scores];
    this.updateScore();
  }
}

export default LeaderBoard;
