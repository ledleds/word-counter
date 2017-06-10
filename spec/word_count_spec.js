'use strict';
const WordCounter = require("../src/word_count.js"),
      wordCounter = new WordCounter();

describe("counting", function() {

  beforeEach(function() {
    wordCounter.counts = {};
  });

  it("can count one word", function() {
    var mockCounts = { bananas: 1 };
    expect(wordCounter.countIndividialWords(['bananas'])).toEqual(mockCounts);
  });

  it("can count many different words", function() {
    var mockCounts = { bananas: 1, blueberries: 1, pineapple: 1 };
    expect(wordCounter.countIndividialWords(['bananas', 'blueberries', 'pineapple'])).toEqual(mockCounts);
  });

  it("can count multiple occurences of words", function() {
    var mockCounts = { bananas: 3, pineapple: 2 };
    expect(wordCounter.countIndividialWords(['bananas', 'bananas', 'bananas', 'pineapple', 'pineapple'])).toEqual(mockCounts);
  });

  it("can count all words in the array", function() {
    expect(wordCounter.countAllWords(['bananas', 'pineapple', 'pineapple'])).toEqual(3);
  });
});
