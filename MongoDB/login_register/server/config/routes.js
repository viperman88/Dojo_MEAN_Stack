const controller = require('../controllers/users.js'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = app => {
    app.get('/', controller.index);
    app.post('/', controller.login);
    app.get('/register', controller.new_user);
    app.post('/register', controller.register);
    app.get("/logout", controller.logout);
}
