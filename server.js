var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes = require('./routes');
var logger = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(logger('dev'));

app.use('/users', routes.users);
app.use('/events', routes.events);
app.use('/performers', routes.performers);
app.use('/admin', routes.admin);

app.listen(3000, function () {
    console.log('heard on 3000');
});
