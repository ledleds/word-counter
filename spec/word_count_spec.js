'use strict';
const WordCount = require("../src/word_count.js"),
      wordCount = new WordCount();

describe("File input", function(){
  it("can read a file", function(){
    expect(wordCount.inputFile('example.txt')).toBe(true)
  });
});
