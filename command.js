
class Command {
  constructor(commandType, value) {
    this.commandType = commandType;
    if (!commandType) {
      throw Error("Command type required.");
    }
    this.value = value;
  }

  // getResults() {

  //  return `Command Type is ${this.commandType}, and value is ${this.value}.`;

  // }

}
// let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
// let moveCommand = new Command('MOVE', 12000);
// let statusCheck = new Command('STATUS_CHECK');

// console.log(modeCommand);
// console.log(moveCommand);
// console.log(modeCommand.getResults());

module.exports = Command;
// module.exports = modeCommand;
// module.exports = moveCommand;













// class Command {
//    constructor(commandType, value) {
//      this.commandType = commandType;
//      if (!commandType) {
//        throw Error("Command type required.");
//      }
//      this.value = value;
//    }

//    getResults() {

//     return `Command Type is ${this.commandType}, and value is ${this.value}.`;

//    }
 
//  }
// let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
// let moveCommand = new Command('MOVE', 12000);
// let statusCheck = new Command('STATUS_CHECK', 'NULL');

// // console.log(modeCommand.getResults());
// // console.log(moveCommand.getResults());

//  module.exports = Command;


