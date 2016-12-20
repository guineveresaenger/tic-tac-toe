import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'app/models/player';

const Game = Backbone.Model.extend({
  defaults: {
    turnCounter: 0,

  },
  initialize: function(options) {
    this.board = new Board();
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.currentPlayer = this.playerOne;
  },
  togglePlayer: function() {
    if (this.currentPlayer == this.playerOne) {
      this.currentPlayer = this.playerTwo;
    } else {
      this.currentPlayer = this. playerOne;
    }
  },

  setNames: function(nameOne, nameTwo) {
    this.playerOne.set({name: nameOne});
    this.playerTwo.set({name: nameTwo});

  },

  setMarks: function() {
    this.playerOne.set({mark: "X"});
    this.playerTwo.set({mark: "O"});
  },

});


export default Game;
