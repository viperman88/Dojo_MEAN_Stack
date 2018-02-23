const mongoose = require("../config/mongoose.js");
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Must contain title']
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

// const Task 'GETS' schema that was 'SET' in our Models as 'Task'
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
