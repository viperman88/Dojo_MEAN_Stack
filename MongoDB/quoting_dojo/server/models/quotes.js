const mongoose = require('../config/mongoose.js');
const { Schema } = mongoose;

// Create a Schema for Users
let UserSchema = new mongoose.Schema({
    name: String,
    quote: String,
    date: { type: Date, default: Date.now }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
