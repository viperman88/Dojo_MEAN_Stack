// Require modules
const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser (to receive post data from clients)
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express(); // Create Express app

app.use(bodyParser.urlencoded({
    extended: true
})); // Integrate body-parser with our App
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index')
});

// Setting our Server to Listen on Port: 8000
app.listen(port, () => console.log(`express listening on port ${port}`));
