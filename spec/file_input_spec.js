'use strict';
const FileInput = require("../src/file_input.js"),
      fileInput = new FileInput();

describe("File input", function(){
  it("can read a file", function(){
    expect(fileInput.inputFile('example2.txt')).toEqual(jasmine.any(Object))
  });
});
