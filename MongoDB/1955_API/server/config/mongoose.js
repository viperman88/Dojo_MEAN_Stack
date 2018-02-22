const mongoose = require('mongoose');

// utilize global Promise to replace mongoose Promise
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/humanoid_db");
mongoose.connection.on("connected", () => console.log("mongodb connected"));

module.exports = mongoose;
