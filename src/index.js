import './index.css';
import { addGameScore, displayScore } from './apex.js';

displayScore();

const form = document.querySelector('.form');
const refresh = document.getElementById('recent-scores-button');

refresh.addEventListener('click', () => {
  displayScore();
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
    addGameScore(data);
    form.reset();
  }
});