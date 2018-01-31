let users = {};
let messages = [];
module.exports = function Route(app, server) {

    const io = require('socket.io').listen(server);
    io.sockets.on("connection", function(socket) {

        socket.on("page_load", function(data) {
            console.log("new user", data);
            // Add user to users object. We will use socket id to uniquely identify each user.
            // This is a stand in for a database connection.
            users[socket.id] = data.name;
            // Need to update new user with all current users.
            socket.broadcast.emit('new_user', {
                users: users
            });

        })

        var temp_user = {};
        temp_user[socket.id] = data.name;
        socket.broadcast.emit('new_user', {
            users: temp_user
        });

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
