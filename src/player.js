var Player = function() {
  this.name = null;
  this.mark = null;
  this.turn = false;
};

Player.prototype.setName = function(name) {
  this.name = name;
};

Player.prototype.setMark = function(mark) {
  this.mark = mark;
};

Player.prototype.setTurnFalse = function() {
  this.turn = false;
};

Player.prototype.setTurnTrue = function() {
  this.turn = true;
};


export default Player;
