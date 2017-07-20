var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

// get all admin
router.get('/all', function (req, res) {
    knex('admin')
      .select()
      .then(admin => res.send(admin));
});
// get single admin
router.get('/:id', function (req, res) {
    knex('admin')
      .select()
      .where('id', req.params.id)
      .then(admin => res.send(admin));
});
// create single admin
router.get('/add', function (req, res) {
    knex('admin')
      .insert(req.body)
      .then(() => {
        knex('admin').select().then(admin => res.send(admin));
      });
});
// edit/update single admin
router.patch('/:id', function (req, res) {
    knex('admin')
      .update(req.body)
      .where('id', req.params.id)
      .then(() => {
        knex('admin').select().then(admin => res.send(admin));
      });
});
// archive single admin
router.delete('/:id', function (req, res) {
    knex('admin')
      .del()
      .where('id', req.params.id)
      .then(() => {
        knex('admin').select().then(admin => res.send(admin));
      });
});
module.exports = router;
