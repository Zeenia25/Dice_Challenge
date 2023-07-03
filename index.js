var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var leftDiceImage = document.querySelector(".img1");
leftDiceImage.setAttribute("src", "dice" + randomNumber1 + ".png");
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var rightDiceImage = document.querySelector(".img2");
rightDiceImage.setAttribute("src", "dice" + randomNumber2 + ".png");
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.innerHTML = "Player 2 Wins!";
  } else {
    heading.innerHTML = "It's a Draw!";
  }