const express = require('express')
const app = express();
const port = process.env.PORT || 3000;

// app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.send('Strona główna')
    // res.render('index', {
    //     pageTitle: 'xxx'
    // })
})

app.get('/contact', (req, res) => {
    res.send('Strona konaktowa')
})

app.listen(port, () => {
    console.log("Listening to port nr " + port + '.');
})