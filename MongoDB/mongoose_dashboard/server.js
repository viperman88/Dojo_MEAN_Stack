// Require modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/primates_db');
mongoose.connection.on('connected', () => console.log('mongodb connected'));

const primateSchema = new mongoose.Schema({
    name: String,
    color: String,
    weight: Number,
    origin: String
})
const Primate = mongoose.model('Primate', primateSchema)

app.get('/primates', (req, res) => {
    Primate.find({})
        .then(primates => {
            console.log(primates)
            res.render('index', { primates: primates });
        })
        .catch(err => {
            console.log('error caught', err);
        });
});

app.get('/primates/new', (req, res) => {
    res.render('new');
});

app.post('/primates', (req, res) => {
    console.log('request body', req.body)
    Primate.create(req.body)
        .then(primate => {
            console.log('created primate ', res);
            res.redirect('/primates');
        })
        .catch(err => {
            console.log('error creating primates', err);
        })
});

app.get('/primates/:id', (req, res) => {
    Primate.find({ _id: req.params.id })
        .then(response => {
            res.render('show', { primate: response[0] });
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/primates/:id/edit/', (req, res) => {
    Primate.find({ _id: req.params.id })
        .then(primate => {
            console.log('editing: ', primate[0])
            res.render('edit', { primate: primate[0] });
        })
        .catch(err => {
            console.log('error editing primate', err);
        });
});

app.post('/primates/:id', (req, res) => {
    console.log(`Update primate id: ${req.params.id} and request body: ${req.body}`)
    Primate.update({ _id: req.params.id }, req.body)
        .then(primate => {
            console.log('req:', req, 'res', res);
            res.redirect('/primates');
        })
        .catch(err => {
            console.log('error getting primate id', err);
        })
});

app.post('/primates/:id/delete', function(req, res){
    Primate.remove({ _id: req.params.id })
        .then(primate => {
            res.redirect('/primates');
        })
        .catch(err => {
            console.log(err);
        })
});

app.listen(port, () => console.log(`express listening on port ${port}`));
