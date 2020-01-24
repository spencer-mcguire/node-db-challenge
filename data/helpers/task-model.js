const db = require('../dbConfig');
const mappers = require('./mappers');

module.exports = {
  find
};

// FIND tasks || Pass an id to find tasks for a project
function find() {
  return db('tasks');
}
