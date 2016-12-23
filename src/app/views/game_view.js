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
    this.render();
  },

  showWinModal: function(){
    if (this.board.model.get('turnCounter') == 9){
      this.$('#congratulations').html(this.winTemplate({message: "This game was a tie."}));
    }
    else
    {
    this.$('#congratulations').html(this.winTemplate({message:"Yay, " + this.board.model.currentPlayer.get('name') + ", you won!!!"}));
    }
    this.$('#congratulations').show();

    this.board.model.save();

  },
  events: {
    'click #new-game-button': 'createNewBoard',
    'click #show-games-button': 'showGameHistory'
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
  },

  showGameHistory: function(){
    $('#game-history').empty();
    this.model.fetch().done(function(gameData){
      gameData.forEach(function(game){
        var gameInfo = "<p>" + game.id + ": " + "Played by " + game.players[0] + " and " + game.players[1] + " at " + game.played_at + "; outcome: " + game.outcome + "</p>";
        $('#game-history').append(gameInfo);
      });

    });

  },


});

export default GameView;
