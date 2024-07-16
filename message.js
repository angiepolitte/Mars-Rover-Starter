const Command = require('./command.js');

class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
        throw Error("Name required.");
      }
      this.commands = commands;
    }
}


// let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
// let moveCommand = new Command('MOVE', 12000);
// let statusCheck = new Command('STATUS_CHECK');
// let commands = [modeCommand, statusCheck];
// let message = new Message('Test message with two commands', commands);

// console.log(message.commands);

module.exports = Message;
































// const Command = require('./command.js');

// class Message {
//    constructor(name, commands) {
//       this.name = name;
//       if (!name) {
//         throw Error("Name required.");
//       }
//       this.commands = commands;
//     }
// }
// let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
// let moveCommand = new Command('MOVE', 12000);
// let statusCheck = new Command('STATUS_CHECK', 'NULL');
// let commands = [modeCommand, statusCheck];
// let message = new Message('Test message with two commands', commands);
// // console.log(message.commands);
// module.exports = Message;










// // const Command = require('./command.js');

// // class Message extends Command {
// //    constructor(name, commands) {
// //       super();
// //       this.name = name;
// //       if (!name) {
// //         throw Error("Name required.");
// //       }
// //       this.commands = commands;
// //     }
// // }