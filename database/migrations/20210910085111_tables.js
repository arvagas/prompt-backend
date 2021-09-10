
exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();
      tbl.text("username", 256)
        .notNullable()
        .unique()
      tbl.string("password", 256)
        .notNullable();
    })

    .createTable("appointments", tbl => {
      tbl.increments();
      tbl.string("title", 256)
        .notNullable();
      tbl.integer("month")
        .notNullable();
      tbl.integer("date")
        .notNullable();
      tbl.integer("year", 4)
        .notNullable();
      tbl.string("timeStart")
        .notNullable();
      tbl.string("timeEnd")
        .notNullable();
      tbl.integer('userID')
        .unsigned()
        .notNullable()
        .references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable("invitees", tbl => {
      tbl.increments();
      tbl.integer('userID')
        .unsigned()
        .notNullable()
        .references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('apptID')
        .unsigned()
        .notNullable()
        .references('id').inTable('appointments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable("comments", tbl => {
      tbl.increments();
      tbl.integer('userID')
        .unsigned()
        .notNullable()
        .references('id').inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('apptID')
        .unsigned()
        .notNullable()
        .references('id').inTable('appointments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.string('comment')
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists("comments")
    .dropTableIfExists("invitees")
    .dropTableIfExists("appointments")
    .dropTableIfExists("users")
};
