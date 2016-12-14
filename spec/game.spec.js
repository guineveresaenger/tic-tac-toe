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

  describe('setNames', function() {
    it('sets player names', function() {
      testGame.setNames("Player 1", "Player 2");
      expect(testGame.playerOne.name).toEqual("Player 1");
      expect(testGame.playerTwo.name).toEqual("Player 2");
      expect(typeof(testGame.playerTwo.name)).toEqual('string');
    });

  });

  describe('setMarks', function() {
    it('sets player marks', function() {
      testGame.setMarks();
      expect(testGame.playerOne.mark).toEqual("X");
      expect(testGame.playerTwo.mark).toEqual("O");
      expect(typeof(testGame.playerTwo.mark)).toEqual('string');
    });

  });

});
