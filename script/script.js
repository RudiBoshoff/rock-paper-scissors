const rock = $("#rock");
const paper = $("#paper");
const scissors = $("#scissors");

function computerPlay() {
  var rand = Math.floor(Math.random() * 3);
  var choice = "";
  switch (rand) {
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
  }
  return choice;
}

var round = 0;
var userScore = 0;
var pcScore = 0;

$(".start").click(function() {
  $(this).addClass("hidden");
  round = 0;
  userScore = 0;
  pcScore = 0;
  $(".scoreBoard").removeClass("hidden");
  $(".weapon").removeClass("hidden");
  $(".container").removeClass("hidden");
  $("#userScore").html(userScore);
  $("#round").html(userScore);
  $("#pcScore").html(userScore);
});

function display(user, pc) {
  $(".user").html(user);
  $(".pc").html(pc);
  $("#round").html(round);
  $(".answer").removeClass("hidden");
  $("#userScore").html(userScore);
  $("#round").html(round);
  $("#pcScore").html(pcScore);
  return false;
}

function resetGame() {
  round = 0;
  userScore = 0;
  pcScore = 0;
  $(".answer").addClass("hidden");
  $(".scoreBoard").addClass("hidden");
  $(".weapon").addClass("hidden");
  $(".container").addClass("hidden");
  $("#userScore").html(userScore);
  $("#round").html(userScore);
  $("#pcScore").html(userScore);
  $(".start").removeClass("hidden");
  $(".draw").addClass("hidden");
  $(".loser").addClass("hidden");
  $(".winner").addClass("hidden");
}

function isWinner() {
  if (userScore == 5 || pcScore == 5) {
    if (userScore == pcScore) {
      $(".draw").removeClass("hidden");
      $(".loser").addClass("hidden");
      $(".winner").addClass("hidden");
      console.log("draw");
    } else if (userScore < pcScore) {
      $(".loser").removeClass("hidden");
      $(".winner").addClass("hidden");
      $(".draw").addClass("hidden");
      console.log("lose");
    } else {
      $(".winner").removeClass("hidden");
      $(".draw").addClass("hidden");
      $(".loser").addClass("hidden");
      console.log("win");
    }
    $(".reset").removeClass("hidden");
    return false;
  }
}
// RESET BUTTON
$(".reset").click(function() {
  resetGame();
  $(".reset").addClass("hidden");
});

// ROCK
rock.on("click", function() {
  var pc = computerPlay();
  var user = $(this).attr("value");
  round += 1;
  scoreRock(pc);
  display(user, pc);
  isWinner();
  return false;
});

function scoreRock(pc) {
  switch (pc) {
    case "scissors":
      userScore += 1;
      break;
    case "paper":
      pcScore += 1;
  }
}
// SCISSORS
scissors.on("click", function() {
  var pc = computerPlay();
  var user = $(this).attr("value");
  round += 1;
  scoreScissors(pc);
  display(user, pc);
  isWinner();
  return false;
});

function scoreScissors(pc) {
  switch (pc) {
    case "paper":
      userScore += 1;
      break;
    case "rock":
      pcScore += 1;
  }
}
// PAPER
paper.on("click", function() {
  var pc = computerPlay();
  var user = $(this).attr("value");
  round += 1;
  scorePaper(pc);
  display(user, pc);
  isWinner();
  return false;
});

function scorePaper(pc) {
  switch (pc) {
    case "rock":
      userScore += 1;
      break;
    case "scissors":
      pcScore += 1;
  }
}
