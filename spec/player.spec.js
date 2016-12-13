import Player from 'player';

xdescribe('Player', function() {
  describe('helloWorld', function(){
    it ("should return Hello World", function(){
      expect(Player.helloWorld()).toEqual('hello world!');
    });

  });
});
