'use strict';

function WordCounter(wordArray){
  this.wordArray = wordArray
  this.counts = {};
}

WordCounter.prototype.isPrime = function (value) {
  for (var i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

WordCounter.prototype.countAllWords = function () {
  return "Total number of words in the file: " + this.wordArray.length
};

WordCounter.prototype.countIndividialWords = function () {
  for (var i = 0; i < this.wordArray.length; i++) {
    var word = this.wordArray[i];
    this.checkIfWordExists(word);
  }
  return this.counts;
};

WordCounter.prototype.checkIfWordExists = function (word) {
  if (this.counts[word] === undefined) {
    this.addToCounts(word);
  } else {
    this.updateWordCount(word);
  }
};

WordCounter.prototype.addToCounts = function (word) {
  this.counts[word] = 1;
};

WordCounter.prototype.updateWordCount = function (word) {
  this.counts[word] += 1;
};

module.exports = WordCounter;
