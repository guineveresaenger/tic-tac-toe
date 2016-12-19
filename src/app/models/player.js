import Backbone from 'backbone';

const Player = Backbone.Model.extend({
  defaults: {
    name: null,
    mark: null,
    turn: false
  },

  initialize: function() {
  },

  // setName: function(name) {
  //   this.get('name') = name;
  // },
  //
  // setMark: function(mark) {
  //   this.mark = mark;
  // },
  //
  // setTurnFalse: function() {
  //   this.turn = false;
  // },
  //
  // setTurnTrue: function() {
  //   this.turn = true;
  // }

});

export default Player;
