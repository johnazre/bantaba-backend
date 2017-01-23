var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var populate = require('../lib/populate');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// get all events
router.get('/all', function (req, res) {
    // knex.raw('select * from "events"')
    //     .then(function(events) {
    //       // res.send(events.rows)
    //       populate(events.rows);
    //       res.send('blah')
    //     })
    // populate('events', 'performers', 'id').then(function(response) {
    //   console.log('response: ', response)
    //   res.send(response);
    // });
    Promise.all([
        knex.raw('select * from events'),
        knex.raw('select * from performers')
    ]).then(function (result) {
        var populatedArr = populate(result, 'events', 'performer_id', 'performers', 'id');
        res.send(populatedArr);
    });
});
// get single event
router.get('/:id', function (req, res) {
    knex.raw('select * from "events" where id = ?', req.params.id)
        .then(function (event) {
        res.send(event);
    });
});
// create single event
router.get('/add', function (req, res) {
    knex.raw('select * from "events" where id = ?', req.params.id)
        .then(function (event) {
        res.send(event);
    });
});
// edit/update single event
router.put('/:id', function (req, res) {
    knex.raw('select * from "events" where id = ?', req.params.id)
        .then(function (event) {
        res.send(event);
    });
});
// archive single event
router.put('/:id', function (req, res) {
    knex.raw('select * from "events" where id = ?', req.params.id)
        .then(function (event) {
        res.send(event);
    });
});
module.exports = router;
