"use strict";
const FileInput = require("./file_input.js"),
      WordCounter = require("./word_count.js"),
      fileInput = new FileInput;

function Run(file) {
  var preparedFile = fileInput.prepareFile(file);
  var wordCounter = new WordCounter(preparedFile)
  console.log(wordCounter.countAllWords());
  wordCounter.countIndividialWords();
  wordCounter.primeChecker();
  console.log(wordCounter.countsWithPrime);
};

Run('./the_railway_children.txt')


module.exports = Run;
