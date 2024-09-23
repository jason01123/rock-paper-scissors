
let playerScore = 0;
let computerScore = 0;
playGame();

function playGame() {
    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("The score is Computer: " + computerScore + " Player: " + playerScore);
    }
    
    if(computerScore > playerScore)
        console.log("The computer has won " + computerScore + " to " + playerScore);
    else if(playerScore > computerScore)
        console.log("The player has won " + playerScore + " to " + computerScore);
    else
        console.log("The game was tied");
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            computerScore++;
            console.log("You lose.  Paper beats rock");
        }
        else if(computerChoice === "scissors")
        {
            playerScore++;
            console.log("You win.  Rock beats scissors");
        }
        else
            console.log("Computer chose rock.  It was a tie");
    }
    else if(humanChoice === "paper") 
    {
        if(computerChoice === "rock")
        {
            playerScore++;
            console.log("You win.  Paper beats rock");
        }
        else if(computerChoice === "scissors")
        {
            computerScore++;
            console.log("You lose.  Scissors beats paper");
        }
        else
            console.log("Computer chose paper.  It was a tie");
    }
    else // humanChoice must be scissors
    {
        if(computerChoice === "paper")
        {
            playerScore++;
            console.log("You win.  Scissors beats paper");
        }
        else if(computerChoice === "rock")
        {
            computerScore++;
            console.log("You lose.  Rock beats scissors");
        }
        else
            console.log("Computer chose scissors.  It was a tie");
    }
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3 + 1);    
    if(choice === 1)
        return "rock";
    else if(choice === 2)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Please enter your choice");
    while(true) {
        if(choice.toLowerCase() === "rock" ||
            choice.toLowerCase() === "paper" || 
            choice.toLowerCase() === "scissors")
            return choice.toLowerCase();
        else
            choice = prompt("Invalid response. Please enter rock, paper or scissors");
    }
}