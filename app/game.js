//var Player = require('../app/player');
//var RandomNumber = require('../app/randomNumbers');
//this.playing = false;

var Game = (function() {
  function Game() {
    this.won = null;
    this.power = false;
    this.strictMode = false;
    this.currentRound = 0;
    this.currentPlayer = null;
    this.speed = 900;
    this.players = {};
    this.audio = {
      '0': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
      '1': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
      '2': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
      '3': new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
    };
  }

  Game.prototype.clearWon = function() {
    this.won = null;
  };
  Game.prototype.gameWon = function() {
    this.won = true;
  };
  Game.prototype.gameOver = function() {
    this.won = false;
  };

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

  Game.prototype.getCurrentRound = function() {
    return this.currentRound;
  };
  Game.prototype.clearCurrentRound = function() {
    this.currentRound = 0;
  };
  Game.prototype.addCurrentRound = function() {
    this.currentRound++;
  };

  Game.prototype.getCurrentPlayer = function() {
    return this.currentPlayer;
  };
  Game.prototype.setCurrentPlayer = function(player) {
    this.currentPlayer = player;
  };

  Game.prototype.playAudio = function(pad) {
    this.audio[pad].play();
  };
  Game.prototype.lightUp = function(pad) {
    var padNumber = document.getElementById('pad-'+pad);

    padNumber.classList.add('click');
    setTimeout(function() {
      padNumber.classList.remove('click');
    }, this.speed / 2);
  };
  Game.prototype.addPlayer = function(name) {
    this.players[name] = new Player();
  };
  Game.prototype.display = function() {
    var digits = document.getElementById('digits');
    digits.innerHTML = this.getCurrentRound();
  };

  Game.prototype.init = function() {
    this.addPlayer('human');
    this.addPlayer('computer');
  };

  Game.prototype.toggleRestart = function() {
    this.clearWon();
    this.clearCurrentRound();
    this.setCurrentPlayer('computer');
    this.players.computer.moves = new RandomNumbers().generateRandomSeries();
    this.display();
    this.play();
  };

  Game.prototype.play = function() {
    this.addCurrentRound();
    this.display();

    var game = this;
    var computerTurn = setInterval(function() {
      game.lightUp(game.players.computer.moves[game.getCurrentRound()-1]);
      game.playAudio(game.players.computer.moves[game.getCurrentRound()-1]);
      game.display();

      game.addCurrentRound();
      if(game.getCurrentRound() >= game.players.computer.moves.length) {
        clearInterval(computerTurn);
      }
    }, game.speed);

  };

  return Game;
})();
var simon = new Game();
simon.init();
//module.exports = Game;
