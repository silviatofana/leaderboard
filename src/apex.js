const scores = document.querySelector('.scores');
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const idLink = 'iTyQtaDJNNBZv7Zl9xS5/scores/';

let scoreList = [];

const getGameScores = async () => {
  const response = await fetch(`${apiEndPoint}${idLink}`)
    .then((res) => res.json())
    .then((result) => result.result)
    .catch(() => 'error');
  return response;
};

const displayScore = () => {
  getGameScores().then((res) => {
    if (typeof res === 'object') {
      scoreList = Array.from(res);
      scores.innerHTML = '';
      if (scoreList.length > 0) {
        scoreList.forEach((score) => {
          const scoresTemp = `<li><p>${score.user}: ${score.score}</p></li>`;
          scores.innerHTML += scoresTemp;
        });
      }
    }
  });
};

const addGameScore = async (data) => {
  await fetch(`${apiEndPoint}${idLink}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};

exports.displayScore = displayScore;
exports.addGameScore = addGameScore;