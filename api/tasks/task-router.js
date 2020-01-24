const express = require('express');

const router = express.Router();
const Tasks = require('../../data/helpers/task-model');

router.get('/', (req, res) => {
  Tasks.find()
    .then(tasks => {
      if (tasks) {
        res.json(tasks);
      } else {
        res.status(404).json({ error_message: 'NO tasks found' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting tasks' });
    });
});

module.exports = router;
