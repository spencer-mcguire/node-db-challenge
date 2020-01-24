const db = require('../dbConfig');
const mappers = require('./mappers');

module.exports = {
  find,
  findById,
  addTask
};

// FIND tasks || Pass an id to find tasks for a project
function find() {
  return db('tasks as t')
    .select(
      't.id',
      't.description',
      't.notes',
      't.completed',
      't.project_id',
      'p.name as project_name'
    )
    .join('projects as p', 't.project_id', 'p.id')
    .then(tasks => {
      return tasks.map(task => mappers.taskToBody(task));
    });
}
function findById(ids) {
  const id = ids[0];
  return db('tasks')
    .where({ id })
    .then(tasks => {
      return tasks.map(task => mappers.taskToBody(task));
    });
}

function addTask(data) {
  return db('tasks')
    .insert(data)
    .then(id => findById(id));
}
