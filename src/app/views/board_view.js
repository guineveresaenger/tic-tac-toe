import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from 'app/views/cell_view';
//import the Board collection??

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    this.cells = [];
    this.cellTemplate = _.template($('#tmpl-cell-rendering').html());

    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        var cell = new CellView({
          row: i,
          column: j,
          template: this.cellTemplate,
          model: this.model
        });
        this.listenTo(cell, 'setState', this.setMarker);
        this.cells.push(cell);
      }
    }
    this.render();

  },

  setMarker: function(cell) {
    console.log("MARKER SET FOR PLAYER" +this.model.currentPlayer.get('mark'));
    console.log("Turn:" + this.model.get('turnCounter'));
    if(this.model.board.isAvailable(cell.row, cell.column) ){
      this.model.board.makeMove(cell.row, cell.column, this.model.currentPlayer.get('mark'));
      this.model.set({turnCounter: this.model.get('turnCounter') + 1});
    }

    console.log(this.model.board.get('state') +"it marked it hello");

    // after the fifth play is made, we have possibility for a win
    if (this.model.get('turnCounter') > 4) {
      console.log("now checking for win");

      if (this.model.board.checkWin()){
        console.log("Yay, " + this.model.currentPlayer.get('name') + ", you won!");
        this.trigger("win", this);
      }
    }

    if ((this.model.get('turnCounter') == 9) && !this.model.board.checkWin()) {
      console.log("we have a tie");
      this.trigger("win", this);
    }

  },

  render: function() {
    this.$el.empty();
    this.cells.forEach(function(cell) {
      cell.render();
      this.$el.append(cell.$el);
    }, this);
    return this;
  }
});

export default BoardView;

//set a listener on each cell when we create it
