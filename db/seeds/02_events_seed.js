exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('events').del()
        .then(function () {
        return Promise.all([
            // Inserts seed entries
            knex('events').insert({
                name: 'The first event of the century',
                performer_id: 2,
                location_city: 'Tucson',
                location_state: 'AZ',
                description: 'This is a description of first event. Epicness.'
            }),
            knex('events').insert({
                name: "The second event you can't miss",
                performer_id: 1,
                location_city: 'Tucson',
                location_state: 'AZ',
                description: 'This is a description of second event.'
            }),
            knex('events').insert({
                name: 'The third event has everyone talking',
                performer_id: 3,
                location_city: 'Tucson',
                location_state: 'AZ',
                description: 'This is a description of the third event.'
            })
        ]);
    });
};
