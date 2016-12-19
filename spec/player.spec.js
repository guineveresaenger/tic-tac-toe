import Player from 'app/models/player';

describe('Player', function() {
  var testPlayer;
  beforeEach(function(){
    testPlayer = new Player ({
    });
  });
  describe('initial attributes', function(){
    it ("should have a name attribute of `null` initially", function(){
      expect(testPlayer.get('name')).toEqual(null);
    });
    it ('should have a mark initally set to `null`', function() {
      expect(testPlayer.get('mark')).toEqual(null);
    });
    it ('should have a turn attribute of false', function() {
      expect(testPlayer.get('turn')).toEqual(false);
    });
  });

  describe('setting the name', function() {
    it ('should set the name', function() {
      testPlayer.set({name: "Allison"});
      expect(testPlayer.get('name')).toEqual("Allison");
    });
  });

  describe('setting the mark', function() {
    it ('should set the mark', function() {
      testPlayer.set({mark: "X"});
      expect(testPlayer.get('mark')).toEqual("X");
    });
  });

  describe('toggle turn true/false', function() {
    it ('should set the turn to true', function() {
      testPlayer.set({turn: true});
      expect(testPlayer.get('turn')).toEqual(true);
    });
    it ('should set the turn to false', function() {
      testPlayer.set({turn: false});
      expect(testPlayer.get('turn')).toEqual(false);
    });
  });

});
