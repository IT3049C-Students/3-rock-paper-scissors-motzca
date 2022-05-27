// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button') ;
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  scoreParagraph.innerHTML = game.username + ": " + game.score.user + " v CPU: " + game.score.cpu;
}

// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = game.gameHistoryLog.join("<br>");

}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  game = new RockPaperScissors(userName.value);
  updateScoreTallyUI();
  gameScreen.classList.remove('d-none');
  welcomeScreen.classList.add("d-none");
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  game.play(userSelection.value);
  updateScoreTallyUI();
  updateGameHistoryUI();
});
