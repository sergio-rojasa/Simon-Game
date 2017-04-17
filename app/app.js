var Game = (function() {
  function Game() {

  }
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

  Game.prototype.toggleRestart = function() {
    if(this.getPower()) {
      this.display('digits', this.getCurrentCount());
      this.play();
    }
    return;
  };

  Game.prototype.display = function(element, value) {
    var element = document.getElementById(element);
    element.innerHTML = value;
  };
  return Game;
})();
var Game = (function() {


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
