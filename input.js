//created a function that specifies what happens when data is received from stdin
const handleUserInput = function (userInput) {
  // \u0003 maps to ctrl+c input
  if (userInput === "\u0003") {
    process.exit();
  }
  if (userInput === "\u0003") {
    process.exit();
  }
};

// setup interface to handle user input from stdin
//the stdin object returned by setupInput will allow us to listen for keyboard input and react to it.
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //register an event listener
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {
  setupInput,
};
