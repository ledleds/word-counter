'use strict';
const fs = require('fs');

function FileInput(){
}

FileInput.prototype.inputFile = function (file) {
  var array = fs.readFileSync('example2.txt')
  return array
};

module.exports = FileInput;
