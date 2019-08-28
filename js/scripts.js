// Back-end Function

//Player Object
function Player(name) {
  this.name = name,
  this.gameScore = 0,
  this.roundScore = 0
}
//player clicks roll dice
//Die returns a random number between 1 and 6
Player.prototype.rollDie = function(roll) {
  var roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
  if (roll === 1) {
    this.roundScore = 0;
    Game.SwitchPlayer();
  } else {
    this.roundScore += roll;
  }
}
//That number is added to their round score
//player chooses to roll dice again
//Die returns another randome number
//New number is added to the round score
//player has two options to end turn
//player can click hold
//round score is added to total score
//turn ends
//placer rolls a 1
//round score goes to zero
//turn ends

//Game Object
function Game(player1, player2) {
  var player1 = new Player("player1");
  var player2 = new Player("player2");
  this.currentPlayer = [player1, player2];
  console.log(this.currentPlayer);
  this.maxScore = 20
}
  //2 players
Game.prototype.SwitchPlayer = function() {
  // this.currentPlayer[0], this.currentPlayer[1] = this.currentPlayer[1];
}
  //The game has a max score



Player.prototype.hold = function() {
  this.gameScore += this.roundScore
}

//UI function
$(document).ready(function(){
  $(".pigDice#roll").submit(function(event){
    // var newPlayer = new Player("steve");
    // var rollDice = Player.rollDie();
    event.preventDefault();


  });
});
