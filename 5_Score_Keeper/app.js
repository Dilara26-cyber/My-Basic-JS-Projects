const p1 = {
  score: 0,
  button: document.querySelector('#btn_one'),
  display: document.querySelector('#player_one_score'),
};
const p2 = {
  score: 0,
  button: document.querySelector('#btn_two'),
  display: document.querySelector('#player_two_score'),
};
const btn_three = document.querySelector('#btn_three');
const scoreSelect = document.querySelector('#score_select');

let gameOver = false;
let winningScore = 3;

function updateScore(player, opponent) {
  if (!gameOver) {
    player.score += 1;

    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.disabled = true;
      opponent.button = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function () {
  updateScore(p1, p2);
});
p2.button.addEventListener('click', function () {
  updateScore(p2, p1);
});

btn_three.addEventListener('click', reset);
function reset() {
  gameOver = false;
  for (p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
  }
}
scoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  console.log(winningScore);
  reset();
});
