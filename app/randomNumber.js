var RandomNumbers = (function() {
  function RandomNumbers() {
    this.randomSeries = [];
  }
  RandomNumbers.prototype.generateRandomNumber = function() {
    var numberOfButtons = 4;
    var randomNumber = Math.floor(Math.random() * numberOfButtons);

    return randomNumber;
  };

  RandomNumbers.prototype.generateRandomSeries = function() {
    var amountOfGeneratedNumber = 20;

    for(var i = 0; i < amountOfGeneratedNumber; i++) {
      this.randomSeries.push(this.generateRandomNumber());
    }
    return this.randomSeries;
  };

  return RandomNumbers;
})();
module.exports = RandomNumbers;
