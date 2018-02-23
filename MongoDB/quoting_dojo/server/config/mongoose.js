const mongoose = require('mongoose');

// utilize global Promise to replace mongoose Promise
mongoose.Promise = global.Promise;

// connect to the mongodb database using mongoose
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.connection.on('connected', () => console.log('mongodb connected')),

module.exports = mongoose;
