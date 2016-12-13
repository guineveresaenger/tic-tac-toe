import Game from 'game';

xdescribe('Game', function() {
  describe('helloWorld', function(){
    it ("should return Hello World", function(){
      expect(Game.helloWorld()).toEqual('hello world!');
    });

  });
});
