console.log("stam");
var score, choice, compChoice, userChoice, scoreDom;
score = 0;

//init
const init = function () {
  scoreDom = document.getElementById("score");
  document.getElementById("reset").addEventListener("click", init);
  document.querySelector("main").style.display = "flex";
  document.querySelector(".selection").style.display = "none";
  document.getElementById("user_select").classList.remove(`btn-rock`);
  document.getElementById("user_select").classList.remove(`btn-scissors`);
  document.getElementById("user_select").classList.remove(`btn-paper`);
  document.getElementById("computer_select").classList.remove(`btn-paper`);
  document.getElementById("computer_select").classList.remove(`btn-scissors`);
  document.getElementById("computer_select").classList.remove(`btn-rock`);
  document.querySelector(".btn-rules").addEventListener("click", function () {
    document.querySelector("main").style.display = "none";
    document.querySelector(".rules-modal").style.display = "flex";
  });
  document.getElementById("close").addEventListener("click", function () {
    document.querySelector("main").style.display = "flex";
    document.querySelector(".rules-modal").style.display = "none";
  });

  scoreDom.textContent = score;

  compChoice = Math.trunc(Math.random() * 3) + 1;
  console.log(compChoice);
  if (compChoice === 1) {
    //paper
    document.querySelector(".comp").src = "./assets/images/icon-paper.svg";
    document.getElementById("computer_select").classList.add(`btn-paper`);
  }
  if (compChoice === 2) {
    // scissors
    document.querySelector(".comp").src = "./assets/images/icon-scissors.svg";
    document.getElementById("computer_select").classList.add(`btn-scissors`);
  }

  if (compChoice === 3) {
    //rock
    document.querySelector(".comp").src = "./assets/images/icon-rock.svg";
    document.getElementById("computer_select").classList.add(`btn-rock`);
  }
};

(function () {
  // this function is for adding event listener for each user selection
  //selecting elements
  var paperBtn = document.querySelector(".btn-paper");
  paperBtn.addEventListener("click", function () {
    document.querySelector("main").style.display = "none";
    document.querySelector(".selection").style.display = "flex";
    choice = "paper";
    document.getElementById("user_select").classList.add(`btn-${choice}`);
    document.querySelector(
      ".choice"
    ).src = `./assets/images/icon-${choice}.svg`;
    userChoice = 1;

    if (compChoice === 1) {
      document.querySelector(".big-text").textContent = "you Draw";
    }
    if (compChoice === 2) {
      document.querySelector(".big-text").textContent = "TRY AGAIN";
      score--;
    }
    if (compChoice === 3) {
      document.querySelector(".big-text").textContent = "you WIN";
      score++;
    }
  });
  var rockBtn = document.querySelector(".btn-rock");
  rockBtn.addEventListener("click", function () {
    document.querySelector("main").style.display = "none";
    document.querySelector(".selection").style.display = "flex";
    choice = "rock";
    document.getElementById("user_select").classList.add(`btn-${choice}`);
    document.querySelector(
      ".choice"
    ).src = `./assets/images/icon-${choice}.svg`;
    userChoice = 3;
    if (compChoice === 1) {
      document.querySelector(".big-text").textContent = "TRY AGAIN";
      score--;
    }
    if (compChoice === 2) {
      document.querySelector(".big-text").textContent = "you WIN";
      score++;
    }
    if (compChoice === 3) {
      document.querySelector(".big-text").textContent = "you Draw";
    }
  });
  var scissorskBtn = document.querySelector(".btn-scissors");
  scissorskBtn.addEventListener("click", function () {
    document.querySelector("main").style.display = "none";
    document.querySelector(".selection").style.display = "flex";
    choice = "scissors";
    document.getElementById("user_select").classList.add(`btn-${choice}`);
    document.querySelector(
      ".choice"
    ).src = `./assets/images/icon-${choice}.svg`;
    userChoice = 2;
    if (compChoice === 1) {
      document.querySelector(".big-text").textContent = "you WIN";
      score++;
    }
    if (compChoice === 2) {
      document.querySelector(".big-text").textContent = "you Draw";
    }
    if (compChoice === 3) {
      document.querySelector(".big-text").textContent = "TRY AGAIN";
      score--;
    }
  });
})();
init();
