import Player from 'player';

var Game = function() {
  this.turnCounter = 0;
  this.playerOne = new Player();
  this.playerTwo = new Player();
  this.currentPlayer = this.playerOne;
};

export default Game;
