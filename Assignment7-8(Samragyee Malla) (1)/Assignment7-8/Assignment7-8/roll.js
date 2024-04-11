const rollButton = document.getElementById("roll-button");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const scoreP1 = document.getElementById("score-p1");
const scoreP2 = document.getElementById("score-p2");
const winner = document.getElementById("winner");

let score1 = 0;
let score2 = 0;
let counter=1;

rollButton.addEventListener("click", function() {
  const diceValue1 = Math.floor(Math.random() * 6) + 1;
  const diceValue2 = Math.floor(Math.random() * 6) + 1;

  dice1.src = `dice${diceValue1}.png`;
  dice2.src = `dice${diceValue2}.png`;

  const scoreDiff = Math.abs(diceValue1 + diceValue2);

  if (counter%2!=0) {
    score1 += scoreDiff;
    scoreP1.textContent = score1;
    counter+=1;
  } else {
    score2 += scoreDiff;
    scoreP2.textContent = score2;
    counter+=1;
  }

  if (score1 >= 50) {
    winner.textContent = "Winner: Player 1";
    winner.style.display = "block";
    rollButton.disabled = true; // Disable roll button when someone wins
  } else if (score2 >= 50) {
    winner.textContent = "Winner: Player 2";
    winner.style.display = "block";
    rollButton.disabled = true; // Disable roll button when someone wins
  }
});