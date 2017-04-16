var Game = (function() {
  function Game() {
    this.setting = {
      playing: false,

    };
  }

  Game.prototype.init = function() {
    this.bindEvents();
    this.addPlayer('human');
    this.addPlayer('computer');
  };

  Game.prototype.togglePower = function() {
    var power = document.getElementById('power');
    var toggle = document.getElementById('toggle');
    power.classList.add('on');
    toggle.classList.add('on');
    if(!this.getPower()) {
      this.display('digits', '');
      power.classList.remove('on');
      toggle.classList.remove('on');
    }
  };

  Game.prototype.toggleStrictMode = function() {
    var led = document.getElementById('led');

    if(this.getPower()) {

      if(!this.getPower()) {
        led.classList.remove('on');
      }
    }
    else {
    }
    return;
  };

  Game.prototype.togglePlaying = function() {
    this.setting.playing = true;
  };

  Game.prototype.getCurrentPlayer = function() {
    return this.setting.currentPlayer;
  };
  Game.prototype.setCurrentPlayer = function(player) {
    this.setting.currentPlayer = player;
  };
  Game.prototype.toggleRestart = function() {
    if(this.getPower()) {
      this.clearCurrentCount();
      this.clearHumanWon();
    //  this.setGeneratedSeries(this.generateRandomSeries());
      this.setCurrentPlayer('computer');
      this.togglePlaying();
      this.display('digits', this.getCurrentCount());
      this.play();
    }
    return;
  };

  Game.prototype.clearHumanWon = function() {
    this.setting.humanWon = null;
  };

  Game.prototype.display = function(element, value) {
    var element = document.getElementById(element);
    element.innerHTML = value;
  };

  Game.prototype.bindEvents = function() {
    var power = document.getElementById('power');
    var start = document.getElementById('start');
    var strict = document.getElementById('strict');

    var pad0 = document.getElementById('pad-0');
    var pad1 = document.getElementById('pad-1');
    var pad2 = document.getElementById('pad-2');
    var pad3 = document.getElementById('pad-3');

    power.setAttribute('onclick', 'simon.togglePower();');
    start.setAttribute('onclick', 'simon.toggleRestart();');
    strict.setAttribute('onclick', 'simon.toggleStrictMode();');

    pad0.setAttribute('onclick', 'simon.setting.players[0].setMove(0);');
    pad1.setAttribute('onclick', 'simon.setting.players[0].setMove(1);');
    pad2.setAttribute('onclick', 'simon.setting.players[0].setMove(2);');
    pad3.setAttribute('onclick', 'simon.setting.players[0].setMove(3);');
  };
  Game.prototype.addPlayer = function(playerName) {
    var player = new Player(playerName);
    this.setting.players.push(player);
  };

  return Game;
})();

var simon = new Game();
simon.init();

var Game = (function() {
  function Game() {
    this.setting = {
      humanWon: null,
      generatedSeries: [],
      sound:{
        0: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
        1: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
        2: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
        3: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
      }
  }
};





  Game.prototype.gameWon = function() {
    this.setting.humanWon = true;
  };
  Game.prototype.gameOver = function() {
    this.setting.humanWon = false;
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
  Game.prototype.setGeneratedSeries = function(generatedSeries) {
    this.setting.generatedSeries = generatedSeries;
  };

  Game.prototype.play = function() {
    var game = this;
    var computerTurn = setInterval(function() {
      game.computerMove(game.setting.generatedSeries[game.getCurrentCount()]);
      game.addCurrentCount();
      if(game.getCurrentCount() >= game.setting.generatedSeries.length) {
        clearInterval(computerTurn);
      }
    }, 1000);
  };
  Game.prototype.computerMove = function(pad) {
    var game = this;
    var padNumber = pad;
    var pad = document.getElementById('pad-'+pad);

    pad.classList.add('hover');
    game.playSound(padNumber);
    setTimeout(function() {
      pad.classList.remove('hover');
    }, 300);
  };
  Game.prototype.playSound = function(pad){
  switch(pad) {
    case 0:
      this.setting.sound[0].play();
      break;
    case 1:
      this.setting.sound[1].play();
      break;
    case 2:
      this.setting.sound[2].play();
      break;
    case 3:
      this.setting.sound[3].play();
      break;
  };
}
})();
