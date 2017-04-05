var Game = (function() {
  function Game() {
    this.players = [];
    this.generatedSeries = [];
    this.currentCount = 0;
    this.strictMode = false;
    this.powerOn = false;
    this.playing = false;
    this.currentPlayer = null;
    this.gameWon = false;
  }
  Game.prototype.init = function() {

  };
  Game.prototype.restart = function() {

  };
  Game.prototype.addPlayer = function() {

  };
  Game.prototype.addCurrentCount = function() {

  };
  Game.prototype.togglePower = function() {

  };
  Game.prototype.toggleStrictMode = function() {

  };
  Game.prototype.toggleStart = function() {

  };
  Game.prototype.switchTurn = function() {

  };
  Game.prototype.getCurrentPlayer = function() {

  };
  Game.prototype.setCurrentPlayer = function() {

  };
  Game.prototype.getCurrentCount = function() {

  };
  Game.prototype.getGameWon = function() {

  };
  Game.prototype.setGameWon = function() {

  };
  Game.prototype.getPlaying = function() {

  };
  Game.prototype.setPlaying = function() {

  };
  Game.prototype.update = function() {

  };
  Game.prototype.render = function() {

  };
  Game.prototype.generateRandomNumber = function() {
    var numberOfButtons = 4;
    var randomNumber = Math.floor(Math.random() * numberOfButtons);

    return randomNumber;
  };
  Game.prototype.generateRandomSeries = function() {

  };
  return Game;
})();
var simon = new Game();
console.log(simon.generateRandomNumber());
module.exports = Game;
