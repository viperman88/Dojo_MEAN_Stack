const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs'),
    reg = new RegExp('\\.js$', 'i'); // create RegExp to read .js files and be case insensitive 'i'

// create a variable that points to the path where all of the models live
const modelsPath = path.join(__dirname, '../models');

// connect to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/login_register');
// Listen for connection and log connected
mongoose.connection.on('connected', () => console.log('mongodb connected'));

// utilize global Promise to replace mongoose Promise
mongoose.Promise = global.Promise;

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(modelsPath).forEach(file => {
    if(reg.test(file)) {
        require(path.join(modelsPath, file));
    }
});
