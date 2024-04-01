const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const io = require('socket.io')(3000, {
    cors: {
        origin: ['http://127.0.0.1:5173'],
    }
})


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