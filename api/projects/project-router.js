const express = require('express');

const router = express.Router();

const Projects = require('../../data/helpers/project-model');
const Tasks = require('../../data/helpers/task-model');

// GET all projects
router.get('/', (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting projects' });
    });
});

// GET project by id
router.get('/:id', (req, res) => {
  Projects.findProjectId(req.params.id)
    .then(project => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ error_message: 'NO project found with that id' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when finding by id' });
    });
});

// POST new project
router.post('/', (req, res) => {
  Projects.addProject(req.body)
    .then(newProject => res.status(201).json(newProject))
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when adding project' });
    });
});

//POST new task for a project
router.post('/:id/tasks', (req, res) => {
  Tasks.addTask({ project_id: req.params.id, ...req.body })
    .then(newTask => res.status(201).json(newTask))
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error_message: `Something happened when adding an task for project: ${req.project.id}.`
      });
    });
});

module.exports = router;
