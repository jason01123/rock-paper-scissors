
let playerScore = 0;
let computerScore = 0;

playGame();

function playGame() {
/*  for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log("The score is Computer: " + computerScore + " Player: " + playerScore);
    } */
    
    const rockBtn = document.querySelector("#rockBtn");
    rockBtn.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });

    const paperBtn = document.querySelector("#paperBtn");
    paperBtn.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });

    const scissorsBtn = document.querySelector("#scissorsBtn");
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });

    if(computerScore > playerScore)
        console.log("The computer has won " + computerScore + " to " + playerScore);
    else if(playerScore > computerScore)
        console.log("The player has won " + playerScore + " to " + computerScore);
    else
        console.log("The game was tied");
}

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");
    if(humanChoice === "rock")
    {
        if(computerChoice === "paper")
        {
            computerScore++;
            result.textContent = "You lose.  Paper beats rock"
        }
        else if(computerChoice === "scissors")
        {
            playerScore++;
            result.textContent = "You win.  Rock beats scissors";
        }
        else
            result.textContent = "Computer chose rock.  It was a tie";
    }
    else if(humanChoice === "paper") 
    {
        if(computerChoice === "rock")
        {
            playerScore++;
            result.textContent ="You win.  Paper beats rock";
        }
        else if(computerChoice === "scissors")
        {
            computerScore++;
            result.textContent = "You lose.  Scissors beats paper";
        }
        else
            result.textContent = "Computer chose paper.  It was a tie";
    }
    else // humanChoice must be scissors
    {
        if(computerChoice === "paper")
        {
            playerScore++;
            result.textContent = "You win.  Scissors beats paper";
        }
        else if(computerChoice === "rock")
        {
            computerScore++;
            result.textContent = "You lose.  Rock beats scissors";
        }
        else
            result.textContent = "Computer chose scissors.  It was a tie";
    }
    const pScore = document.querySelector("#gameScore");
    pScore.textContent = "Player Score: " + 
        playerScore + " Computer Score: " + computerScore;
    if(playerScore > 4 || computerScore > 4) {
        if(playerScore > 4) {
            alert("You won against the computer!");
        }
        else {
            alert("You lost against the computer!")
        }
        playerScore = 0;
        computerScore = 0;
        result.textContent = "";
        pScore.textContent = "";
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

