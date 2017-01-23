var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var knex = require('./db/knex');
var dbConfig = require('./knexfile');
var routes = require('./routes');

app.use(bodyParser.json());
app.use(cors());
app.use('/users', routes.users);
app.use('/events', routes.events);
app.use('/performers', routes.performers);
app.use('/admin', routes.admin);
app.get('/test', function (req, res, next) {
    knex.select('*')
        .from('performers')
        .then(function (rows) {
        res.send(rows);
    });
});
app.listen(3000, function () {
    console.log('heard on 3000');
});
