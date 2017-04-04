var expect = require('chai').expect;
var Game = require('../app/game');

describe('Game', function() {
  var game = new Game();

  describe('Constructor', function() {
    it('should have player property', function() {
      expect(game).to.have.property('players');
    })
  })
})
