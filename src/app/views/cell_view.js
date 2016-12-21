import Backbone from 'backbone';
import $ from 'jquery';

const CellView = Backbone.View.extend({
  initialize: function(options){
    this.row = options.row;
    this.column = options.column;
    this.template = options.template;
    this.mark = "";


    // this.state = options.state;
  },

  events: {
    'click .cell-rendering': 'clicked'
  },

  clicked: function(){
    if (!this.model.board.checkWin()){
    this.trigger('setState', this);

    this.mark = this.model.currentPlayer.get('mark');
    console.log("set mark to " + this.mark);
    this.render();
    this.model.togglePlayer();
  } else {
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
