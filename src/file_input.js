'use strict';
const fs = require('fs');

function FileInput(){
}

FileInput.prototype.inputFile = function (file) {
  this.fileContents = fs.readFileSync(file)
};

module.exports = FileInput;
