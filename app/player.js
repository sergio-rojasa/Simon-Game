var Player = (function() {
  function Player() {
    this.name = null;
    this.finished = false;
  }

  Player.prototype.setName = function(name) {
    this.name = name;
  };

  return Player;
})();
module.exports = Player;
