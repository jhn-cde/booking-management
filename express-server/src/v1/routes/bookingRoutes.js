const express = require('express');
const bookingController = require('../../controllers/bookingController');
const router = express.Router();

router
  .get('/', (req, res, next) => bookingController.getAll(req, res, next))
  .get('/groupdate', (req, res, next) => bookingController.getAllGroupByDate(req, res, next))
  .get('/:id', (req, res, next) => bookingController.get(req, res, next))
  .post('/', (req, res, next) => bookingController.insert(req, res, next))
  .post('/:id', (req, res, next) => bookingController.update(req, res, next))
  .delete('/:id', (req, res, next) => bookingController.delete(req, res, next))

module.exports = router;
