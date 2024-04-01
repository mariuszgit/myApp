const express = require('express')
const app = express();
const port = process.env.PORT || 3000;
const { io } = require('socket.io')(port)

// app.set('view engine', 'hbs')

io.on('connection', socket => {
    console.log('connected to socket');
    console.log(socket.id);
})

app.get('/', (req, res) => {
    res.send('Strona główna')
    // res.render('index', {
    //     pageTitle: 'xxx'
    // })
})

// app.get('/contact', (req, res) => {
//     res.send('Strona konaktowa')
// })

app.listen(port, () => {
    console.log("Listening to port nr " + port + '.');
})