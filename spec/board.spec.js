import Board from 'board';

describe('Board', function() {
  var testBoard = new Board();
  describe('state of board initially', function(){
    it ("should instantiate a two-dimensional array full of null values", function(){
      expect(testBoard.state).toEqual([[null, null, null], [null, null, null], [null, null, null]]);
    });
    it ("has a winning condition of false", function() {
      expect(testBoard.win).toEqual(false);
    });
    it ('should be an array', function() {
      expect(testBoard.state instanceof(Array)).toEqual(true);
    });

  });

  xdescribe('checkWin', function() {
    it ('checks the state of the board for a win', function() {

    });

  });

  describe('checkRows', function() {
    it ('checks the rows on the board for a win', function() {
      expect(testBoard.checkRows()).toEqual(false);
      testBoard.state = [['X', 'X', 'X'], [null, null, null], [null, null, null]];
      expect(testBoard.checkRows()).toEqual(true);
      testBoard.state = [[null, null, null], [null, null, null], ["O", "O", "O"]];
      expect(testBoard.checkRows()).toEqual(true);
      

    });

  });
});
