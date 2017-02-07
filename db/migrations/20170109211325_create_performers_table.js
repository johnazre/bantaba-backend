exports.up = function (knex, Promise) {
    return knex.schema.createTable('performers', function (table) {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        table.string('email').notNullable().unique();
        table.string('stage_name').defaultTo('N/A');
        table.string('hometown').defaultTo('N/A');
        table.text('overview').defaultTo('N/A');
    });
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('performers');
};
