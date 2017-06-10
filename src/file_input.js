'use strict';
const fs = require('fs');

function FileInput(){
}

FileInput.prototype.inputFile = function (file) {
  this.fileContents = fs.readFileSync(file);
};

FileInput.prototype.stringify = function () {
  this.fileContents = this.fileContents.toString();
};


FileInput.prototype.downCaseString = function () {
  this.fileContents = this.fileContents.toLowerCase();
};

module.exports = FileInput;
