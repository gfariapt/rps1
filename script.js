let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const resultadosDiv = document.querySelector("#results");
const placarDiv = document.querySelector("#placar");
const buttons = document.querySelectorAll(".btn");
const finalResultDiv = document.querySelector("#finalResult");

placarDiv.textContent = `Human Score: ${humanScore} <=> Computer Score: ${computerScore}`;

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

function playRound(humanChoice, computerChoice){
    
    if (humanChoice === computerChoice){
        console.log("Empataste esta ronda");
        resultadosDiv.textContent = "Empataste esta ronda";
        return "empate";
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "rock")){
            console.log("Ganhaste esta ronda");
            resultadosDiv.textContent = "Ganhaste esta ronda";
            humanScore++;
            return "ganhaste";
    }
    else{
        console.log("Perdeste esta ronda");
        resultadosDiv.textContent = "Perdeste esta ronda";
        computerScore++;
        return "perdeste";
    }
}


buttons.forEach((button) =>{
    button.addEventListener("click", (event) => {
        if (gameOver) return;

        const humanChoice = event.target.textContent.toLowerCase();
        console.log(`You picked ${humanChoice}`);

        playRound(humanChoice, getComputerChoice());
        placarDiv.textContent = `Human Score: ${humanScore} <=> Computer Score: ${computerScore}`;

        if (humanScore === 5){
            console.log("Ganhaste!");
            finalResultDiv.textContent = "Ganhaste o Jogo!";
            gameOver = true;
        }
        else if (computerScore === 5){
            console.log("Perdeste!");
            finalResultDiv.textContent = "Perdeste o Jogo!";
            gameOver = true;
        }   
    }) 
});