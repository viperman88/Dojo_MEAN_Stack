const mongoose = require("../config/mongoose.js");
const { Schema } = mongoose;
const humanoidSchema = new Schema({
    name: {
        type: String,
    },
});
const Humanoid = mongoose.model("Humanoid", humanoidSchema);

module.exports = Humanoid;
