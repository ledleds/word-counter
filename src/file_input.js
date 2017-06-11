"use strict";
const fs = require("fs");

function FileInput(){}

// change this to two files? file input seperate?
// also have one method that calls all others

FileInput.prototype.inputFile = function (file) {
  this.fileContents = fs.readFileSync(file);
};

FileInput.prototype.stringify = function () {
  this.fileContents = this.fileContents.toString();
};

// FileInput.prototype.prepareString = function () {
//   downCaseString();
//   removeNonChars();
//   createArray();
// };

FileInput.prototype.downCaseString = function () {
  this.fileContents = this.fileContents.toLowerCase();
};

FileInput.prototype.removeNonChars = function () {
  this.fileContents = this.fileContents.replace(/[^a-zA-Z ]/g, "");
};

FileInput.prototype.createArray = function () {
  this.fileContents = this.fileContents.split(" ")
};

module.exports = FileInput;
