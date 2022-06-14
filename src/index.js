// css files here
import './style.css';
import LeaderBoard from './modules/add.js';
import * as Tools from './modules/tools.js';

const freshScore = new LeaderBoard();

const showScore = (scores) => {
  let details = '';
  scores.score.forEach((score) => {
    details += `
        <li>${score.iName}   for   ${score.iScore}</li>`;
  });
  Tools.scoreTable.innerHTML = details;
};
showScore(freshScore);

Tools.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const iName = Tools.form.names.value;
  const iScore = Tools.form.marks.value;

  if (iName === '' && iScore === '') {
    freshScore.addScore(iName, iScore);
    freshScore.updateScore();
    showScore(freshScore);
    Tools.form.tools.names.value = '';
    Tools.form.tools.marks.value = '';
  }
});

showScore(freshScore);