const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
// Create a Schema for Users
let UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
let User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'
mongoose.Promise = global.Promise;

// Create an Express App
const app = express();
// Require body-parser (to receive post data from clients)
const bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({
    extended: true
}));
// Require path
const path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // Using the User Schema...
    // ...retrieve all records matching {} from database
    // Include them for use on page to be be rendered.
    User.find({}, function(err, users) {
        console.log("finding...");
        if (err) {
            console.error('Error in loading users');

        } else {
            console.log("no errors!");
            res.render('index', {
                users: users
            })
        }
    })
})
// Add User Request
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // create a new User with the name and age corresponding to those from req.body
    let user = new User({
        name: req.body.name,
        age: req.body.age
    });
    // Try to save that new user to the database (this is the method that actually
    //inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
        // if there is an error console.log that something went wrong!
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/');
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
