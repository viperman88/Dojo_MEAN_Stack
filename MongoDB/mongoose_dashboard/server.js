// Require modules
const express = require('express');
const bodyParser = require('body-parser'); // Require body-parser (to receive post data from clients)
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express(); // Create Express app

app.use(bodyParser.urlencoded({ extended: true })); // Integrate body-parser with our App
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/primates_db'); // This is how we connect to the mongodb database using mongoose
mongoose.connection.on('connected', () => console.log('mongodb connected')); // Listen for connection and log connected

const primateSchema = new mongoose.Schema({ // Create a Schema (Bluprint) for model
    name: String,
    color: String,
    weight: Number,
    origin: String
})
// Primate retrieves schema set in models = Setting schema in models as Primate
// mongoose WILL create the appropriate collection in database 
// with the appropriate naming (plural for collection names)!
const Primate = mongoose.model('Primate', primateSchema)

// Routes
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

// Setting our Server to Listen on Port: 8000
app.listen(port, () => console.log(`express listening on port ${port}`));
