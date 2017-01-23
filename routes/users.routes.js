var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var validator = require('validator');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// get all users
router.get('/all', function (req, res) {
    knex.raw('select * from "users"')
        .then(function (users) {
        res.send(users);
    });
});
// get single users
router.get('/:id', function (req, res) {
    knex.raw('select * from "users" where id = ?', req.params.id)
        .then(function (users) {
        res.send(users);
    });
});
// create single users
router.post('/add', function (req, res) {
    if (validator.isAlphanumeric(req.body.name) &&
        validator.isEmail(req.body.email) &&
        validator.isAlphanumeric(req.body.password)) {
        knex.raw('insert into "users"(name, email, password) values (?, ?, ?)', [req.body.name, req.body.email, req.body.password])
            .then(function (users) {
            res.send(users);
        });
    }
    else {
        res.status(400).send('noooope');
    }
});
// edit/update single users
router.put('/:id', function (req, res) {
    knex.raw('update "users" set', req.params.id)
        .then(function (users) {
        res.send(users);
    });
});
// archive single users
router.put('/:id', function (req, res) {
    knex.raw('select * from "users" where id = ?', req.params.id)
        .then(function (users) {
        res.send(users);
    });
});
module.exports = router;
