var yourScore = 0;
var opponentScore = 0;
var choices = ["rock", "paper", "scissors"];

window.onload = function() {
  for (let i = 0; i < choices.length; i++) {
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.alt = choices[i]; 
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
};

function selectChoice() {
  let you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  // Random choice for opponent
  let opponent = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById("opponent-choice").src = opponent + ".png";

  let result = "";
  if (
    (you === "rock" && opponent === "scissors") ||
    (you === "scissors" && opponent === "paper") ||
    (you === "paper" && opponent === "rock")
  ) {
    yourScore++;
    result = "Sen Kazandın!";
  } else {
    opponentScore++;
    result = "Rakibin Kazandı!";
  }
    
 
 

  // Update scores and display result
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  // Check for game over
  checkGameOver();
  document.getElementById("result").innerText = result; 

}

function checkGameOver(){
    if (yourScore === 3) {
        alert("Sen Kazandın!");
        resetGame();
      } else if (opponentScore === 3) {
        alert("Rakibin Kazandı!");
        resetGame();
      }
}

function resetGame() {
  yourScore = 0;
  opponentScore = 0;
  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
  document.getElementById("result").innerText = ""; 
}
