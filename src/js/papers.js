
const stoneRef = document.querySelector("#stone");
const scissors = document.querySelector("#scissors");
const paperRef = document.querySelector("#paper");
const computerButton = document.querySelector(".paper__button");


const resultText = document.querySelector(".paper__win");
const computerText = document.querySelector('[data-score="computer"]');
const playerText = document.querySelector('[data-score="player"]');


const options = ["stone", "scissors", "paper"];

let player = 0;
let computer = 0;
let lastComputerChoice = "";

function getRandomElement(arr) {
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

function playRound(playerChoice){

  const computerChoice = getRandomElement(options)
   lastComputerChoice = computerChoice;

  if(playerChoice === computerChoice){
    resultText.textContent = "Нічія";
    resultText.style.color = "gray"
    return
  }

  const playerWin = 
  (playerChoice === "stone" && computerChoice === "scissors") ||
  (playerChoice === "scissors" && computerChoice === "paper") ||
  (playerChoice === "paper" && computerChoice === "stone");


  if(playerWin){
    player++;
    resultText.textContent = "Ви виграли раунд!"
    resultText.style.color = "green"
  }else{
    computer++;
    resultText.textContent = "Ви програли раунд!"
     resultText.style.color = "red";
  }


  computerText.textContent = `Компютер - ${computer}`
  playerText.textContent = `Ви - ${player}`

  computerButton.textContent = "Варіант комп’ютера";
}

computerButton.addEventListener("click", () => {
    if(lastComputerChoice){
        computerButton.textContent = `Комп’ютер обрав: ${lastComputerChoice}`;
    }
});


stoneRef.addEventListener("click", () => playRound("stone"))
scissors.addEventListener("click", () => playRound("scissors"))
paperRef.addEventListener("click", () => playRound("paper"))
