import Game from 'game';
import Player from 'player';
import Board from 'board';

describe('Game', function() {
  var testGame = new Game();
  describe('initial attributes', function(){
    it ("turn counter should have an initial value of 0", function(){
      expect(testGame.turnCounter).toEqual(0);
    });

    it ('has a playerOne', function() {
      expect(testGame.playerOne instanceof(Player)).toEqual(true);
    });

    it ('has a playerTwo', function() {
      expect(testGame.playerTwo instanceof(Player)).toEqual(true);
    });

    it ('has a currentPlayer', function() {
      expect(testGame.currentPlayer).toEqual(testGame.playerOne);
    });

    it ('has a board', function() {
      expect(testGame.board instanceof(Board)).toEqual(true);
    });
  });

  describe('togglePlayer', function() {
    it('toggles the current player', function() {
      testGame.togglePlayer();
      expect(testGame.currentPlayer).toEqual(testGame.playerTwo);
    });
    it('toggles again', function() {
      testGame.togglePlayer();
      expect(testGame.currentPlayer).toEqual(testGame.playerOne);
    });
  });

});
