//this file is where you run your commands: top level execution script (similar to the main function which is a button that executes your functions?  ask Mike)
//I require my client.js file using ES6 shorthand
const { connect } = require("./client");
const { setupInput } = require("./input");

//I console.log Connecting...
console.log("Connecting ...");
//I call the connect function using my connect keyword, which allows me to call the function housed in client.js
connect();
setupInput();
