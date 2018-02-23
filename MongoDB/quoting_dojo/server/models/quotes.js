const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create a Schema for Users
let UserSchema = new mongoose.Schema({
    name: String,
    quote: String,
    date: { type: Date, default: Date.now }
})

// const User 'GETS' schema that was 'SET' in our Models as 'User'
const User = mongoose.model('User', UserSchema);

// export the UserSchema
module.exports = User;
