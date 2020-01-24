const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger');

const projectRouter = require('../api/projects/project-router');
const resourceRouter = require('../api/resources/resource-router');
const taskRouter = require('../api/tasks/task-router');
const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
  res.json('API IS RUNNING');
});

module.exports = server;
