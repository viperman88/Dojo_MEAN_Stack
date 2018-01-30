// Load the express module, body-parser and path
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express(); // invoke const express and store the resulting application in const app
// set views
app.set('view engine', 'ejs'); //setting up our view engine
app.set('views', path.join(__dirname, 'views')); // setting a path to our views file where our templates will live

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({
    extended: true
}));

// Tell the express app to listen on port {port}
//With socket.io
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
// route require link to connect with file handling routes
var route = require('./routes/index.js')(app, server);
