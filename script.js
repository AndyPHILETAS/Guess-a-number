"use strict";

//Initialisation des variables qui vont être utilisé dans le projet
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //console.log(typeof guess);

  //Quand il n'y pas de saisi
  if (!guess) {
    displayMessage("🤯 Not a number !");
    // Quand le joueur gagne
  } else if (guess === secretNumber) {
    displayMessage("🎉 Well done YOU WIN!");

    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;

      document.querySelector(".highscore").textContent = highscore;
    }

    // Quand le joueur doit retenter sa chance
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;

      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You loose !");

      document.querySelector(".score").textContent = 0;
    }
  }
  //Fonction pour le boutton rejour 'Again'
  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage("Start guessing...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
  });
});
