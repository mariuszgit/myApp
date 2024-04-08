const express = require('express')
const app = express();
const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const { Server } = require("socket.io")(server, {
    cors: {
        origin: ['http://127.0.0.1:5173'],
    }
});
const io = new Server(server);
// const io = require('socket.io')(server, {
//     cors: {
//         origin: ['http://127.0.0.1:5173'],
//     }
// })


io.on('connection', socket => {
    console.log('connected to socket');
    console.log(socket.id);
})
console.log(port);

app.get('/', (req, res) => {
    res.send('Strona główna')

})


app.listen(port, () => {
    console.log("Listening to port nr " + port + '.');
})