const express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'), // Require body-parser (to receive post data from clients)
    path = require('path'), // Require path
    moment = require("moment");

const port = process.env.PORT || 8000;
const app = express(); // Create an Express App

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static'))); // Setting our Static Folder Directory

app.set('views', path.join(__dirname, './client/views')); // Setting our Views Folder Directory
app.set('view engine', 'ejs'); // Setting our View Engine set to EJS

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); // require routes.js and invoke 'app' callback

// Setting our Server to Listen on Port: port
app.listen(port, () => console.log(`express listening on port ${ port }`));
