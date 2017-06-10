'use strict';
const FileInput = require("../src/file_input.js"),
      fileInput = new FileInput();

describe("File preperation", function(){

  beforeAll(function() {
    fileInput.inputFile('example.txt');
  })

  it("can read a file", function(){
    fileInput.inputFile('example.txt');
    expect(fileInput.fileContents).toEqual(jasmine.any(Object));
  });

  it("can turn the object into a string", function(){
    fileInput.stringify();
    expect(fileInput.fileContents).toEqual(jasmine.any(String));
  });

  it("downcases the entire string", function(){
    fileInput.downCaseString();
    expect(fileInput.fileContents).toEqual('the banana is: an edible fruit.\n');
  });
});
