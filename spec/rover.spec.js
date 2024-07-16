const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

describe("Rover class", function () {
  it("constructor sets position and default values for mode and generatorWatts", () => {
    let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
    let moveCommand = new Command("MOVE", 12000);
    let statusCheck = new Command("STATUS_CHECK");
    let commands = [modeCommand, statusCheck];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("LOW_POWER");
    expect(rover.generatorWatts).toBe(110);
  });
  it("response returned by receiveMessage contains the name of the message", () => {
    let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
    let moveCommand = new Command("MOVE", 12000);
    let statusCheck = new Command("STATUS_CHECK");
    let commands = [modeCommand, statusCheck];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe(message.name);
  });
  it("response returned by receiveMessage includes two results if two commands are sent in the message", () => {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toBe(2);
  });
  it("responds correctly to the status check command", () => {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(commands[1].commandType).toBe("STATUS_CHECK");
    expect(response.results[1].completed).toBe(true);
  });
  it("responds correctly to the mode change command", () => {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(98382);
    let response = rover.receiveMessage(message);
    expect(rover.mode).toBe("LOW_POWER");
    expect(response.results[0].completed).toBe(true);
  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", () => {
    let rover = new Rover(98382);
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("MOVE", 12000),
    ];
    let message = new Message("Test in low power mode", commands);
    let response = rover.receiveMessage(message);
    expect(response.results[1].completed).toBe(false);
    expect(response.results[1].errorMessage).toBe(
      "Can't be moved in this state."
    );
  });

  it("responds with the position for the move command", () => {
    let moveCommand = new Command("MOVE", 12000);
    let rover = new Rover(98382);
    let commands = [moveCommand];
    let message = new Message("Test", commands);
    let response = rover.receiveMessage(message);
    expect(rover.position).toBe(12000);
  });
});
