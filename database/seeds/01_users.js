const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admin', password: `${bcrypt.hashSync('password1234', 12)}`},
        {username: 'cheese', password: `${bcrypt.hashSync('allgouda', 12)}`},
      ]);
    });
};