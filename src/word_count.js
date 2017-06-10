'use strict';
const fs = require('fs');

function WordCounter(){
  this.counts = {};
};

WordCounter.prototype.count = function (wordArray) {
  for (var i = 0; i < wordArray.length; i++) {
    var word = wordArray[i];
    this.counts[word] = 1;
  }
  return this.counts;
};

module.exports = WordCounter;
