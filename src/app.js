import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import $ from 'jquery';

$(document).ready(function() {
  console.log("******PLAYING!!*****");

  var currentGame = new GameView({
    el: $('body')
  });
});
