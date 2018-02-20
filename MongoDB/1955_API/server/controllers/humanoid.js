const mongoose = require('mongoose'),
    Humanoid = require('../models/humanoid.js');

module.exports = {
    findAll: (req, res) => {
        Humanoid.find({})
            .then(human => {
                console.log('find all humanoids', human);
                res.json( human );
            })
            .catch(console.log);
    },
    create: (req, res) => {
        console.log(req.params.name);
        let name = req.params
        Humanoid.create(name)
            .then(human => {
                console.log('created humanoid', human);
                res.redirect('/');
            })
            .catch(console.log);
    },
    findOne: (req, res) => {
        console.log(req.params.name);
        Humanoid.find( { name: req.params.name } )
            .then(human => {
                console.log('find a humanoid', human);
                res.json(human);
            })
            .catch(console.log);
    },
    remove: (req, res) => {
        console.log(req.params.name);
        Humanoid.remove( { name: req.params.name } )
        .then(human => {
            res.redirect('/');
        })
        .catch(console.log);
    }
}
