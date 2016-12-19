import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
// we may not need these:
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';
// import Player from 'app/models/player';

const GameView = Backbone.View.extend({
  initialize: function() {
    this.board = new BoardView({
      el: $('#game-board')
    });
  },

  events: {
    'click #new-game-button': 'createNewBoard'
  },

  createNewBoard: function() {
    console.log("New Board Created!");
  }
});

export default GameView;
