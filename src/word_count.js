'use strict';
const fs = require('fs');

function WordCount(){};

WordCount.prototype.inputFile = function (file) {
  return true
};

module.exports = WordCount;
