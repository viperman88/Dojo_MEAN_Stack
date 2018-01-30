module.exports = function Route(app, server) {
    // this gets the socket.io module
    const io = require('socket.io').listen(server)
    // root route to render the index.ejs view
    app.get('/', function(reqest, response) {
        response.render("index");
    })
    //listen to connection even from the client side
    io.on('connection', function(socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // all the server socket code goes in here
    })

};
