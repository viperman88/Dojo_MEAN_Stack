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

// lets handle the routes "/"
app.get('/', (request, response) => {
    response.render('index');
})
