exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {userID: 1, apptID: 1, comment: "Can't wait to meet you!"},
        {userID: 2, apptID: 5, comment: "Can I come in earlier?"},
      ]);
    });
};