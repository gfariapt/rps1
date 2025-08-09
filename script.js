function getComputerChoice(){
    let k = Math.floor(Math.random() * 3)

    if(k === 0){
        return "rock";
    }
    else if(k === 1){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("rock, paper, scissors?")
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice === computerChoice){
        console.log("Empataste esta ronda");
        return "empate";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")){
            console.log("Ganhaste esta ronda");
            return "ganhaste";
    }
    else{
        console.log("Perdeste esta ronda");
        return "perdeste";
    }
}

for(let i = 0; i < 5; i++){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    let winner = playRound(humanChoice, computerChoice);

    if (winner === "ganhaste"){
        humanScore++;
    }
    else if (winner === "perdeste"){
        computerScore++;
    }
}

if (humanScore > computerScore){
    console.log("Ganhaste!");
}
else if (humanScore < computerScore){
    console.log("Perdeste!");
}
else {
    console.log("Empate!")
}