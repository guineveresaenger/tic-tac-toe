import Backbone from 'backbone';
import $ from 'jquery';

const CellView = Backbone.View.extend({
  initialize: function(options){
    this.row = options.row;
    this.column = options.column;
    this.template = options.template;
    this.mark = "";
    this.$el.addClass("column");
  },

  events: {
    'click .cell-rendering': 'clicked'
  },

  clicked: function(){
    if (!this.model.board.checkWin() && this.model.board.isAvailable(this.row, this.column)){

      this.trigger('setState', this);
      this.mark = this.model.currentPlayer.get('mark');

      this.render();
      this.model.togglePlayer();
    }
    else {
      this.mark = '';
    }
  },

  render: function() {
    var html = this.template({mark: this.mark});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  }
});

export default CellView;
