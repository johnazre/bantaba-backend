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
    knex('users').select().then(users => res.send(users));
});
// get single users
router.get('/:id', function (req, res) {
    knex('users').select().where('id', req.params.id).then(user => res.send(user));
});
// create single users
router.post('/add', function (req, res) {
    if (validator.isAlphanumeric(req.body.name) &&
        validator.isEmail(req.body.email) &&
        validator.isAlphanumeric(req.body.password)) {
        knex('users')
          .insert(req.body)
          .then(() => {
            knex('users').select().then(users => res.send(users));
          });
    }
    else {
        res.status(400).send('noooope');
    }
});
// edit/update single users
router.patch('/:id', function (req, res) {
    knex('users')
      .update(req.body)
      .where('id', req.params.id)
      .then(() => {
        knex('users').select().then(users => res.send(users));
      });
});
// archive single users
router.delete('/:id', function (req, res) {
    knex('users')
      .del()
      .where('id', req.params.id)
      .then(() => {
        knex('users').select().then(users => res.send(users));
      });
});
module.exports = router;
