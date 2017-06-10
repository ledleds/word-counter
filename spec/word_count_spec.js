'use strict';
const WordCounter = require("../src/word_count.js"),
      wordCounter = new WordCounter();

describe("counting", function(){
  it("can count one word", function(){
    var mockCounts = { bananas: 1 };
    expect(wordCounter.count(['bananas'])).toEqual(mockCounts)
  });
});
