let playButton = document.querySelector(".play-button");
let playAgainButton = document.querySelector(".play-again-button");
let playerScoreText = document.querySelector("#human-score");
let computerScoreText = document.querySelector("#computer-score");
let scoreContainer = document.querySelector(".score-container");
let mainContainer = document.querySelector(".main-container");
let roundInfo = document.querySelector(".round-info");

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let playerChoice = "";
let playerScore = 0;
let computerScore = 0;

function assignListeners(){
    rock.addEventListener("click", setRock);
    paper.addEventListener("click", setPaper);
    scissors.addEventListener("click", setScissors);
}

assignListeners();

playButton.addEventListener("click", (e) => {
    mainContainer.classList.remove("hide-content");
    playButton.classList.add("hide-content");
});

playAgainButton.addEventListener("click", () => {
    playAgainButton.classList.add("hide-content");
    assignListeners();
    playerScore = 0;
    computerScore = 0;
    setScoreAndResult(0, 0, "");
});

rock.addEventListener("click", setRock);
paper.addEventListener("click", setPaper);
scissors.addEventListener("click", setScissors);

//Assigns player choice once clicked
function setRock(){
    playerChoice = "Rock";
    playRound();
}

function setPaper(){
    playerChoice = "Paper";
    playRound();
}

function setScissors(){
    playerChoice = "Scissors";
    playRound();
}

//Game logic
function computerPick(){
    const options = ["Rock", "Paper", "Scissors"];
    let pickedOption = options[Math.floor(Math.random() * options.length)];
    return pickedOption;
}

function playRound(){
    let computerChoice = computerPick();
    let outcome = "";

    console.log("Computer: " + computerChoice);
    console.log("Player: " + playerChoice);

    if (playerChoice == computerChoice) {
        
        outcome = "It's a tie!";

    } else if (playerChoice == "Rock"){

        if (computerChoice == "Paper"){
            outcome = "Computer wins!";
            computerScore++;
        }else if (computerChoice == "Scissors"){
            outcome = "Player wins!";
            playerScore++;
        }

    } else if (playerChoice == "Scissors"){

        if (computerChoice == "Rock"){
            outcome = "Computer wins!";
            computerScore++;
        }else if (computerChoice == "Paper"){
            outcome = "Player wins!";
            playerScore++;
        }

    } else if (playerChoice == "Paper"){

        if (computerChoice == "Scissors"){
            outcome = "Computer wins!";
            computerScore++;
        }else if (computerChoice == "Rock"){
            outcome = "Player wins!";
            playerScore++;
        }
    }

    setScoreAndResult(playerScore, computerScore, outcome);
    checkResult();
}

function setScoreAndResult(playerScore, computerScore, outcome) {
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    roundInfo.textContent = outcome;
}

function checkResult(){

    if(playerScore == 5 || computerScore == 5){
        rock.removeEventListener('click', setRock);
        paper.removeEventListener('click', setPaper);
        scissors.removeEventListener('click', setScissors);
    }

    if(playerScore == 5) {
        roundInfo.textContent = "You win! Congratulations!";
        playAgainButton.classList.remove("hide-content");
    }else if(computerScore == 5){
        roundInfo.textContent = "The Computer wins! Better luck next time!";
        playAgainButton.classList.remove("hide-content");
    }
    

}

