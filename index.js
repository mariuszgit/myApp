const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
        cors: {
            origin: ['http://127.0.0.1:5173'],
       }});
const port = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, '../../build')));
app.get('/', (req, res, next) => res.sendFile(__dirname + './index.html'));
io.on('connection', function(socket){
io.emit('message from server', 'message from server - it works!')
})
server.listen(port);

// const io = require('socket.io')(server, {
//     cors: {
//         origin: ['http://127.0.0.1:5173'],
//     }
// })