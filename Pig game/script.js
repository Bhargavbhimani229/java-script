'use strict';

let active = 0; 
let currentScore0 = 0; 
let currentScore1 = 0; 
let score0 = 0; 
let score1 = 0;

const btnNewGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const btnHoldNum = document.querySelector('.btn--hold');

document.querySelector('.dice').style.display = 'none';
document.getElementById('score--0').textContent = 0;
document.getElementById('score--1').textContent = 0;
document.querySelector('.player--0').classList.add('player--active');
document.querySelector('.player--1').classList.remove('player--active');


btnNewGame.addEventListener('click', () => {
  active = 0;
  currentScore0 = 0;
  currentScore1 = 0;
  score0 = 0;
  score1 = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});

rollDice.addEventListener('click', () => {
  document.querySelector('.dice').style.display = 'block';

  let randomNum = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${randomNum}.png`;

  if (randomNum !== 1) {
    if (active === 0) {
      currentScore0 += randomNum;
      document.getElementById('current--0').textContent = currentScore0;
    } else {
      currentScore1 += randomNum;
      document.getElementById('current--1').textContent = currentScore1;
    }
  } else {
    if (active === 0) {
      currentScore0 = 0;
      score0 = 0;
      document.getElementById('current--0').textContent = 0;
      document.getElementById('score--0').textContent = 0;
    } else {
      currentScore1 = 0;
      score1 = 0;
      document.getElementById('current--1').textContent = 0;
      document.getElementById('score--1').textContent = 0;
    }
    switchPlayer();
  }
});


btnHoldNum.addEventListener('click', () => {
  if (active === 0) {
    score0 += currentScore0;
    document.getElementById('score--0').textContent = score0;
    currentScore0 = 0;
    document.getElementById('current--0').textContent = 0;
  } else {
    score1 += currentScore1;
    document.getElementById('score--1').textContent = score1;
    currentScore1 = 0;
    document.getElementById('current--1').textContent = 0;
  }

  if (score0 >= 100 || score1 >= 100) {
    declareWinner();
  } else {
    switchPlayer();
  }
});


function switchPlayer() {
  active = active === 0 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
}

function declareWinner() {
  document.querySelector('.dice').style.display = 'none';
  if (score0 >= 100) {
    alert('Player 1 Wins!');
  } else {
    alert('Player 2 Wins!');
  }
  btnNewGame.click(); 
}
