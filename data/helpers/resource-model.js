const db = require('../dbConfig');

module.exports = {
  find,
  getById,
  add
};

function find() {
  return db('resources');
}

function getById(id) {
  return db('resources')
    .where({ id })
    .then(resource => resource[0]);
}

function add(data) {
  return db('resources')
    .insert(data)
    .then(ids => {
      return getById(ids[0]);
    });
}
