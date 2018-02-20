const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/humanoid_db");
mongoose.connection.on("connected", () => console.log("mongodb connected"));

module.exports = mongoose;
