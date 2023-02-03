const players = [
  { name: null, symbol: `X` },
  { name: null, symbol: `O` },
];
let currentPlayerNameEditing;

function editPlayerName(event) {
  showElement(playerNameDialogElement);
  currentPlayerNameEditing = event.target.dataset.player - 1;
}

function closeNameDialog() {
  hideElement(playerNameDialogElement);
}

function submitPlayerName(event) {
  event.preventDefault();

  const name = nameInputElement.value.trim();
  if (!name) {
    formElement.classList.add(`invalid`);
    showElement(formInvalidPElement);
    return;
  }
  
  players[currentPlayerNameEditing].name = name;
  playerNameElements[currentPlayerNameEditing].textContent = name;
  nameInputElement.value = ``;
  closeNameDialog();
}

editPlayer1ButtonElement.addEventListener(`click`, editPlayerName);
editPlayer2ButtonElement.addEventListener(`click`, editPlayerName);

formElement.addEventListener(`submit`, submitPlayerName);

cancelButtonElement.addEventListener(`click`, closeNameDialog);
