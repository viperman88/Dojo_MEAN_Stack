const controller = require('../controllers/quotes.js'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');
    moment = require('moment');

module.exports = app => {
    app.get('/', (req, res) => res.render('index'));
    app.post('/quotes', controller.create);
    app.get('/quotes', controller.index);
}
