var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var populate = require('../lib/populate');

// get all events
router.get('/all', function (req, res) {
    populate.getAll('events', 'performers').then(function (result) {
        var populatedArr = populate.mapAllToObj(result, 'performer_id', 'performers');
        res.send(populatedArr);
    });
});
// query events
router.get('/search', function (req, res) {
  if(req.query.location) {
    knex('events')
      .where({location_state: req.query.location})
      .then(function(result) {
        res.send(result);
      });
  } else {
    knex('performers')
      .where('stage_name', 'like', '%'+req.query.performer+'%')
      .then(function(result) {
        res.send(result);
      });
  }

});
// get single event
router.get('/:id', function (req, res) {
  populate.getOne({table: 'events', id: req.params.id}, 'performers').then(function (result) {
      var populatedArr = populate.mapSingleToObj(result, 'performer_id', 'performers');
      res.send(populatedArr);
  });
});

// create single admin
router.get('/add', function (req, res) {
    knex('events')
      .insert(req.body)
      .then(() => {
        knex('events').select().then(events => res.send(events));
      });
});
// edit/update single event
router.patch('/:id', function (req, res) {
    knex('events')
      .update(req.body)
      .where('id', req.params.id)
      .then(() => {
        knex('events').select().then(events => res.send(events));
      });
});
// archive single event
router.delete('/:id', function (req, res) {
    knex('events')
      .del()
      .where('id', req.params.id)
      .then(() => {
        knex('events').select().then(events => res.send(events));
      });
});

module.exports = router;
