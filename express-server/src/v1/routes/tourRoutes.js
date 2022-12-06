const express = require('express');
const tourController = require('../../controllers/tourController');
const router = express.Router();

router
  .get('/', (req, res, next) => tourController.getAll(req, res, next))
  .get('/:id', (req, res, next) => tourController.get(req, res, next))
  .post('/', (req, res, next) => tourController.insert(req, res, next))
  .post('/:id', (req, res, next) => tourController.update(req, res, next))
  .delete('/:id', (req, res, next) => tourController.delete(req, res, next))

module.exports = router;
