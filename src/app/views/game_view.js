import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
// we may not need these:
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
// import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.board = new BoardView();
  },

  events: {
    'click #new-game-button': 'createNewBoard',
    'click .game-cell': 'saySomething'
    //for testing purposes, get rid of
  },

  createNewBoard: function() {
    console.log("New Board Created!");
  },

//for testing purposes, get rid of this
  saySomething: function() {
    console.log("SAYING SOMETHING");
  }

});

export default GameView;
