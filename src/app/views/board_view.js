import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from 'app/views/cell_view';
//import the Board collection??

const BoardView = Backbone.View.extend({
  initialize: function(options) {
    // console.log("Made a BoardView!!!");
    // this.playerOne = options.playerOne;
    // console.log(this.playerOne.get('mark'));

    this.listenTo(this.model.board, 'update', this.render);

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
    console.log("MARKER SET");
    console.log(this.model.board.get('state')[0]);
    console.log("Turn:" + this.model.get('turnCounter'));
    if(this.model.board.isAvailable(cell.row, cell.column)){
      this.model.board.makeMove(cell.row, cell.column, this.model.currentPlayer.get('mark'));
      this.model.togglePlayer();
      this.model.set({turnCounter: this.model.get('turnCounter') + 1});
    }
    console.log(this.model.board.get('state') +"it marked it hello");
    console.log(this.model.currentPlayer.get('mark'));

  },

  render: function() {
    this.cells.forEach(function(cell) {
      cell.render();
      this.$el.append(cell.$el);
    }, this);
    return this;
  }
});

export default BoardView;

//set a listener on each cell when we create it
