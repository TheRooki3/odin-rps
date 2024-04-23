let playerScore = 0;
let computerScore = 0;
const playButton = document.getElementById("play");

const getComputerChoice = () =>{
	const randomNum = Math.round(Math.random() * 2) + 1;
	switch (randomNum){
		case 1:
			return "rock";
			break;
		case 2:
			return "paper";
			break;
		case 3: 
			return "scissors";
			break;
		default:
			return "try again";
	}
};
const getHumanChoice = () =>{
	let choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
	console.log(choice);
	if (choice === "rock" || choice === "paper" || choice === "scissors"){
		gameCheck(choice,getComputerChoice());
	}else{
		alert("Invalid Input");
		getHumanChoice();
	}
};

const gameCheck = (playerChoice, computerChoice) =>{
	if(playerChoice === "rock" && computerChoice === "scissors"){
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Win!");
		playerScore++;
		playAgain();
	}else if(playerChoice === "paper" && computerChoice === "rock"){
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Win!");
		playerScore++;
		playAgain();
	}else if(playerChoice === "scissors" && computerChoice === "paper"){
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Win!");
		playerScore++;
		playAgain();
	}else if( playerChoice == computerChoice){
		alert(`The Computer Chose ${computerChoice}`);
		alert("Tie!");
		playAgain();
	}else{
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Lose!");
		computerScore++;
		playAgain();
	}
}


const playAgain = () => {
	alert(`Your Score: ${playerScore} Computer Score: ${computerScore}`);
	const conformation = confirm("Would you like to play again?");
	if (conformation){
		getHumanChoice();
	}else{
		result(playerScore, computerScore);
	}
};

const result = (playerNum, computerNum) =>{
	if(playerNum > computerNum){
		alert("YOU WIN THE GAME, YOU BEAT THE MATRIX");
	}else{
		alert("YOU LOSE THE GAME!!!!")
	}
};

playButton.addEventListener('click', ()=>{
	getHumanChoice();
});