const db = require('../../database/db-config');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('appointments')
};

function findById(id) {
  return db('appointments')
    .where({ id })
    .first()
};

function add(obj) {
  return db('appointments')
    .insert(obj, 'id')
    .then(idArr => findById(idArr[0]))
};

function update(id, changes) {
  return db('appointments')
    .where({ id })
    .update(changes, 'id')
    .then(count => findById(id))
};

function remove(id) {
  return findById(id)
    .then(res => {
      return db('appointments')
        .where({ id })
        .del()
        .then(() => res)
    })
};