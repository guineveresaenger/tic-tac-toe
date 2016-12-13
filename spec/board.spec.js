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
});
