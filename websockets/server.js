const express = require('express');
const http = require('http');   
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const cors = require('cors');
const io = socket(server);

app.use(cors());

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('joinroom', (data) => {
        socket.join(data);
    })
    socket.on('sendmessage', (data) => {
        socket.to(data.room).emit('recievemessage', data.content);
    })
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});
