'use strict';

function WordCounter(){
  this.counts = {};
};

WordCounter.prototype.count = function (wordArray) {
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    if (this.counts[word] === undefined) {
      this.counts[word] = 1;
    } else {
      this.counts[word] += 1;
    }}
    return this.counts;
  };

  module.exports = WordCounter;
