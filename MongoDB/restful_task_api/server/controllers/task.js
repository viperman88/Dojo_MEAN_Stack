const mongoose = require('mongoose'),
    Task = require('../models/task.js');

module.exports = {
    findAll: (req, res) => {
        Task.find({})
            .then(tasks => {
                console.log('find all tasks', tasks);
                res.json( tasks );
            })
            .catch(console.log);
    },
    findOne: (req, res) => {
        console.log(req.params.id);
        Task.findById(req.params.id)
            .then(task => {
                console.log('find a task', task);
                res.json(task);
            })
            .catch(console.log);
    },
    create: (req, res) => {
        console.log(req.body);
        Task.create(req.body)
            .then(task => {
                console.log('created task', task);
                res.redirect('/');
            })
            .catch(console.log);
    },
    update: (req, res) => {
        console.log(req.body);
        Task.findByIdAndUpdate(req.params.id, req.body)
            .then(task => {
                console.log('updated task', task);
                res.json(task);
            })
            .catch(console.log)
    },
    remove: (req, res) => {
        console.log(req.params.id);
        Task.findByIdAndRemove(req.params.id)
        .then(task => {
            res.json(task);
        })
        .catch(console.log);
    }
}
