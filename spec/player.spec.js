import Player from 'player';

describe('Player', function() {
  var testPlayer = new Player();
  describe('initial attributes', function(){
    it ("should have a name attribute of `null` initially", function(){
      expect(testPlayer.name).toEqual(null);
    });
    it ('should have a mark initally set to `null`', function() {
      expect(testPlayer.mark).toEqual(null);
    });
    it ('should have a turn attribute of false', function() {
      expect(testPlayer.turn).toEqual(false);
    });
  });

  describe('setName', function() {
    it ('should set the name', function() {
      testPlayer.setName("Allison");
      expect(testPlayer.name).toEqual("Allison");
    });
  });

  describe('setMark', function() {
    it ('should set the mark', function() {
      testPlayer.setMark("X");
      expect(testPlayer.mark).toEqual("X");
    });
  });

  describe('toggle turn true/false', function() {
    it ('should set the turn to true', function() {
      testPlayer.setTurnTrue();
      expect(testPlayer.turn).toEqual(true);
    });
    it ('should set the turn to false', function() {
      testPlayer.setTurnFalse();
      expect(testPlayer.turn).toEqual(false);
    });
  });

});
