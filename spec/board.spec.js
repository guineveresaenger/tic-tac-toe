import Board from 'app/models/board';

describe('Board', function() {
  var testBoard;
  beforeEach(function() {
    testBoard = new Board({
    });
  });
  describe('state of board initially', function(){
    it ("should instantiate a two-dimensional array full of blank spaces", function(){
      expect(testBoard.get('state')).toEqual([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
    });
    it ('should be an array', function() {
      expect(testBoard.get('state') instanceof(Array)).toEqual(true);
    });

  });

  describe('checkRows', function() {
    it ('checks the rows on the board for a win', function() {
      expect(testBoard.checkRows()).toEqual(false);
      testBoard.set({state: [['X', 'X', 'X'], [" ", " ", " "], [" ", " ", " "]]});
      expect(testBoard.checkRows()).toEqual(true);
      testBoard.set({state: [[' ', ' ', ' '], [" ", " ", " "], ["O", "O", "O"]]});
      expect(testBoard.checkRows()).toEqual(true);
    });
  });

  describe("checkDiags", function() {
    it('checks the diagonals on the board for a win', function(){
      expect(testBoard.checkDiags()).toEqual(false);
      testBoard.set({state: [['X', " ", " "], [" ", 'X', " "], [" ", " ", 'X']]});
      expect(testBoard.checkDiags()).toEqual(true);
      testBoard.set({state: [[" ", " ", 'O'], [" ", 'O', " "], ['O', " ", " "]]});
      expect(testBoard.checkDiags()).toEqual(true);
      testBoard.set({state:[['X', " ", " "], [" ", 'O', " "], [" ", " ", 'X']]});
      expect(testBoard.checkDiags()).toEqual(false);
    });
  });

  describe('checkColumns', function() {
    it ('checks the columns on the board for a win', function() {
      expect(testBoard.checkColumns()).toEqual(false);

      testBoard.set({state: [["X", " ", " "], ["X", " ", " "], ["X", " ", " "]]});
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.set({state: [[" ", "O", " "], [" ", "O", " "], [" ", "O", " "]]});
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.set({state: [[" ", " ", "X"], [" ", " ", "X"], [" ", " ", "X"]]});
      expect(testBoard.checkColumns()).toEqual(true);

      testBoard.set({state: [["X", " ", " "], ["O", " ", " "], ["X", " ", " "]]});
      expect(testBoard.checkColumns()).toEqual(false);
    });
  });


  describe('checkWin', function() {
    it ('checks the state of the board for a win', function() {
      expect(testBoard.checkWin()).toEqual(false);

      testBoard.set({state: [['X', 'X', 'X'], [" ", " ", " "], [" ", " ", " "]]});
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.set({state: [['X', " ", " "], [" ", 'X', " "], [" ", " ", 'X']]});
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.set({state: [[" ", " ", "X"], [" ", " ", "X"], [" ", " ", "X"]]});
      expect(testBoard.checkWin()).toEqual(true);

      testBoard.set({state: [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["O", "X", "O"]
      ]});
      expect(testBoard.checkWin()).toEqual(false);
    });
  });

  describe('isAvailable', function() {
    it('checks the space to see if available', function() {
      expect(testBoard.isAvailable(0, 1)).toEqual(true);

      testBoard.set({state: [[" ", "X", " "], [" ", " ", " "], [" ", " ", " "]]});
      expect(testBoard.isAvailable(0, 1)).toEqual(false);
    });
  });

  describe('makeMove', function() {
    it('should set the given space of the board state', function() {
      testBoard.makeMove(0, 1, "X");
      expect(testBoard.get('state')).toEqual([[" ", "X", " "], [" ", " ", " "], [" ", " ", " "]]);

    });

  });


});
