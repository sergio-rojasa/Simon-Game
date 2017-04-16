var Player = (function() {
  function Player(playerName) {
    this.name = playerName;
    this.moves = [];
  }
  Player.prototype.setMove = function(move) {
    this.moves.push(move);
  };
  Player.prototype.getMove = function(movePosition) {
    return this.moves[movePosition-1];
  };

  Player.prototype.clearMoves = function() {
    this.moves.length = 0;
  };

  return Player;
})();
module.exports = Player;
