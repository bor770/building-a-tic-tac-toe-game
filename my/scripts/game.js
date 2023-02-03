function startGame() {
  if (!players[0].name || !players[1].name) {
    alert(`Please set custom player names for both players!`);
  }
}

startButtonElement.addEventListener(`click`, startGame);
