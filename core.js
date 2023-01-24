// GAME CHOICE ARRAY TO NOT REPEAT THINGS
const gameChoices = [
	{ 'id': 'Rock', 'value': 0 },
	{ 'id': 'Paper', 'value': 1 },
	{ 'id': 'Scissors', 'value': 2 }
];
let playerScore = 0;
let computerScore = 0;

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
	console.log('Player chose ' + gameChoices[playerSelection].id + ' (' + gameChoices[playerSelection].value + ')' + '. CPU chose ' + gameChoices[computerSelection].id + ' (' + gameChoices[computerSelection].value + ').');

	if (playerSelection === computerSelection) {
		matchDraw(playerSelection);
	} else if (playerSelection == 0) {
		if (computerSelection == 1) {
			computerWin(playerSelection);
		} else if (computerSelection == 2) {
			playerWin(playerSelection);
		}
	} else if (playerSelection == 1) {
		if (computerSelection == 0) {
			playerWin(playerSelection);
		} else if (computerSelection == 2) {
			computerWin(playerSelection);
		}
	} else if (playerSelection == 2) {
		if (computerSelection == 0) {
			computerWin(playerSelection);
		} else if (computerSelection == 1) {
			playerWin(playerSelection);
		}
	}
}

// PLAYER/CPU WIN FUNCTIONS FOR ALERTING AND SCORE INCREASES
function playerWin(selection) {
	console.log('Player wins with ' + gameChoices[selection].id + '!');
	playerScore++;
}

function computerWin(selection) {
	console.log('CPU wins with ' + gameChoices[selection].id + '!');
	computerScore++;
}

function matchDraw(selection) {
	console.log('Draw! Player and CPU both chose ' + gameChoices[selection].id + '.');
}


// PLAY A GAME (DEFAULT 5 ROUNDS) OF RPS
function playGame(rounds = 5) {
	playerScore = 0;
	computerScore = 0;

	for (let r = 0; r <= rounds; r++) {
		playRound();
	}

	if (playerScore === computerScore) {
		console.log('Draw!');
	} else if (playerScore > computerScore) {
		console.log('You win!');
	} else {
		console.log('CPU wins!');
	}
}