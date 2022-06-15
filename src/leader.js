const scores = document.querySelector('.scores');
const apiEndPoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const idLink = 'ZaygVZAaqZNrB25LBjV4/scores/';

let scoreList = [];



const displayScoreList = () => {
  getGameScores().then((res) => {
    if (typeof res === 'object') {
      scoreList = Array.from(res);
      scores.innerHTML = '';
      if (scoreList.length > 0) {
        scoreList.forEach((score) => {
          const scoresTemp = `<li><p>${score.user} :</p>
                            <p>${score.score}</p>
          
          </li>`;
          scores.innerHTML += scoresTemp;
        });
      }
    }
  });
};

const addGameScores = async (data) => {
  await fetch(`${apiEndPoint}${idLink}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
};

exports.displayScoreList = displayScoreList;
exports.addGameScores = addGameScores;