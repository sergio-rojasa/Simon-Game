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

  Game.prototype.animateComputerMoves = function(roundNumber) {
      // highlight each element on the pad AND play the corresponding sound 
      // Decide how quickly to highlight each color / play the sound 

      var index = 0; 
      //game.display();

      var game = this; 

      var computerTurnAnimation = setInterval(function() {

        // highlight exactly 1 color 
        // play exactly 1 sound 

        game.lightUp(game.players.computer.moves[index]);
        game.playAudio(game.players.computer.moves[index]);

        index++; 


        if (index >= roundNumber) {
          clearInterval(computerTurnAnimation); //stop the animation 
          // launch event (we're done animating the computer's moves)
          $( document ).trigger( "onHumanTurnToMove");
        }

      }, 1000);

  }


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
    this.clearEventListeners(); 
    this.setCurrentPlayer('computer');
    this.players.computer.moves = new RandomNumbers().generateRandomSeries();
    this.display();
    this.setupEventListeners(); 
    this.play();
  };

  Game.prototype.clearEventListeners = function() {
    $( document ).unbind( "onComputerTurnToMove" );
    $( document ).unbind( "onHumanTurnToMove" );
    $( document ).unbind( "onHumanMoved"); 
  }

  Game.prototype.setupEventListeners = function() {
    $( document ).on( "onComputerTurnToMove",  function( event) {
        console.log("Received event onComputerTurnToMove" );
        simon.animateComputerMoves(simon.getCurrentRound() - 1); 

    });


    $( document ).on( "onHumanTurnToMove",  function( event) {
        console.log("It's the human's turn to move!" );
    });


    $( document ).on( "onHumanMoved",  function( event) {
        console.log("It's the human's turn to move!" );
        console.log("Moves: " + simon.players.human.moves); 

        //logic to check whether the moves are correct 
    });


  }

  Game.prototype.play = function() {
    this.addCurrentRound();
    this.display();


    $( document ).trigger( "onComputerTurnToMove");



    // var game = this;
    // var computerTurn = setInterval(function() {
    //   game.lightUp(game.players.computer.moves[game.getCurrentRound()-1]);
    //   game.playAudio(game.players.computer.moves[game.getCurrentRound()-1]);
    //   game.display();

    //   game.addCurrentRound();
    //   if(game.getCurrentRound() >= game.players.computer.moves.length) {
    //     clearInterval(computerTurn);
    //   }
    // }, game.speed);


    // while (this.getCurrentRound() < 20) {
    //   // play all of computer’s moves (up till roundNumber) 

    //   debugger 


    //   this.animateComputerMoves(this.getCurrentRound() - 1); 

    //   //wait until we're done animating the computer's moves, and THEN 
    //   // do the next thing ==> allow player 2 to copy 

    //   this.addCurrentRound() // increment the current round by 1

    //   // player 2 copies 
    //   // check whether player 2’s moves are correct 
    //   // if (player 2 makes a mistake) ==> exit the while loop
    //   // if (player 2 does the correct moves) increment the round number by 1 

    // }

  };

  return Game;
})();
var simon = new Game();
simon.init();
//module.exports = Game;


//TODOS: 
// 1) Rename your variables so that, instead of referring to each move as a "round", refer to it as a move number (moveNumber) in the sequence.  
