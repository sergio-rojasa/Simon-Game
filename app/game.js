var Game = (function() {
  function Game() {
    this.power = false;
    this.strictMode = false;
    this.currentCount = 1;
    this.currentPlayer = null;
    this.players = [];
  }

  Game.prototype.getPower = function() {
    return this.power;
  };
  Game.prototype.togglePower = function() {
    this.power = !this.power;
  };

  Game.prototype.getStrictMode = function() {
    return this.strictMode;
  };
  Game.prototype.toggleStrictMode = function() {
    this.strictMode = !this.strictMode;
  };

  Game.prototype.getCurrentCount = function() {
    return this.currentCount;
  };
  Game.prototype.clearCurrentCount = function() {
    this.currentCount = 1;
  };
  Game.prototype.addCurrentCount = function() {
    this.currentCount++;
  };


  return Game;
})();

module.exports = Game;
