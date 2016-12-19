import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
// we may not need these:
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
// import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function(options) {
    this.board = new BoardView({
      el: $('#game-board'),
      model: options.model.board
    });
  },

  events: {
    'click #new-game-button': 'createNewBoard'
  },

  createNewBoard: function() {
    console.log("New Board Created!");
    // make a new BoardView!
  }
});

export default GameView;
