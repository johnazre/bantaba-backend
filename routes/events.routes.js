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
    populate.getAll('events', 'performers').then(function (result) {
        var populatedArr = populate.mapAllToObj(result, 'performer_id', 'performers');
        res.send(populatedArr);
    });
});
// get single event
router.get('/:id', function (req, res) {
  populate.getOne({table: 'events', id: req.params.id}, 'performers').then(function (result) {
      var populatedArr = populate.mapSingleToObj(result, 'performer_id', 'performers');
      res.send(populatedArr);
  });
});
// create single event
router.post('/add', function (req, res) {
    knex.raw('insert into events(name, performer_id, location_city, location_state) values(?, ?, ?, ?)', [req.body.name, req.body.performer_id, req.body.location_city, req.body.location_state])
        .then(function (event) {
        res.send(event);
    });
});
// edit/update single event
router.put('/:id', function (req, res) {
    knex.raw("update events set "+ req.body.field +" = ? where id = ?", [req.body.value, req.params.id])
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
