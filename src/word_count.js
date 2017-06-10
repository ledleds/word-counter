'use strict';
const fs = require('fs');

function WordCounter(){
  this.counts = {};
};

WordCounter.prototype.count = function (wordArray) {
    var word = wordArray[0];
    this.counts[word] = 1;
    return this.counts
};

module.exports = WordCounter;
