const controller = require('../controllers/primates.js'),
    mongoose = require('mongoose'),
    Primate = mongoose.model('Primate');

module.exports = app => {
    app.get('/primates', controller.index);
    app.get('/primates/new', (req, res) => res.render('new'));
    app.post('/primates', controller.create);
    app.get('/primates/:id', controller.find);
    app.get('/primates/:id/edit/', controller.edit);
    app.post('/primates/:id', controller.update);
    app.post('/primates/:id/delete', controller.remove);
}
