// GAME CHOICE ARRAY TO NOT REPEAT THINGS
const gameChoices = [
	{ 'id': 'Rock', 'value': 0 },
	{ 'id': 'Paper', 'value': 1 },
	{ 'id': 'Scissors', 'value': 2 }
];
const playerScore = 0;
const computerScore = 0;

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

// PLAY A SINGLE ROUND OF RPS AND RETURN THE RESULT
function playRound(playerSelection = getPlayerChoice(), computerSelection = getComputerChoice()) {
	const cpuWin = 'CPU wins with ' + gameChoices[computerSelection].id + '!';
	const playerWin = 'Player wins with ' + gameChoices[playerSelection].id + '!';
	const matchDraw = 'Draw! Player and CPU both chose ' + gameChoices[playerSelection].id + '.';
	let result = '';

	console.log('Player chose ' + gameChoices[playerSelection].id + ' (' + gameChoices[playerSelection].value + ')' + '. CPU chose ' + gameChoices[computerSelection].id + ' (' + gameChoices[computerSelection].value + ').');

	if (playerSelection === computerSelection) {
		result = matchDraw;
	} else if (playerSelection == 0) {
		if (computerSelection == 1) {
			result = cpuWin;
		} else if (computerSelection == 2) {
			result = playerWin;
		}
	} else if (playerSelection == 1) {
		if (computerSelection == 0) {
			result = playerWin;
		} else if (computerSelection == 2) {
			result = cpuWin;
		}
	} else if (playerSelection == 2) {
		if (computerSelection == 0) {
			result = cpuWin;
		} else if (computerSelection == 1) {
			result = playerWin;
		}
	}

	console.log(result);
}


// PLAY A GAME (DEFAULT 5 ROUNDS) OF RPS
function playGame(rounds = 5) {
	for (let r = 0; r <= rounds; r++) {

	}
}