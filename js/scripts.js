// Back-end Function
//Player Object
function Player(name) {
  this.name = name,
  this.gameScore = 0,
  this.roundScore = 0
}
var newGame = new Game()
//player clicks roll dice
//Die returns a random number between 1 and 6
Player.prototype.rollDie = function(roll) {
  var roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
  //player rolls a 1
  if (roll === 1) {
    //round score goes to zero
    this.roundScore = 0;
    //turn ends
    newGame.SwitchPlayer();
  } else {
    //That number is added to their round score
    this.roundScore += roll;
  }
}

//player can click hold
Player.prototype.hold = function() {
  //round score is added to total score
  var store = this.roundScore;
  this.gameScore += store;
  this.roundScore = 0;
  //turn ends
  if (newGame.currentPlayer.gameScore >= 20){
    console.log("You Won!");
  } else {
    newGame.SwitchPlayer();
  }
}

//Game Object
//2 players
function Game() {
  var player1 = new Player("player1");
  var player2 = new Player("player2");
  this.player1 = player1;
  this.player2 = player2;
  this.currentPlayer = this.player1;
  console.log(this.currentPlayer);
  //The game has a max score
}
//turn ends
Game.prototype.SwitchPlayer = function() {
  if (this.currentPlayer === this.player1) {
  this.currentPlayer = this.player2;
  } else if (this.currentPlayer === this.player2) {
  this.currentPlayer = this.player1;
  }
}


//UI function
$(document).ready(function(){
  $(".pigDice#roll").submit(function(event){
    // var newPlayer = new Player("steve");
    // var rollDice = Player.rollDie();
    event.preventDefault();


  });
});
