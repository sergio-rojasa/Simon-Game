//var Player = require('../app/player');
//var RandomNumber = require('../app/randomNumbers');

var Game = (function() {
  function Game() {
    this.won = null;
    this.playing = false;
    this.power = false;
    this.strictMode = false;
    this.currentCount = 1;
    this.currentPlayer = null;
    this.audio = {};
    this.players = {};
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

  Game.prototype.toggleRestart = function() {
    this.clearWon();
    this.clearCurrentCount();
    this.setCurrentPlayer('computer');
    this.togglePlaying();
    this.players.computer.moves = new RandomNumbers().generateRandomSeries();
    this.play();
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

  Game.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
  };
  Game.prototype.setCurrentPlayer = function(player) {
    this.currentPlayer = player;
  };

  Game.prototype.clearWon = function() {
    this.won = null;
  };
  Game.prototype.gameWon = function() {
    this.won = true;
  };
  Game.prototype.gameOver = function() {
    this.won = false;
  };

  Game.prototype.togglePlaying = function() {
    this.setting.playing = true;
  };

  Game.prototype.init = function() {
    this.bindEvents();
    this.addPlayer('human');
    this.addPlayer('computer');

    this.addAudioTrack('green', 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
    this.addAudioTrack('red', 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
    this.addAudioTrack('yellow', 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
    this.addAudioTrack('blue', 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  };

  Game.prototype.addPlayer = function(name) {
    this.players[name] = new Player();
  };
  Game.prototype.addAudioTrack = function(name, url) {
    this.audio[name] = new Audio(url);
  };

  Game.prototype.bindEvents = function() {
    var power = document.getElementById("power");
    var strict = document.getElementById('strict');
    var start = document.getElementById('start');

    var green = document.getElementById('green');
    var red = document.getElementById('red');
    var yellow = document.getElementById('yellow');
    var blue = document.getElementById('blue');

   power.setAttribute('onclick', 'simon.togglePower();');
   strict.setAttribute('onclick', 'simon.toggleStrictMode();');
   start.setAttribute('onclick', 'simon.toggleRestart();');

   green.setAttribute('onclick', 'simon.players.human.setMove(0)');
   red.setAttribute('onclick', 'simon.players.human.setMove(1)');
   yellow.setAttribute('onclick', 'simon.players.human.setMove(2)');
   blue.setAttribute('onclick', 'simon.players.human.setMove(3)');
  };
  
  Game.prototype.play = function() {

  };
  return Game;
})();
var simon = new Game();
simon.init();

module.exports = Game;
