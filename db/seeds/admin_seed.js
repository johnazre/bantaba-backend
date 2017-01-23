exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('admin').del()
        .then(function () {
        return Promise.all([
            // Inserts seed entries
            knex('admin').insert({
                name: 'name1',
                email: 'email1',
                password: 'password1'
            }),
            knex('admin').insert({
                name: 'name2',
                email: 'email2',
                password: 'password2'
            }),
            knex('admin').insert({
                name: 'name3',
                email: 'email3',
                password: 'password3'
            })
        ]);
    });
};
