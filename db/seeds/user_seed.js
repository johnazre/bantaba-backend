exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
        return Promise.all([
            // Inserts seed entries
            knex('users').insert({
                name: 'name1',
                email: 'email1',
                password: 'password1'
            }),
            knex('users').insert({
                name: 'name2',
                email: 'email2',
                password: 'password2'
            }),
            knex('users').insert({
                name: 'name3',
                email: 'email3',
                password: 'password3'
            })
        ]);
    });
};
