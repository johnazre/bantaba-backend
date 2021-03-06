exports.up = function (knex, Promise) {
    return knex.schema.createTable('admin', function (table) {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('name').notNullable();
        table.string('email').notNullable().unique();
        table.string('password').notNullable();
    });
};
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('admin');
};
