exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('invitees')
    .then(function () {
      // Inserts seed entries
      return knex('invitees').insert([
        {userId: 1, apptId: 1},
      ]);
    });
};