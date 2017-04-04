var expect = require('chai').expect;
var Player = require('../app/player');

describe('Player', function() {
  var human = new Player();

  describe('constructor', function() {
    it('should have name property set to null.', function() {
      expect(human).to.have.property('name').to.be.equal(null);
    });
    it('should have finished property set to false', function() {
      expect(human).to.have.property('finished').to.be.equal(false);
    });
    it('should have setName method', function() {
      expect(human).to.have.property('setName').to.be.a('function');
    });
  })

  describe('#setName', function() {
    it('should have name have the value "human".', function() {
      human.setName('human');
      expect(human).to.have.property('name').to.be.equal('human');
    });
  })
})
