// Back-end Function
function Player(name, totalScore) {
  this.name = name,
  this.totalScore = 0,
  this.roundScore = 0
}

Player.prototype.rollDie = function() {
  this.roundScore = Math.floor(Math.random() * 6) + 1;
}

Player.prototype.hold = function() {
  this.totalScore += this.roundScore
}


function Round() {
  this.currentPlayer = currentPlayer
}
