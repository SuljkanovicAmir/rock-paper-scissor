let options = ['rock', 'paper', 'scissor'];
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
const images = document.querySelectorAll('.pChoices img');
const playerScores = document.querySelector('#p1');
const computerScores = document.querySelector('#p2');
const winner = document.querySelector('#p3');




function computerPlay() {   
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
    let roundWinner;

    if (playerSelection === computerSelection) {
        roundWinner = "It's a tie";
    }
    if ((playerSelection === 'rock' && computerSelection === 'scissor') ||
       (playerSelection === 'paper' && computerSelection === 'rock') ||
       (playerSelection === 'scissor' && computerSelection === 'paper'))
       {
       playerScore++;
       roundWinner = 'Player won this round'; 
       }
    if ((computerSelection === "scissor" && playerSelection === 'paper') ||
        (computerSelection === 'rock' && playerSelection === 'scissor') ||
        (computerSelection === 'paper' && playerSelection === 'rock')) 
        {
        computerScore++;
        roundWinner = 'Computer won this round'; 
       }
       return roundWinner;
}

function playerPick () {
    let pick = prompt("Choose something:");  
    return pick;
}

function finalScore () {
  if (playerScore == 5) {
    return 'You Win';
  } else if (computerScore == 5) {
    return 'You have lost';
  } 
}
   


images.forEach((img) => {
  img.addEventListener('click', () => {
    playerSelection = img.alt;  
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    playerScores.textContent = `PLAYER SCORE: ${playerScore}`;
    computerScores.textContent = `COMPUTER SCORE: ${computerScore}`;
    if (playerScore == 5) {
      winner.textContent = "YOU WIN!"
    } else if (computerScore == 5) {
      winner.textContent = 'YOU HAVE LOST!';
    } 
  });
});


