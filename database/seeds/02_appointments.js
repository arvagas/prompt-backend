exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments')
    .then(function () {
      // Inserts seed entries
      return knex('appointments').insert([
        {title: "Meeting with John", month: 9, date: 13, year: 2021, timeStart: "10:45am", timeEnd: "11:45am", userID: 1},
        {title: "Meeting with John", month: 9, date: 20, year: 2021, timeStart: "10:45am", timeEnd: "11:45am", userID: 1},
        {title: "Meeting with John", month: 9, date: 27, year: 2021, timeStart: "12:45pm", timeEnd: "1:45pm", userID: 1},
        {title: "Celebration", month: 9, date: 24, year: 2021, timeStart: "4:45pm", timeEnd: "5:45pm", userID: 1},
        {title: "Tour the place", month: 9, date: 16, year: 2021, timeStart: "1:00pm", timeEnd: "2:00pm", userID: 1},
      ]);
    });
};