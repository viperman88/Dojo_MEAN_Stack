const mongoose = require('mongoose');
const User = require("../models/quotes.js");
const moment = require("moment");

module.exports =  {
    create: (req, res) => {
        var user = User.create(req.body)
            .then(user => {
                console.log("Created user", user);
                res.redirect("/");
            })
            .catch(err => {
                // handle errors
                res.render("index", { error: err })
            });
    },
    index: (req, res) => {
        User.find().sort({ createdAt: -1 })
            .then(quotes => {
                res.render("quotes", { quotes, moment: moment });
            })
            .catch(console.log);
        }
}
