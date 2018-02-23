const express = require('express'),
    mongoose = require('mongoose'),
    // Require body-parser (to receive post data from clients)
    bodyParser = require('body-parser'),
    // Require path
    path = require('path'),
    // Create an Express App
    app = express();
const moment = require("moment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static'))); // Setting our Static Folder Directory

app.set('views', path.join(__dirname, './views')); // Setting our Views Folder Directory
app.set('view engine', 'ejs'); // Setting our View Engine set to EJS

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app); // require routes.js and invoke 'app' callback

mongoose.Promise = global.Promise;

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
