const express = require('express');

const router = express.Router();

const Projects = require('../../data/helpers/project-model');
const Resources = require('../../data/helpers/resource-model');

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
    .then(newProject => res.json(newProject))
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when adding project' });
    });
});

module.exports = router;
