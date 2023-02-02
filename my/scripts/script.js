const players = [{ name: null }, { name: null }];

function editPlayerName(event) {
  playerNameDialogElement.classList.remove(`hidden`);
  const currentPlayerNameEditing = event.target.dataset.player - 1;
}

function closeNameDialog() {
  playerNameDialogElement.classList.add(`hidden`);
}

function submitPlayerName(event) {
  event.preventDefault();
  
}

function startGame() {
  if (!players[0].name || !players[1].name) {
    alert(`Please set custom player names for both players!`);
  }
}

editPlayer1ButtonElement.addEventListener(`click`, editPlayerName);
editPlayer2ButtonElement.addEventListener(`click`, editPlayerName);

cancelButtonElement.addEventListener(`click`, closeNameDialog);

startButtonElement.addEventListener(`click`, startGame);

