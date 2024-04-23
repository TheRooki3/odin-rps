
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