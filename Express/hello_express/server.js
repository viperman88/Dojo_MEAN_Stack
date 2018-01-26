// Load the express module and body-parser
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
// array to pass into ejs file
const names = ['Maggie', 'Robert', 'Franklin'];
// invoke var express and store the resulting application in var app
const app = express();
//setting up our view engine
app.set('view engine', 'ejs');
// setting a path to our views file where our templates will live
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// lets handle the base route "/"
app.get('/', (request, response) => {
    response.render('index');
})
app.get('/names/:id', (request, response) => {
    response.render('person', {
        personName: names[request.params.id]
    })
})
app.post('/process', (request, response) => {
    response.render('process', {
        name: request.body.name,
        names: names
    })
})
// Tell the express app to listen on port 8000

//No socket.io
//app.listen(port, () => console.log(`Listening on port ${port}`));

//With socket.io
var server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    // all the server socket code goes in here
    socket.on("button_clicked", function(data) {
        console.log('Someone clicked a button!  Reason: ' + data.reason);
        socket.emit('server_response', {
            response: "sockets are the best!"
        });
    })

})


// this line will almost always be at the end of your server.js file (we only tell
//the server to listen after we have set up all of our rules)
