exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments')
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {userId: 1, apptId: 1, comment: "Can't wait to meet you!"},
        {userId: 2, apptId: 5, comment: "Can I come in earlier?"},
      ]);
    });
};