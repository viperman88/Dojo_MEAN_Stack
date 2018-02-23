const mongoose = require('mongoose'),
    path = require('path'),
    fs = require('fs');
    
// create a variable that points to the path where all of the models live
const modelsPath = path.join(__dirname, '../models');

// connect to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('mongodb connected'));

// utilize global Promise to replace mongoose Promise
mongoose.Promise = global.Promise;

// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(modelsPath).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {
		// require the file (this runs the model file which registers the schema)
		require(modelsPath + '/' + file);
	}
});
