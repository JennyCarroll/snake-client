const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  //on connection I notify myself that I am connected
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JGC");
  });

  //on connection I tell the server my name
  // conn.on("connect", () => {
  // setInterval(() => {
  //   conn.write("Move: up");
  // }, 50);
  // setTimeout(() => {
  //   conn.write("Move: up");
  // }, 100);
  // });

  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)
  // Snakes cannot instantly make a 180 turn by moving in the opposite direction.

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("Server says:", data);
    // conn.end(); do it need this
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // we returned a conn object from the connect function that allowed us to interact with the server.
  return conn;
};
//I export my connect function to module.exports so that other files can require and use it.
module.exports = {
  connect,
};
