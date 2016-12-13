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

Board.prototype.checkDiags = function() {
  var i = 0;
  var j = 0;
  var checkMark = this.state[i][j];
  var counter = 0;
  while(i < this.state.length) {
    if (this.state[i][j] == checkMark && checkMark !== null){
      counter++;
    }
    i++;
    j++;
  }
  if (counter == 3) {
    return true;
  }
  // re-set for other loop
  i = 0;
  j = 2;
  checkMark = this.state[i][j];
  counter = 0;
  while(i < this.state.length) {
    if (this.state[i][j] == checkMark && checkMark !== null){
      counter++;
    }
    i++;
    j--;
  }
  if (counter == 3) {
    return true;
  }
  return false;

};

export default Board;
