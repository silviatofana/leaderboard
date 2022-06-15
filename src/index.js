import './style.css';
import { addGameScores, displayScoreList } from './leader.js';

displayScoreList();

const form = document.querySelector('.form');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
  displayScoreList();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const userscore = document.getElementById('score').value;

  if (name !== '' && userscore !== '') {
    const data = {
      user: name,
      score: userscore,
    };
    addGameScores(data);
    form.reset();
  }
});