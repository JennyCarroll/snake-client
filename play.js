const net = require("net");
const { host, port } = require("./client");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  //when we connect, do this
  conn.on("connect", () => {
    console.log("connected to server");
    // code that does something when the connection is first established
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
//should this all be inside the connect function??
console.log("Connecting ...");
connect();
