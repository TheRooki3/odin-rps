let playerScore = 0;



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

console.log(getComputerChoice());

const getHumanChoice = () =>{
	let choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
	console.log(choice);
	if (choice === "rock" || choice === "paper" || choice === "scissors"){
		gameCheck(choice,getComputerChoice());
	}else{
		alert("Invalid Input");
		choice = prompt("Enter Rock, Paper, or Scissors").toLowerCase();
	}
};

const gameCheck = (playerChoice, computerChoice) =>{
	if(playerChoice === "rock" && computerChoice === "scissors"){
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Win!");
		playerScore ++;
	}else if(playerChoice === "paper" && computerChoice === "rock"){
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Win!");
		playerScore ++;
	}else if(playerChoice === "scissors" && computerChoice === "paper"){
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Win!");
		playerScore ++;
	}else if( playerChoice == computerChoice){
		alert(`The Computer Chose ${computerChoice}`);
		alert("Tie!");
	}else{
		alert(`The Computer Chose ${computerChoice}`);
		alert("You Lose!");
	}
};

getHumanChoice();