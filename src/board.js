var Board = function() {
  this.state = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
};

Board.prototype.checkRows = function() {
  for(var i = 0; i < this.state.length; i++) {
    var checkMark = this.state[i][0];
    var counter = 0;
    for(var j = 0; j < this.state[i].length; j++) {
      if (this.state[i][j] == checkMark && checkMark !== " "){
        counter ++;
      }
    }
    if (counter == this.state.length) {
      return true;
    }
  }
  return false;
};


Board.prototype.checkColumns = function() {

  var j = 0;
  while(j < this.state.length) {
    var i = 0;
    var checkMark = this.state[i][j];
    var counter = 0;
    while(i < this.state.length) {
      if (this.state[i][j] == checkMark && checkMark !== " "){
        counter++;
      }
      i++;
    }
    if (counter == this.state.length) {
      return true;
    }
    j++;
  }
  return false;
};


Board.prototype.checkDiags = function() {
  var i = 0;
  var j = 0;
  var checkMark = this.state[i][j];
  var counter = 0;
  while(i < this.state.length) {
    if (this.state[i][j] == checkMark && checkMark !== " "){
      counter++;
    }
    i++;
    j++;
  }
  if (counter == this.state.length) {
    return true;
  }
  // re-set for other loop
  i = 0;
  j = (this.state.length - 1);
  checkMark = this.state[i][j];
  counter = 0;
  while(i < this.state.length) {
    if (this.state[i][j] == checkMark && checkMark !== " "){
      counter++;
    }
    i++;
    j--;
  }
  if (counter == this.state.length) {
    return true;
  }
  return false;
};

Board.prototype.checkWin = function() {
  if (this.checkRows() || this.checkColumns() || this.checkDiags()) {
    return true;
  } else {
    return false;
  }
};

Board.prototype.isAvailable = function(i, j) {
  if (this.state[i][j] === " ") {
    return true;
  } else {
    return false;
  }
};

Board.prototype.makeMove = function(i, j, marker) {
  this.state[i][j] = marker;
};


export default Board;
