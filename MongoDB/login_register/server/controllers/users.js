const mongoose = require('mongoose'),
    bcrypt = require('bcryptjs'),
    session = require('express-session'),
    User = mongoose.model('User');

module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    register: (req, res) => {
        const error = [];
        console.log('req body', req.body);
        if (req.body.password != req.body.confirm_password) {
            error.push('Passwords does not match');
            res.render('index', { error })
        } else if (req.body.password === req.body.confirm_password) {
            User.create(req.body)
                .then(user => {
                    console.log('registered user', user);
                    req.session.user = user;
                    res.render('homepage', { user })
                })
                .catch(err => {
                    for (let key in err.errors) {
                        error.push(err.errors[key].message);
                    }
                    console.log(error);
                    res.render('index', { error })
                });
        }
    },
    login: (req, res) => {
        console.log('req body', req.body);
        User.findOne({email: req.body.email})
            .then(user => {
                console.log(user);
                return bcrypt.compare(req.body.password, user.password)
                    .then(() => {
                        console.log('logged in')
                        req.session.user = user;
                        res.render('homepage', { user })
                    })
            })
            .catch(err => {
                console.log('errored');
                const error = [];
                error.push('Email/Password not valid');
                res.render('index', { error });
            });
    },
}
