var knex = require('../db/knex');
module.exports = function (data, fr_key) {
    var events = data[0].rows;
    var performers = data[1].rows;
    var result = events.map(function (item, index) {
        item[fr_key] = performers[index];
        return item;
    });
    console.log('result', result);
    return result;
};
