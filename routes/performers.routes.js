var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// get all performers
router.get('/all', function (req, res) {
    knex('performers')
      .select()
      .then(performers => res.send(performers));
});
// get single performer
router.get('/:id', function (req, res) {
    knex('performers')
      .select()
      .where('id', req.params.id)
      .then(performers => res.send(performers));
});
// create single performer
router.get('/add', function (req, res) {
    knex('performers')
      .insert(req.body)
      .then(() => {
        knex('performers').select().then(performers => res.send(performers));
      });
});
// edit/update single performer
router.patch('/:id', function (req, res) {
    knex('performers')
      .update(req.body)
      .where('id', req.params.id)
      .then(() => {
        knex('performers').select().then(performers => res.send(performers));
      });
});
// delete single performer
router.delete('/:id', function (req, res) {
    knex('performers')
      .del()
      .where('id', req.params.id)
      .then(() => {
        knex('performers').select().then(performers => res.send(performers));
      });
});

module.exports = router;
