"use strict";
const FileInput = require("../src/file_input.js"),
      fileInput = new FileInput();

describe("File preperation", function(){

  beforeAll(function() {
    fileInput.inputFile('example.txt');
  })

  it("can read a file", function(){
    expect(fileInput.fileContents).toEqual(jasmine.any(Object));
  });

  it("can turn the object into a string", function(){
    fileInput.stringify();
    expect(fileInput.fileContents).toEqual(jasmine.any(String));
  });

  it("can downcase the entire string", function(){
    fileInput.downCaseString();
    expect(fileInput.fileContents).toEqual("the banana is: an edible fruit.\n");
  });

  it("can remove punctuation and newlines", function(){
    fileInput.removeNonChars();
    expect(fileInput.fileContents).toEqual("the banana is an edible fruit")
  });

  it("turns string into array of words", function(){
    fileInput.createArray();
    expect(fileInput.fileContents).toEqual(['the', 'banana', 'is', 'an', 'edible', 'fruit'])
  })
});
