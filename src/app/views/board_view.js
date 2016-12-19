import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import CellView from 'app/views/cell_view';
//import the Board collection??

const BoardView = Backbone.View.extend({
  initialize: function() {

    this.listenTo(this.model, 'update', this.render);

    this.cells = [];

    for(var i = 0; i < 3; i++) {
      for(var j = 0; j < 3; j++) {
        var cell = new CellView({
          el: '.game-cell',
          row: i,
          column: j
        });
        this.listenTo(cell, 'setState', this.setMarker);
        this.cells.push(cell);
      }
    }
  },

  setMarker: function() {
    console.log("MARKER SET");
  },

  render: function() {
    this.cells.forEach(function(cell) {
      cell.render();
      return this;
    });
  }
});

export default BoardView;

//set a listener on each cell when we create it
