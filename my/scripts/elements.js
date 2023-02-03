const playerNameElements = document.querySelectorAll(`.config__player-name`);

const editPlayer1ButtonElement = document.querySelector(`#editPlayer1Button`);
const editPlayer2ButtonElement = document.querySelector(`#editPlayer2Button`);

const playerNameDialogElement = document.querySelector(`#playerNameDialog`);

const formElement = document.querySelector(`#form`);

const nameInputElement = document.querySelector(`#name`);

const formInvalidPElement = document.querySelector(`#invalidP`);

const cancelButtonElement = document.querySelector(`#cancelButton`);

const confirmButtonElement = document.querySelector(`#confirmButton`);

const startButtonElement = document.querySelector(`#startButton`);

const gameElement = document.querySelector(`#game`);

const yourTurnNameElement = document.querySelector(`#yourTurnName`);

const gameFieldElement = document.querySelector(`#gameField`);

const gameSquareElements = document.querySelectorAll(`.game__li`);

const youWonElement = document.querySelector(`#youWon`);

const wonTextElement = document.querySelector(`#wonText`);

const winnerNameElement = document.querySelector(`#winnerName`);

function showElement(element) {
  element.classList.remove(`hidden`);
}

function hideElement(element) {
  element.classList.add(`hidden`);
}
