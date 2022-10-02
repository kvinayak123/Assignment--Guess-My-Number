"use strict";
let score = 20;
let highScore = 0;
let secretNumber = (document.querySelector(".number").value = Math.floor(
  Math.random() * 20
));
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guessNumber = document.querySelector(".guess").value;
  if (score > 1) {
    if (guessNumber > secretNumber) {
      document.querySelector(".message").textContent = "Number is High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guessNumber < secretNumber) {
      document.querySelector(".message").textContent = "Number is low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "Your guess is correct🥳";
      document.querySelector("body").style.backgroundColor = "#61d80e";
      document.querySelector(".number").textContent = secretNumber;

      if (score > highScore) console.log(highScore);
      document.querySelector(".highscore").textContent = score;
    }
  } else ").textCodocument.querySelector(".messagentent = "Your lost the game";
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").value = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
});
