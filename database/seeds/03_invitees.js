exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('invitees')
    .then(function () {
      // Inserts seed entries
      return knex('invitees').insert([
        {userID: 1, apptID: 1},
      ]);
    });
};