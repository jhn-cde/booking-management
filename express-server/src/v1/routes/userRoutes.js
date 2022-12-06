const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

router
  .get('/', (req, res, next) => userController.getAll(req, res, next))
  .get('/:id', (req, res, next) => userController.get(req, res, next))
  .post('/', (req, res, next) => userController.insert(req, res, next))
  .post('/:id', (req, res, next) => userController.update(req, res, next))
  .delete('/:id', (req, res, next) => userController.delete(req, res, next))

module.exports = router;
