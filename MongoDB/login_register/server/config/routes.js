const controller = require('../controllers/users.js'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = app => {
    app.get('/', controller.index);
    app.post('/register', controller.register);
    app.post('/login', controller.login);    
}
