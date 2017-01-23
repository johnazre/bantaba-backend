var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// get all admin
router.get('/all', function (req, res) {
    knex.raw('select * from "admin"')
        .then(function (admin) {
        res.send(admin);
    });
});
// get single admin
router.get('/:id', function (req, res) {
    knex.raw('select * from "admin" where id = ?', req.params.id)
        .then(function (admin) {
        res.send(admin);
    });
});
// create single admin
router.get('/add', function (req, res) {
    knex.raw('select * from "admin" where id = ?', req.params.id)
        .then(function (admin) {
        res.send(admin);
    });
});
// edit/update single admin
router.put('/:id', function (req, res) {
    knex.raw('select * from "admin" where id = ?', req.params.id)
        .then(function (admin) {
        res.send(admin);
    });
});
// archive single admin
router.put('/:id', function (req, res) {
    knex.raw('select * from "admin" where id = ?', req.params.id)
        .then(function (admin) {
        res.send(admin);
    });
});
module.exports = router;
