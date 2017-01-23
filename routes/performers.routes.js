var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// get all performers
router.get('/all', function (req, res) {
    knex.raw('select * from "performers"')
        .then(function (performers) {
        res.send(performers);
    });
});
// get single performers
router.get('/:id', function (req, res) {
    knex.raw('select * from "performers" where id = ?', req.params.id)
        .then(function (performer) {
        res.send(performer);
    });
});
// create single performer
router.get('/add', function (req, res) {
    knex.raw('select * from "performers" where id = ?', req.params.id)
        .then(function (performer) {
        res.send(performer);
    });
});
// edit/update single performers
router.put('/:id', function (req, res) {
    knex.raw('select * from "performers" where id = ?', req.params.id)
        .then(function (performer) {
        res.send(performer);
    });
});
// archive single performers
router.put('/:id', function (req, res) {
    knex.raw('select * from "performers" where id = ?', req.params.id)
        .then(function (performer) {
        res.send(performer);
    });
});
module.exports = router;
