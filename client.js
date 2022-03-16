const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
      console.log('im connected')
      conn.write('Name: TK9')
      setInterval(() => {conn.write('Move: up')}, )
    //   setTimeout(() => {conn.write('Move: up')}, 500);
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