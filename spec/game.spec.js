import Game from 'game';
import Player from 'player';

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

  });
});
