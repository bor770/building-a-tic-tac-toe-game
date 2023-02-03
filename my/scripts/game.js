let currentPlayer = 0;
let moveCounter = 0;

const gameData = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function startGame() {
  if (!players[0].name || !players[1].name) {
    alert(`Please set custom player names for both players!`);
    return;
  }

  currentPlayer = 0;
  showElement(gameElement);
  yourTurnNameElement.textContent = players[0].name;
  hideElement(youWonElement);
  for (const square of gameSquareElements) {
    square.classList.remove(`used`);
    square.textContent = ``;
    delete square.dataset.used;
  }
}

function gameTurn(event) {
  const playedSquare = event.target;

  if (playedSquare.tagName !== `LI` || playedSquare.dataset.used) {
    return;
  }

  playedSquare.textContent = players[currentPlayer].symbol;
  playedSquare.classList.add(`used`);
  playedSquare.dataset.used = true;
  gameData[playedSquare.dataset.row][playedSquare.dataset.col] = currentPlayer;
  moveCounter++;

  if (winner()) {
    showElement(youWonElement);
    winnerNameElement.textContent = players[currentPlayer].name;
    gameFieldElement.removeEventListener(`click`, gameTurn);
    return;
  }

  if (moveCounter === 9) {
    showElement(youWonElement);
    wonTextElement.textContent = `It's a draw!`;
    gameFieldElement.removeEventListener(`click`, gameTurn);
    return;
  }

  currentPlayer = currentPlayer ? 0 : 1;
  yourTurnNameElement.textContent = players[currentPlayer].name;
}

function winner() {
  console.log(gameData, currentPlayer);
  for (let i = 0; i < 2; i++) {
    if (
      gameData[i][0] === currentPlayer &&
      gameData[i][1] === currentPlayer &&
      gameData[i][2] === currentPlayer
    ) {
      return true;
    }
  }

  for (let i = 0; i < 2; i++) {
    if (
      gameData[0][i] === currentPlayer &&
      gameData[1][i] === currentPlayer &&
      gameData[2][i] === currentPlayer
    ) {
      return true;
    }
  }

  if (
    gameData[0][0] === currentPlayer &&
    gameData[1][1] === currentPlayer &&
    gameData[2][2] === currentPlayer
  ) {
    return true;
  }

  if (
    gameData[0][2] === currentPlayer &&
    gameData[1][1] === currentPlayer &&
    gameData[2][0] === currentPlayer
  ) {
    return true;
  }

  return false;
}

startButtonElement.addEventListener(`click`, startGame);

gameFieldElement.addEventListener(`click`, gameTurn);
