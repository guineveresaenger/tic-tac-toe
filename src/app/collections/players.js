import Backbone from 'backbone';
import Player from 'app/models/player';

const Players = Backbone.Collection.extend({
  model: Player
});

export default Players;
