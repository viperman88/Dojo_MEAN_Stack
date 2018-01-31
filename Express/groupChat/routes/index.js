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

// Need to update user on current messages
// console.log("new user", messages)
// socket.emit('new_message', {
//     messages: messages
// });
// Let user know their id.
// socket.emit('user_id', {
//     id: socket.id
// });
// Update all other users with just the new user.
// var temp_user = {};
// temp_user[socket.id] = data.name;
// socket.broadcast.emit('new_user', {
//     users: temp_user
// });
// socket.on("disconnect", function(data) {
//     socket.broadcast.emit('remove_user', {
//         id: socket.id
//     });
//     delete users[socket.id];
// })
// socket.on("send_message", function(data) {
//     if (messages.length > max_messages) {
//         // FIFO list. Take first on off the list.
//         messages.shift();
//     }
// const users = [];
//
// const messages = [];
//
// function isUser(user) {
//     const usersCount = users.length;
//
//     for (var i = 0; i < usersCount; i++) {
//         if (user == users[i]) {
//             return true;
//         }
//     }
//     return false;
// }
// module.exports = function Route(app, server) {
//     // this gets the socket.io module
//     const io = require('socket.io').listen(server)
//     //listen to connection even from the client side
//     io.sockets.on("connection", function(socket) {
//         console.log('Socket up')
//         socket.on("page_load", function(data) {
//             const existingUser = isUser(data.user);
//             const event = existingUser ? 'existing_user' : 'load_messages';
//             const errdata = existingUser ? {
//                 error: "This user already exits"
//             } : {
//                 current_user: data.user,
//                 messages: messages
//             };
//
//             if (!existingUser) {
//                 users.push(data.user);
//             }
//
//             socket.emit(event, data);
//         });
//
//         socket.on("new_message", function(data) {
//             messages.push({
//                 name: data.user,
//                 message: data.message
//             });
//             io.emit("post_new_message", {
//                 new_message: data.message,
//                 user: data.user
//             });
//         });
//     });
//
//     app.get("/", function(request, response) {
//         response.render("index")
//     });
// };
