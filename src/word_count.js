'use strict';

function WordCounter(){
  this.counts = {};
}

WordCounter.prototype.countAllWords = function (wordArray) {
  return 3
};

WordCounter.prototype.countIndividialWords = function (wordArray) {
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
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
