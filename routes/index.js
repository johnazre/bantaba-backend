var users = require('./users.routes');
var events = require('./events.routes');
var performers = require('./performers.routes');
var admin = require('./admin.routes');
module.exports = {
    users: users,
    events: events,
    performers: performers,
    admin: admin
};
