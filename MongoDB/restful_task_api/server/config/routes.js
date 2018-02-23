const controller = require('../controllers/task.js'),
    mongoose = require('mongoose'),
    Task = mongoose.model('Task');

// export routes and set them to the 'app' callback
module.exports = app => {
    app.get("/", controller.findAll);
    app.get("/:id", controller.findOne);
    app.post("/", controller.create);
    // similar to POST but only updates the resource if it already exists, or creates it otherwise
    app.put("/:id", controller.update);
    // deletes resource
    app.delete("/:id", controller.remove);
}
