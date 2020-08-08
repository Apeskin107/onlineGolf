const express = require('express'); //require is import
const app = express(); //app is an instance of express
let server = app.listen(80); //3000 is the port number
console.log("Server is running");

app.use(express.static("public")); //telling server to go to public folder for client side code

let socket = require('socket.io');
let io = socket(server); //telling sockets to connect to Server

io.sockets.on('connection', (socket) => {
  console.log('New connection: ' + socket.id);

socket.on('mouse', mouseData);
function mouseData(data){
  socket.broadcast.emit('mouse', data); //recieves mouse on clients end
}

});
