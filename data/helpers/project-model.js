const db = require('../dbConfig');

module.exports = {
  findProjects,
  findProjectId,
  addProject
};

function findProjects() {
  return db('projects');
}

function findProjectId(id) {
  return db('projects')
    .where({ id })
    .then(project => project[0]);
}

function addProject(data) {
  return db('projects')
    .insert(data)
    .then(id => findProjectId(id[0]));
}
