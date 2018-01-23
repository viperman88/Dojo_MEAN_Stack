// Load the express module, body-parser, session and path
const session = require('express-session');
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express(); // invoke var express and store the resulting application in var app

const sessionConfig = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'superSecretPassCode'
};

app.set('view engine', 'ejs'); //setting up our view engine
app.set('views', path.join(__dirname, 'views')); // setting a path to our views file where our templates will live

app.use(session(sessionConfig));
app.use(bodyParser.urlencoded({
    extended: true
}));

// lets handle the base route "/"
app.get('/', (request, response) => {
    response.render('index', {
        numTimes: counterPlusOne(request)
    });
})
app.post('/visitors', (request, response) => {
    response.redirect('/')
})
app.post('/addTwo', (request, response) => {
    numTimes: counterPlusOne(request)
    response.redirect('/')
})
app.post('/reset', (request, response) => {
    request.session.destroy();
    response.redirect('/')
})

function counterPlusOne(request) {
    return request.session.numTimes = request.session.numTimes ?
        request.session.numTimes + 1 : 1;
}

// Tell the express app to listen on port 8000
app.listen(port, () => console.log(`Listening on port ${port}`));
// this line will almost always be at the end of your server.js file (we only tell
//the server to listen after we have set up all of our rules)
