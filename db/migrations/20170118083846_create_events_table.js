exports.up = function (knex, Promise) {
    return knex.schema.createTable('events', function (table) {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.timestamp('start_date').defaultTo(knex.fn.now());
        table.timestamp('end_date').defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.integer('performer_id')
            .references('id')
            .inTable('performers');
        table.string('location_city').notNullable();
        table.string('location_state').notNullable(); // integer
    });
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('events');
};
