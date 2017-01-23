exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('events').del()
        .then(function () {
        return Promise.all([
            // Inserts seed entries
            knex('events').insert({
                name: 'name1',
                performer_id: 2,
                location_city: 'Tucson',
                location_state: 'AZ'
            }),
            knex('events').insert({
                name: 'name2',
                performer_id: 1,
                location_city: 'Tucson',
                location_state: 'AZ'
            }),
            knex('events').insert({
                name: 'name3',
                performer_id: 3,
                location_city: 'Tucson',
                location_state: 'AZ'
            })
        ]);
    });
};
