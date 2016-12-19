import Backbone from 'backbone';
import $ from 'jquery';

const CellView = Backbone.View.extend({
  initialize: function(options){
    this.row = options.row;
    this.column = options.column;
    // this.state = options.state;
  },

  events: {
    'click .game-cell': 'clicked'
  },

  clicked: function(){
    console.log("CLICKED");
    this.trigger('setState', this);
  },

  render: function() {
    var html = "X";
    this.$el.html(html);
    return this;
  }
});

export default CellView;
