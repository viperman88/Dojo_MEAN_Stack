// Require modules
const express = require('express');
const body-parser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 8000;

// Create Express app
const app = express();

// Setting our Static and Views Folder Directory
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine to EJS
app.set('view engine', 'ejs');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res){
    res.render('index')
});

app.listen(port, () => console.log(`express listening on port ${ port }`));
