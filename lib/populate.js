var knex = require('../db/knex');
module.exports = {
  getAll,
  getOne,
  mapAllToObj,
  mapSingleToObj
};

function mapSingleToObj(data, fr_key, alias) {
    var mainTable = data[0].rows;
    var tableToBePopulated = data[1].rows;

    var result = mainTable.map(function (item, index) {
        console.log('before', item);
        var desiredPopulatedValueId = item[fr_key];
        var desiredPopulatedValue = tableToBePopulated.filter(function(table) {
          if(table.id === desiredPopulatedValueId) {
            return table;
          }
        });
        item[alias] = desiredPopulatedValue;
        console.log('after', item);
        return item;
    });
    // console.log('result', result);
    return result;
};

function mapAllToObj(data, fr_key, alias) {
    var mainTable = data[0].rows;
    var tableToBePopulated = data[1].rows;

    var result = mainTable.map(function (item, index) {
        console.log('before', item);
        //find table with performer_id
        var desiredPopulatedValueId = item[fr_key];
        var desiredPopulatedValue = tableToBePopulated.filter(function(table) {
          if(table.id === desiredPopulatedValueId) {
            return table;
          }
        });
        item[alias] = desiredPopulatedValue;
        console.log('after', item);
        return item;
    });
    // console.log('result', result);
    return result;
};


function getAll(tableOne, tableTwo) {
  return Promise.all([
      knex.raw('select * from ' + tableOne),
      knex.raw('select * from ' + tableTwo)
  ])
}

function getOne(tableOne, tableTwo) {
  return Promise.all([
      knex.raw('select * from ' + tableOne.table + ' where id = ?', tableOne.id),
      knex.raw('select * from ' + tableTwo)
  ])
}
