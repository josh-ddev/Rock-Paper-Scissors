let playerScore = document.querySelector(".playerScore");
let computerScore = document.querySelector(".computerScore");
score = 0;
playerScore.innerHTML = 0;
computerScore.innerHTML = 0;
function startGame() {
  playerPick();
  computerPick();
  winCheck();
}
const playerPick = () => {
  let player = document.querySelectorAll(".player-pick");
  for (let i = 0; i < player.length; i++) {
    player[i].addEventListener("click", () => {
      let playerpick = player[i].innerHTML;
      if (playerpick === "✊") {
        computerPick(playerpick);
      } else if (playerpick === "✋") {
        computerPick(playerpick);
      } else {
        computerPick(playerpick);
      }
    });
  }
};
const computerPick = (playerPick) => {
  if (playerPick) {
    let computer = ["✊", "✋", "✌"];
    let random = Math.floor(Math.random() * computer.length);
    random = computer[random];
    if (random === "✊") {
      document.querySelector(".computer-pick").innerHTML = random;
      winCheck(playerPick, random);
    } else if (random === "✋") {
      document.querySelector(".computer-pick").innerHTML = random;
      winCheck(playerPick, random);
    } else {
      document.querySelector(".computer-pick").innerHTML = random;
      winCheck(playerPick, random);
    }
  }
};

const winCheck = (playerPick, random) => {
  if (
    (playerPick === "✊" && random === "✊") ||
    (playerPick === "✋" && random === "✋") ||
    (playerPick === "✌" && random === "✌")
  ) {
    document.querySelector(".winner-message").innerHTML = "DRAW";
    playerScore.innerHTML;
    computerScore.innerHTML;
  } else if (
    (playerPick === "✊" && random === "✌") ||
    (playerPick === "✌" && random === "✋") ||
    (playerPick === "✋" && random === "✊")
  ) {
    document.querySelector(".winner-message").innerHTML = "You Win";
    playerScore.innerHTML++;
  } else if (
    (playerPick === "✌" && random === "✊") ||
    (playerPick === "✊" && random === "✋") ||
    (playerPick === "✋" && random === "✌")
  ) {
    document.querySelector(".winner-message").innerHTML = "Computer Win";
    computerScore.innerHTML++;
  }
};

const reset = function () {
  document.querySelector(".rock").innerHTML = "✊";
  document.querySelector(".paper").innerHTML = "✋";
  document.querySelector(".scissors").innerHTML = "✌";
  document.querySelector(".computer-pick").innerHTML = "";
  document.querySelector(".winner-message").innerHTML = "";
  playerScore.innerHTML = 0;
  computerScore.innerHTML = 0;
  document.querySelector(".start").disabled = "true";
};
const help = function () {
  document.querySelector(".help").classList.toggle("show");
};
