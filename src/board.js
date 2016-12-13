var Board = function() {
  this.state = [[null, null, null], [null, null, null], [null, null, null]];
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

//wrote this function with a for loop for the same reason as checkRows:
//being that if the board changed size, a for loop would accommodate that
//change, however that isn't really functional here since I need to know
//how many columns there are in the board for the way this function is written.
//Leaving it this way for now because it works, even though checking just the
//elements at each 0, 1, or 2 index would be more time efficient and achieve the
//same result, effectively.
Board.prototype.checkColumns = function() {
  var indexZero = this.state[0][0];
  var indexZeroCounter = 0;
  var indexOne = this.state[0][1];
  var indexOneCounter = 0;
  var indexTwo = this.state[0][2];
  var indexTwoCounter = 0;

  for(var i = 0; i < this.state.length; i++) {
    if (this.state[i][0] == indexZero) {
      indexZeroCounter ++;
    } else if (this.state[i][1] == indexOne) {
      indexOneCounter ++;
    } else if (this.state[i][2] == indexTwo) {
      indexTwoCounter ++;
    }
  }

  if (indexZeroCounter == 3 || indexOneCounter == 3 || indexTwoCounter == 3) {
    return true;
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

Board.prototype.checkWin = function() {
  if (this.checkRows() || this.checkColumns() || this.checkDiags()) {
    return true;
  } else {
    return false;
  }
};


export default Board;
