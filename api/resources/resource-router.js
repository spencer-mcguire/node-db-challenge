const express = require('express');

const router = express.Router();
const Resource = require('../../data/helpers/resource-model');

router.get('/', (req, res) => {
  Resource.find()
    .then(resources => {
      if (resources) {
        res.json(resources);
      } else {
        res.status(404).json({ error_message: 'NO resources found' });
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting resources' });
    });
});

router.post('/', (req, res) => {
  Resource.add(req.body)
    .then(resource => res.json(resource))
    .catch(err => {
      res
        .status(500)
        .json({ message: 'Something happened when getting resources' });
    });
});

module.exports = router;
