// require express, path, body-parser
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const app = express(); // invoke const express and store the resulting application in const app

app.use(bodyParser.urlencoded({
    extended: true
}));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Tell the express app to listen on port 8000
// //With socket.io
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

//we're going to have /routes/index.js handle all of our routing
const route = require('./routes/index.js')(app, server);
