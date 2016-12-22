import Backbone from 'backbone';
import Board from 'app/models/board';
import Player from 'app/models/player';

const Game = Backbone.Model.extend({
  defaults: {
    turnCounter: 0,

  },
  urlRoot: 'http://localhost:3000/api/v1/games',

  initialize: function(options) {
    this.board = new Board();
    this.playerOne = new Player();
    this.playerTwo = new Player();
    this.currentPlayer = this.playerOne;
  },

  toJSON: function(){
    //post data to API
    var gameData = {
    "board": [].concat.apply([], this.board.get('state')),
    "players": [
      this.playerOne.get('name'),
      this.playerTwo.get('name'),
    ],
    "outcome": this.currentPlayer.get('mark')
    };
    return gameData;
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
