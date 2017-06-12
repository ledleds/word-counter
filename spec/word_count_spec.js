"use strict";
const WordCounter = require("../src/word_count.js")

describe("counting", function() {

  it("can count one word", function() {
    var wordCounter = new WordCounter(["bananas"]);
    var mockCounts = { bananas: 1 };
    expect(wordCounter.countIndividialWords()).toEqual(mockCounts);
  });

  it("can count many different words", function() {
    var wordCounter = new WordCounter(["bananas", "blueberries", "pineapple"]);
    var mockCounts = { bananas: 1, blueberries: 1, pineapple: 1 };
    expect(wordCounter.countIndividialWords()).toEqual(mockCounts);
  });

  it("can count multiple occurences of words", function() {
    var wordCounter = new WordCounter(["bananas", "bananas", "bananas", "pineapple", "pineapple"]);
    var mockCounts = { bananas: 3, pineapple: 2 };
    expect(wordCounter.countIndividialWords()).toEqual(mockCounts);
  });

  it("can count all words in the array", function() {
    var wordCounter = new WordCounter(["bananas", "pineapple", "pineapple"]);
    expect(wordCounter.countAllWords()).toEqual("Total number of words in the file: 3");
  });
});

describe("Prime numbers", function() {
  var wordCounter = new WordCounter(["bananas", "blueberries", "pineapple", "pineapple"]);

  beforeAll(function() {
    wordCounter.countIndividialWords();
    wordCounter.primeChecker();
  });

  it("returns false if a number is not prime", function() {
    expect(wordCounter.isPrime(1)).toEqual(false);
  });

  it("returns true if a number IS prime", function() {
    expect(wordCounter.isPrime(73)).toEqual(true);
  });

  it("can add false to the object", function() {
    expect(wordCounter.countsWithPrime["blueberries"]).toEqual([1, false]);
  });

  it("can add true to the object", function() {
    expect(wordCounter.countsWithPrime["pineapple"]).toEqual([2, true]);
  });
});
