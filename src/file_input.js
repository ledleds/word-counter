"use strict";
const fs = require("fs");

function FileInput(){
  this.fileContents = {};
}

FileInput.prototype.inputFile = function (file) {
  this.fileContents = fs.readFileSync(file);
};

FileInput.prototype.stringify = function () {
  this.fileContents = this.fileContents.toString();
};

FileInput.prototype.removeWhiteSpace = function () {
  this.fileContents = this.fileContents.trim();
};

FileInput.prototype.removeNonChars = function () {
  this.fileContents = this.fileContents.replace(/[^a-zA-Z ]/g, " ");
};

FileInput.prototype.downCaseString = function () {
  this.fileContents = this.fileContents.toLowerCase();
};

FileInput.prototype.createArray = function () {
  this.fileContents = this.fileContents.split(" ");
};

FileInput.prototype.removeEmptyElements = function () {
  this.fileContents = this.fileContents.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});
};

FileInput.prototype.prepareFile = function (file) {
  this.inputFile(file);
  this.stringify();
  this.removeNonChars();
  this.removeWhiteSpace();
  this.downCaseString();
  this.createArray();
  this.removeEmptyElements();
  return this.fileContents;
};

module.exports = FileInput;
