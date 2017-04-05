var Game = (function() {
  function Game() {
    this.players = [];
    this.generatedSeries = [];
    this.currentCount = 1;
    this.strictMode = false;
    this.power = false;
    this.playing = false;
    this.currentPlayer = null;
    this.gameWon = false;
  }
  Game.prototype.init = function() {

  };
  Game.prototype.restart = function() {
    this.currentCount = 1;
  };
  Game.prototype.addPlayer = function() {

  };
  Game.prototype.addCurrentCount = function() {

  };
  Game.prototype.togglePower = function() {
    this.power = !this.power;
  };
  Game.prototype.toggleStrictMode = function() {
    this.strictMode = !this.strictMode;
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
    var amountOfGeneratedNumber = 20;
    var randomSeries = [];

    for(var i = 0; i < amountOfGeneratedNumber; i++) {
      randomSeries.push(this.generateRandomNumber());
    }
    return randomSeries;
  };
  return Game;
})();
var simon = new Game();
console.log(simon.generateRandomSeries());
module.exports = Game;
