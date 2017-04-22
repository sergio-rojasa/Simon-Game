var Player = (function() {
  function Player() {
    this.moves = [];
  }
  Player.prototype.setMove = function(move) {
    this.moves.push(move);

    //launch an event ==> player 1 moved
    $( document ).trigger( "onHumanMoved"); 
  };
  Player.prototype.getMove = function(movePosition) {
    return this.moves[movePosition-1];
  };

  Player.prototype.clearMoves = function() {
    this.moves.length = 0;
  };

  return Player;
})();
//module.exports = Player;
