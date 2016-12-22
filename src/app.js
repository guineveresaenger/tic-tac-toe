import Game from 'app/models/game';
import GameView from 'app/views/game_view';
import GameList from 'app/collections/game_list';
import $ from 'jquery';

$(document).ready(function() {
  var gameList = new GameList();
  gameList.fetch();
  console.log(gameList);
  var currentGame = new GameView({
    el: $('body'),
    model: gameList
  });
});
