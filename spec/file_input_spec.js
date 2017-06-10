'use strict';
const FileInput = require("../src/file_input.js"),
      fileInput = new FileInput();

describe("File input", function(){
  it("can read a file", function(){
    fileInput.inputFile('example.txt');
    expect(fileInput.fileContents).toEqual(jasmine.any(Object));
  });
});
