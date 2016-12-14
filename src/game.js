import Player from 'player';
import Board from 'board';

var Game = function() {
  this.turnCounter = 0;
  this.playerOne = new Player();
  this.playerTwo = new Player();
  this.currentPlayer = this.playerOne;
  this.board = new Board();
};

Game.prototype.togglePlayer = function() {
  if (this.currentPlayer == this.playerOne) {
    this.currentPlayer = this.playerTwo;
  } else {
    this.currentPlayer = this.playerOne;
  }
};


export default Game;
