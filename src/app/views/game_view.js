import Backbone from 'backbone';
import $ from 'jquery';
import Game from 'app/models/game';
import _ from 'underscore';
// we may not need these:
import Board from 'app/models/board';
import BoardView from 'app/views/board_view';


const GameView = Backbone.View.extend({
  initialize: function(options) {
    var newGame = new Game();
    newGame.setNames("Player 1", "Player 2");
    newGame.setMarks();
    this.board = new BoardView({
      el: $('#game-board'),
      model: newGame
    });
    this.listenTo(this.board, 'win', this.showWinModal);
    this.winTemplate = _.template($('#tmpl-win-modal').html());

  },

  showWinModal: function(){
    console.log("this is a win modal");
    if (this.board.model.get('turnCounter') == 9){
      this.$('#congratulations').html(this.winTemplate({message: "This game was a tie."}));
    } else {
    this.$('#congratulations').html(this.winTemplate({message:"Yay, " + this.board.model.currentPlayer.get('name') + ", you won"}));
    this.$('#congratulations').show();
  }
  },

  events: {
    'click #new-game-button': 'createNewBoard'
  },

  createNewBoard: function() {
    var newGame = new Game();
    newGame.setNames("Player 1", "Player 2");
    newGame.setMarks();
    this.board = new BoardView({
      el: $('#game-board'),
      model: newGame
    });
    this.listenTo(this.board, 'win', this.showWinModal);
    this.winTemplate = _.template($('#tmpl-win-modal').html());
    this.$('#congratulations').hide();

    console.log("New Board Created!");
  }
});

export default GameView;
