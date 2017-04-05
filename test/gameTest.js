
var expect = require('chai').expect;
var Game = require('../app/game');

describe('Game', function() {
  var game = new Game();

  describe('Constructor', function() {
    it('should have players property', function() {
      expect(game).to.have.property('players');
    });
    it('should have generatedSeries', function() {
      expect(game).to.have.property('generatedSeries');
    })
    it('should have currentCount property set to 0.', function() {
      expect(game).to.have.property('currentCount').to.be.equal(1);
    });
    it('should have strictMode property set to false', function() {
      expect(game).to.have.property('strictMode').to.be.equal(false);
    });
    it('should have powerOn property set to false', function() {
      expect(game).to.have.property('powerOn').to.be.equal(false);
    });
    it('should have playing property set to false', function() {
      expect(game).to.have.property('playing').to.be.equal(false);
    });
    it('should have currentPlayer property set to null.', function() {
      expect(game).to.have.property('currentPlayer').to.be.equal(null);
    });
    it('should have gameWon property set to false', function() {
      expect(game).to.have.property('gameWon').to.be.equal(false);
    });
    it('should have init method', function() {
      expect(game).to.have.property('init').to.be.a('function');
    });
    it('should have restart method', function() {
      expect(game).to.have.property('restart').to.be.a('function');
    });
    it('should have addPlayer method', function() {
      expect(game).to.have.property('addPlayer').to.be.a('function');
    });
    it('should have addCurrentCount method', function() {
      expect(game).to.have.property('addCurrentCount').to.be.a('function');
    });
    it('should have togglePower method.', function() {
      expect(game).to.have.property('togglePower').to.be.a('function');
    });
    it('should have toggleStrictMode method', function() {
      expect(game).to.have.property('toggleStrictMode').to.be.a('function');
    });
    it('should have toggleStart method', function() {
      expect(game).to.have.property('toggleStart').to.be.a('function');
    });
    it('should have switchTurn method', function() {
      expect(game).to.have.property('switchTurn').to.be.a('function');
    });
    it('should have getCurrentPlayer method', function() {
      expect(game).to.have.property('getCurrentPlayer').to.be.a('function');
    });
    it('should have setCurrentPlayer method', function() {
      expect(game).to.have.property('setCurrentPlayer').to.be.a('function');
    });
    it('should have getCurrentCount method', function() {
      expect(game).to.have.property('getCurrentCount').to.be.a('function');
    });
    it('should have getGameWon method', function() {
      expect(game).to.have.property('getGameWon').to.be.a('function');
    });
    it('should have setGameWon method', function() {
      expect(game).to.have.property('setGameWon').to.be.a('function');
    });
    it('should have getPlaying method', function() {
      expect(game).to.have.property('getPlaying').to.be.a('function');
    });
    it('should have setPlaying method', function() {
      expect(game).to.have.property('setPlaying').to.be.a('function');
    });
    it('should have update method', function() {
      expect(game).to.have.property('update').to.be.a('function');
    });
    it('should have render method', function() {
      expect(game).to.have.property('render').to.be.a('function');
    });
    it('should have generateRandomNumber', function() {
      expect(game).to.have.property('generateRandomNumber').to.be.a('function');
    });
    it('should have generateRandomSeries', function() {
      expect(game).to.have.property('generateRandomSeries').to.be.a('function');
    });
  });

  describe('#restart', function() {
    it('should have currentCount set to 1.', function() {
      game.currentCount = 2;
      game.restart();
      expect(game).to.have.property('currentCount').to.be.equal(1);
    });

  });

  describe('#toggleStrictMode', function() {
    it('should have strict property set to true.', function() {
      game.strictMode = false;
      game.toggleStrictMode();
      expect(game).to.have.property('strictMode').to.be.equal(true);
    });
    it('should have strict property set of false.', function() {
      game.StrictMode = true;
      game.toggleStrictMode();
      expect(game).to.have.property('strictMode').to.be.equal(false);
    })
  });
  describe('#generateRandomNumber', function() {
    it('should have generated a number from 0-3', function() {

    });
  });

})
