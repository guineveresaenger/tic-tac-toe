import Board from 'board';

describe('Board', function() {
  var testBoard = new Board();
  describe('state of board initially', function(){
    it ("should instantiate a two-dimensional array full of null values", function(){
      expect(testBoard.state).toEqual([[null, null, null], [null, null, null], [null, null, null]]);
    });
    it ('should be an array', function() {
      expect(testBoard.state instanceof(Array)).toEqual(true);
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

  describe("checkDiags", function() {
    it('checks the diagnals on the board for a win', function(){
      testBoard.state = [[null, null, null], [null, null, null], [null, null, null]];
      expect(testBoard.checkDiags()).toEqual(false);
      testBoard.state = [['X', null, null], [null, 'X', null], [null, null, 'X']];
      expect(testBoard.checkDiags()).toEqual(true);
      testBoard.state = [[null, null, 'O'], [null, 'O', null], ['O', null, null]];
      expect(testBoard.checkDiags()).toEqual(true);
      testBoard.state = [['X', null, null], [null, 'O', null], [null, null, 'X']];
      expect(testBoard.checkDiags()).toEqual(false);
    });
  });

  describe('checkColumns', function() {
    it ('checks the columns on the board for a win', function() {
      testBoard.state = [[null, null, null], [null, null, null], [null, null, null]];
      expect(testBoard.checkColumns()).toEqual(false);

      testBoard.state = [["X", null, null], ["X", null, null], ["X", null, null]];
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.state = [[null, "O", null], [null, "O", null], [null, "O", null]];
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.state = [[null, null, "X"], [null, null, "X"], [null, null, "X"]];
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.state = [["X", null, null], ["O", null, null], ["X", null, null]];
      expect(testBoard.checkColumns()).toEqual(false);
    });
  });


  describe('checkWin', function() {
    it ('checks the state of the board for a win', function() {
      testBoard.state = [[null, null, null], [null, null, null], [null, null, null]];
      expect(testBoard.checkWin()).toEqual(false);

      testBoard.state = [['X', 'X', 'X'], [null, null, null], [null, null, null]];
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.state = [['X', null, null], [null, 'X', null], [null, null, 'X']];
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.state = [[null, null, "X"], [null, null, "X"], [null, null, "X"]];
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.state = [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"]
      ];
      expect(testBoard.checkWin()).toEqual(false);
    });
  });

  describe('isAvailable', function() {
    it('checks the space to see if available', function() {
      testBoard.state = [[null, null, null], [null, null, null], [null, null, null]];
      expect(testBoard.isAvailable(0, 1)).toEqual(true);

      testBoard.state = [[null, "X", null], [null, null, null], [null, null, null]];
      expect(testBoard.isAvailable(0, 1)).toEqual(false);
    });
  });

  describe('setMarker', function() {
    it('should set the given space of the board state', function() {
      testBoard.state = [[null, null, null], [null, null, null], [null, null, null]];
      testBoard.setMarker(0, 1, "X");
      expect(testBoard.state).toEqual([[null, "X", null], [null, null, null], [null, null, null]]);
    });
  });


});
