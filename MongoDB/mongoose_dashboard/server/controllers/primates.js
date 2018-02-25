const mongoose = require('mongoose'),
    Primate = mongoose.model('Primate');

module.exports = {
    index: (req, res) => {
        Primate.find({})
            .then(primates => { // On success, then 'promise'
                console.log(primates)
                res.render('index', { primates });
            })
            .catch(err => {
                console.log('error caught', err);
            });
    },
    create: (req, res) => {
        Primate.create(req.body)
            .then(primate => {
                console.log('created primate ', res);
                res.redirect('/primates');
            })
            .catch(err => {
                console.log('error creating primates', err);
            })
    },
    find: (req, res) => {
        Primate.find({ _id: req.params.id })
            .then(response => {
                res.render('show', { primate: response[0] });
            })
            .catch(err => {
                console.log(err);
            });
    },
    edit: (req, res) => {
        Primate.find({ _id: req.params.id })
            .then(primate => {
                console.log('editing: ', primate[0])
                res.render('edit', { primate: primate[0] });
            })
            .catch(err => {
                console.log('error editing primate', err);
            });
    },
    update: (req, res) => {
        Primate.update({ _id: req.params.id }, req.body)
            .then(primate => {
                console.log('req:', req, 'res', res);
                res.redirect('/primates');
            })
            .catch(err => {
                console.log('error getting primate id', err);
            })
    },
    remove: (req, res) => {
        Primate.remove({ _id: req.params.id })
            .then(primate => {
                res.redirect('/primates');
            })
            .catch(err => {
                console.log(err);
            })
    }
}
