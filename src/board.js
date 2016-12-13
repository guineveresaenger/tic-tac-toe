var Board = function() {
  this.state = [[null, null, null], [null, null, null], [null, null, null]];
  this.win = false;



};

Board.prototype.checkRows = function() {
  for(var i = 0; i < this.state.length; i++) {
    var checkMark = this.state[i][0];
    var counter = 0;
    for(var j = 0; j < this.state[i].length; j++) {
      if (this.state[i][j] == checkMark && checkMark !== null){
        counter ++;
      }
    }
    if (counter == 3) {
      return true;
    }
  }
  return false;
};

export default Board;
