const mongoose = require('mongoose');
const { Schema } = mongoose;

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

// export the primateSchema
module.exports = Primate;
