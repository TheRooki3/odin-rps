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
		alert(`You Chose ${playerChoice}\nThe Computer Chose ${computerChoice}\nYou Win!`);
		playerScore++;
		playAgain();
	}else if(playerChoice === "paper" && computerChoice === "rock"){
		alert(`You Chose ${playerChoice}\nThe Computer Chose ${computerChoice}\nYou Win!`);
		playerScore++;
		playAgain();
	}else if(playerChoice === "scissors" && computerChoice === "paper"){
		alert(`You Chose ${playerChoice}\nThe Computer Chose ${computerChoice}\nYou Win!`);
		playerScore++;
		playAgain();
	}else if( playerChoice == computerChoice){
		alert(`You Chose ${playerChoice}\nThe Computer Chose ${computerChoice}\nTie!`);
		playAgain();
	}else{
		alert(`You Chose ${playerChoice}\nThe Computer Chose ${computerChoice}\nYou Lose!`);
		computerScore++;
		playAgain();
	}
}


const playAgain = () => {
	const conformation = confirm(`Your Score: ${playerScore} Computer Score: ${computerScore}\nWould you like to play again?`);
	if (conformation){
		getHumanChoice();
	}else{
		result(playerScore, computerScore);
	}
};

const result = (playerNum, computerNum) =>{
	if(playerNum > computerNum){
		alert("YOU WIN THE GAME!\nYOU BEAT THE MATRIX");
	}else if( playerNum === computerNum){
		alert("A TIE!!!")
	}else{
		alert("YOU LOSE THE GAME!\nTHE MATRIX WON");
	}
};

playButton.addEventListener('click', ()=>{
	playerScore = 0;
	computerScore =0;
	getHumanChoice();
});