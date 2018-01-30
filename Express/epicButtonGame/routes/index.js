module.exports = function Route(app, server) {
    // handle the route(s)
    app.get('/', (request, response) => {
        response.render('index')
    })
    let count = 0;
    const io = require('socket.io').listen(server);

    io.on('connection', function(socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // all the server socket code goes in here
        socket.on("button_clicked", function() {
            numberUpdated(++count); // ++count alows it to update count prior to running numberUpdated
        }); // this alows count to update with fresh information and not an initial older value
        socket.on("reset_count", function() {
            numberUpdated(count = 0);
        });
        socket.emit('update_counter', count); // updates new users with current info

    });
    // Number updated
    function numberUpdated(number) {
        io.emit('update_counter', number);
    }
};
