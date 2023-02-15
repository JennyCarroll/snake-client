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
  });

  //on connection I tell the server my name
  conn.on("connect", () => {
    conn.write("Name: JGC");
  });

  // Update the connect function to handle incoming data and console.log it for the player.
  conn.on("data", (data) => {
    console.log("Server says:", data);
    // conn.end(); do it need this
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};
//I export my connect function to module.exports so that other files can require and use it.
module.exports = {
  connect,
};
