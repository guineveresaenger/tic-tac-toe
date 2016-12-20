import Backbone from 'backbone';
import $ from 'jquery';

const CellView = Backbone.View.extend({
  initialize: function(options){
    this.row = options.row;
    this.column = options.column;
    this.template = options.template;
    // this.state = options.state;
  },

  events: {
    'click .cell-rendering': 'clicked'
  },

  clicked: function(){
    this.trigger('setState', this);
  },

  render: function() {
    var html = this.template({mark: "X"});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  }
});

export default CellView;
