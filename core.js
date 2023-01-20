// GAME CHOICE ARRAY TO NOT REPEAT THINGS
const gameChoices = [
	{ 'id': 'Rock', 'value': 0 },
	{ 'id': 'Paper', 'value': 1 },
	{ 'id': 'Scissors', 'value': 2 }
]

// GENERATE AND RETURN 0/1/2 VALUES TO ASSIGN TO ROCK/PAPER/SCISSORS
function getComputerChoice() {
	return Math.floor(Math.random() * 3);
}

// PROMPT FOR PLAYER CHOICE AND DETERMINE CHOICE VALUE
function getPlayerChoice() {
	playerInput = prompt("Rock, Paper, Scissors, go!").toLowerCase();
	let choice = '';
 
	for (i = 0; i <= 2; i++) {
		if (gameChoices[i].id.toLowerCase() == playerInput) {
			choice = gameChoices[i].value;
			return choice;
		}
	}
}

// PLAY A SINGLE ROUND OF RPS AND RETURN THE WINNER
function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
	const cpuWin = console.log('CPU wins with ' + gameChoices[computerSelection].id + '!');
	const playerWin = console.log('Player wins with ' + gameChoices[playerSelection].id + '!');


	if (playerSelection == computerSelection) {
		console.log('Draw!');
	} else if (playerSelection = 0) {
		if (computerSelection = 1) {
			return cpuWin;
		} else {
			return playerWin;
		}
	} else if (playerSelection = 1) {
		if (computerSelection = 0) {
			return playerWin;
		} else {
			return cpuWin;
		}
	}
}

// PLAY A GAME (DEFAULT 5 ROUNDS) OF RPS
function playGame(rounds = 5) {
	let playerScore = 0;
	let computerScore = 0;
}