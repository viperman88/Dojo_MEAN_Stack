let users = {};
let messages = [];

module.exports = function Route(app, server) {

    const io = require('socket.io').listen(server);
    io.sockets.on("connection", function(socket) {

        socket.on("page_load", function(data) {
            console.log("new user", data);
            // Use socket.id for users id
            users[socket.id] = data.name;
            // Need to update new user with all current users.
            socket.emit('new_user', {
                users: users
            });
            // Update all other users with just the new user.
            let temp_user = {};
            temp_user[socket.id] = data.name;
            socket.broadcast.emit('new_user', {
                users: temp_user
            });
        })

        socket.on('new_message', function(data) {
            messages.push({
                name: users[socket.id],
                message: data.message
            });
            io.emit('post_message', {
                messages: [{
                    name: users[socket.id],
                    message: data.message
                }]
            });
        })
    })
    // root route to render the index.ejs file
    app.get("/", function(request, response) {
        response.render('index')
    })
}
