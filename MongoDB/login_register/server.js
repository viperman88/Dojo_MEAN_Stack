// Require modules
const express = require('express'),
    bodyParser = require('body-parser'), // Require body-parser (to receive post data from clients)
    mongoose = require('mongoose'),
    path = require('path'),
    bcrypt = require("bcryptjs"),
    session = require('express-session');

const port = process.env.PORT || 8000;
const app = express(); // Create Express app

const sessionConfig = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'superSecretPassCode'
};

app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({ extended: true })); // Integrate body-parser with our App
app.use(express.static(path.join(__dirname, './client/static')));

app.set('view engine', 'ejs'); //setting up our view engine
app.set('views', path.join(__dirname, './client/views'));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); // require routes.js and invoke 'app' callback

// Setting our Server to Listen on Port: 8000
app.listen(port, () => console.log(`express listening on port ${port}`));
