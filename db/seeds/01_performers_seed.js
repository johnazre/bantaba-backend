exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('performers').del()
        .then(function () {
        return Promise.all([
            // Inserts seed entries
            knex('performers').insert({
                first_name: 'first_name1',
                last_name: 'last_name1',
                email: 'email1',
                stage_name: 'The First One',
                hometown: 'Tucson, AZ',
                overview: 'This is the overview for The First One'
            }),
            knex('performers').insert({
                first_name: 'first_name2',
                last_name: 'last_name2',
                email: 'email2',
                stage_name: 'The Second One',
                hometown: 'Denver, CO',
                overview: 'This is the overview for The Second One'
            }),
            knex('performers').insert({
                first_name: 'first_name3',
                last_name: 'last_name3',
                email: 'email3',
                stage_name: 'The Third One',
                hometown: 'Atlanta, GA',
                overview: 'This is the overview for The Third One'
            })
        ]);
    });
};
