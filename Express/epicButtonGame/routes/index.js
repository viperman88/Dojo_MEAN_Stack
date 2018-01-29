module.exports = function Route(app, server) {
    // handle the route(s)
    app.get('/', (request, response) => {
        response.render('index')
    })
    let count = 0;
    const io = require('socket.io').listen(server);

    io.sockets.on('connection', function(socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // all the server socket code goes in here
        socket.on("button_clicked", function() {
            console.log("button clicked");
            numberUpdated(count++);
        });
        socket.on("reset_count", function() {
            console.log("RESET button clicked");
            numberUpdated(count = 0);
        });
        socket.emit('update_counter', count);

    });
    // Number updated
    function numberUpdated(number) {
        io.emit('update_counter', number);
    }
};
