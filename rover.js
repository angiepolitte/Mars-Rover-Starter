const Command = require("./command.js");
const Message = require("./message.js");

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: [],
    };

    for (let i = 0; i < message.commands.length; i++) {
      let command = message.commands[i];
      let result = {};

      if (command.commandType === "MODE_CHANGE") {
        this.mode = command.value;
        result = {
          completed: true,
        };
      } else if (command.commandType === "STATUS_CHECK") {
        result = {
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        };
      } else if (command.commandType === "MOVE") {
        if (this.mode === "LOW_POWER") {
          result = {
            completed: false,
            errorMessage: "Can't be moved in this state.",
          };
        } else {
          this.position = command.value;
          result = {
            completed: true,
          };
        }
      }
      response.results.push(result);
    }
    return response;
  }
}

module.exports = Rover;

let modeCommand = new Command("MODE_CHANGE", "LOW_POWER");
let moveCommand = new Command("MOVE", 12000);
let statusCheck = new Command("STATUS_CHECK");
// let commands = [modeCommand, statusCheck];
// let message = new Message("Test message with two commands", commands);
let rover = new Rover(98382); // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);
let commands = [modeCommand, moveCommand, statusCheck];
let newMessage = new Message("Test with all commands", commands);
let response2 = rover.receiveMessage(newMessage);

// console.log(response.results);
console.log(response2.results);
