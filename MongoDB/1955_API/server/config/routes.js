const humanoidController = require("../controllers/humanoid.js"),
    mongoose = require("mongoose"),
    Humanoid = mongoose.model("Humanoid");

module.exports = app => {
    app.get("/", humanoidController.findAll);
    app.get("/new/:name", humanoidController.create);
    app.get("/:name", humanoidController.findOne);
    app.get("/remove/:name", humanoidController.remove);
}
