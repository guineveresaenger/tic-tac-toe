import Backbone from 'backbone';

const Board = Backbone.Model.extend({
  initialize: function() {
    this.set({'state': [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]});
  },

  checkRows: function() {
    for(var i = 0; i < this.get('state').length; i++) {
      var checkMark = this.get('state')[i][0];
      var counter = 0;
      for(var j = 0; j < this.get('state')[i].length; j++) {
        if (this.get('state')[i][j] == checkMark && checkMark !== " "){
          counter ++;
        }
      }
      if (counter == this.get('state').length) {
        return true;
      }
    }
    return false;
  },

  checkColumns: function() {

    var j = 0;
    while(j < this.get('state').length) {
      var i = 0;
      var checkMark = this.get('state')[i][j];
      var counter = 0;
      while(i < this.get('state').length) {
        if (this.get('state')[i][j] == checkMark && checkMark !== " "){
          counter++;
        }
        i++;
      }
      if (counter == this.get('state').length) {
        return true;
      }
      j++;
    }
    return false;
  },

  checkDiags: function() {
    var i = 0;
    var j = 0;
    var checkMark = this.get('state')[i][j];
    var counter = 0;
    while(i < this.get('state').length) {
      if (this.get('state')[i][j] == checkMark && checkMark !== " "){
        counter++;
      }
      i++;
      j++;
    }
    if (counter == this.get('state').length) {
      return true;
    }
    // re-set for other loop
    i = 0;
    j = (this.get('state').length - 1);
    checkMark = this.get('state')[i][j];
    counter = 0;
    while(i < this.get('state').length) {
      if (this.get('state')[i][j] == checkMark && checkMark !== " "){
        counter++;
      }
      i++;
      j--;
    }
    if (counter == this.get('state').length) {
      return true;
    }
    return false;
  },

  checkWin: function() {
    if (this.checkRows() || this.checkColumns() || this.checkDiags()) {
      return true;
    } else {
      return false;
    }
  },

  isAvailable: function(i, j) {
    if (this.get('state')[i][j] === " ") {
      return true;
    } else {
      return false;
    }
  },

  makeMove: function(i, j, marker) {
    this.get('state')[i][j] = marker;
  }

});

export default Board;
