module.exports = function Route(app, server) {
    // this gets the socket.io module
    const io = require('socket.io').listen(server)
    // root route to render the index.ejs view
    app.get('/', function(reqest, response) {
        response.render("index");
    })
    //listen to connection even from the client side
    io.sockets.on('connection', function(socket) {
        //server listens to "posting_form" event
        socket.on("posting_form", function(data) {
            //generate a random number
            let random_number = Math.floor((Math.random() * 1000) + 1);
            //will emit the data to the client
            socket.emit('updated_message', {
                response: data
            });
            socket.emit('random_number', {
                response: random_number
            });
        })
    })
};
