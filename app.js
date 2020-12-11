let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function computerChoice() {
	const choices = ['r', 'p', 's'];
	const rand = Math.floor(Math.random()*3);
	return choices[rand];
}

function convertWord(letter) {
	if(letter == "r") return "Rock";
	if(letter == "p") return "Paper";
	return "Scissors";
}

function win(user, computer) {
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	const userChoice = document.getElementById(user);

	++userScore;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = `${convertWord(user)}${smallUser} beat ${convertWord(computer)}${smallComp}. You Win!`;
	userChoice.classList.add("green-glow");
	setTimeout(() => userChoice.classList.remove("green-glow"), 500);
}

function lose(user, computer) {
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	const userChoice = document.getElementById(user)

	++computerScore;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${convertWord(user)}${smallComp} beat ${convertWord(computer)}${smallUser}. You Lose!`;
	userChoice.classList.add("red-glow");
	setTimeout(() => userChoice.classList.remove("red-glow"), 500);
}

function draw(user, computer) {
	const smallUser = "user".fontsize(3).sub();
	const smallComp = "comp".fontsize(3).sub();
	const userChoice = document.getElementById(user);

	result_div.innerHTML = `${convertWord(user)}${smallComp} ties with ${convertWord(computer)}${smallUser}. No One Wins!`;
	userChoice.classList.add("grey-glow");
	setTimeout(() => userChoice.classList.remove("grey-glow"), 500);
}

function game(userChoice) {
	const compChoice = computerChoice();

	switch(userChoice+compChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, compChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(userChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, compChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', () => game("r"))
	paper_div.addEventListener('click', () => game("p"))
	scissors_div.addEventListener('click', () => game("s"))
}

main();