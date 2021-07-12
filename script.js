let options = ["Rock", "Paper", "Scissors"];

function computerPick(){
    let pickedOption = options[Math.floor(Math.random() * options.length)];
    return pickedOption;
}

function playerPick(){
    let pickedOption = prompt("Rock, paper or scissors?");
    pickedOption = pickedOption.charAt(0).toUpperCase() + pickedOption.slice(1).toLowerCase();
    if(!options.includes(pickedOption)){
        alert("You didn't pick any of the given options! Try Again!");
        playerPick();
    }
    return pickedOption;
}

function playRound(){
    let computerSelection = computerPick();
    let playerSelection = playerPick();

    console.log("Computer: " + computerSelection);
    console.log("Player: " + playerSelection);

    if (playerSelection == computerSelection) {
        
        console.log("It's a tie!");

    } else if (playerSelection == "Rock"){

        if (computerSelection == "Paper"){
            console.log("Computer wins!");
        }else if (computerSelection == "Scissors"){
            console.log("Player wins!");
        }

    } else if (playerSelection == "Scissors"){

        if (computerSelection == "Rock"){
            console.log("Computer wins!");
        }else if (computerSelection == "Paper"){
            console.log("Player wins!");
        }

    } else if (playerSelection == "Paper"){

        if (computerSelection == "Scissors"){
            console.log("Computer wins!");
        }else if (computerSelection == "Rock"){
            console.log("Player wins!");
        }

    }
    console.log("-----------------------------");
}

function game(){

    for(let i=0;i<10;i++){
        playRound();
    }

}

game();
