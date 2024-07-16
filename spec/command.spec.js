const Command = require('../command.js');
// const modeCommand = require('../command.js');
// const moveCommand = require('../command.js');


describe("Command class", function() {

  // these were commented out when they were module exports
  let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
  let moveCommand = new Command('MOVE', 12000);
  let statusCheck = new Command('STATUS_CHECK');

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  it("contructor sets command type", function() {
    expect(modeCommand.commandType).toBe('MODE_CHANGE');
  });

  it("constructor sets a value passed in as the 2nd argument", function() { 
    expect(moveCommand.value).toBe(12000);
  });

});














// const Command = require('../command.js');

// // NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
// //       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// describe("Command class", function() {

//   it("throws error if command type is NOT passed into constructor as the first parameter", function() {
//     expect( function() { new Command();}).toThrow(new Error('Command type required.'));
//   });

//   it("contructor sets command type", function() {
//     let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
//     expect(modeCommand.commandType).toBe('MODE_CHANGE');
//   });

//     it("constructor sets a value passed in as the 2nd argument", function() { 
//     let moveCommand = new Command('MOVE', 12000);
//     expect(moveCommand.value).toBe(12000);
//   });

// });


