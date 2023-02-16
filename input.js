let connection;
const { MOVES } = require("./constants");

//created a function that specifies what happens when data is received from stdin
const handleUserInput = function (userInput) {
  // \u0003 maps to ctrl+c input
  if (userInput === "\u0003") {
    process.exit();
    return;
  }
  connection.write(MOVES[userInput]);
  // if (userInput === "w") {
  //   connection.write("Move: up");
  // }
  // if (userInput === "a") {
  //   connection.write("Move: left");
  // }
  // if (userInput === "s") {
  //   connection.write("Move: down");
  // }
  // if (userInput === "d") {
  //   connection.write("Move: right");
  // }
  // if (userInput === " ") {
  //   connection.write("Say: Move!");
  // }
};

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //register an event listener
  stdin.on("data", (letter) => handleUserInput(letter));
  return stdin;
};

module.exports = {
  setupInput,
};
