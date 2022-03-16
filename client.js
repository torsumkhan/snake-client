const net = require("net");
const {IP, PORT} = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
      console.log('im connected')
      conn.write('Name: CR7')
    //   setInterval(() => {conn.write('Move: up')}, )
      setTimeout(() => {conn.write('Move: up')}, 500);
    //   setTimeout(() => {conn.write('Move: up')}, 1000);
    //   setTimeout(() => {conn.write('Move: up')}, 1500);
    //   setTimeout(() => {conn.write('Move: up')}, 2000);
  })

  conn.on('data', (data) => {
    console.log(`Server outputs',${data}`);
  })

  return conn;
};

// connect();


module.exports = {connect};