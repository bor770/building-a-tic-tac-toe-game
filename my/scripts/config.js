const players = [
  { name: null, symbol: `X` },
  { name: null, symbol: `O` },
];
let currentPlayerNameEditing;

function editPlayerName(event) {
  playerNameDialogElement.classList.remove(`hidden`);
  currentPlayerNameEditing = event.target.dataset.player - 1;
}

function closeNameDialog() {
  playerNameDialogElement.classList.add(`hidden`);
}

function submitPlayerName(event) {
  event.preventDefault();

  const name = nameInputElement.value.trim();
  if (!name) {
    formElement.classList.add(`invalid`);
    formInvalidPElement.classList.remove(`hidden`);
  } else {
    players[currentPlayerNameEditing].name = name;
    playerNameElements[currentPlayerNameEditing].textContent = name;
    nameInputElement.value = ``;
    closeNameDialog();
  }
}

editPlayer1ButtonElement.addEventListener(`click`, editPlayerName);
editPlayer2ButtonElement.addEventListener(`click`, editPlayerName);

formElement.addEventListener(`submit`, submitPlayerName);

cancelButtonElement.addEventListener(`click`, closeNameDialog);
