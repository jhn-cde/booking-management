const express = require('express');
const router = express.Router();
const CustomerController = require("../../controllers/customerController");

router
  .get('/', (req, res, next) => CustomerController.getAll(req, res, next))
  .get('/:id', (req, res, next) => CustomerController.get(req, res, next))
  .post('/', (req, res, next) => CustomerController.insert(req, res, next))
  .post('/:id', (req, res, next) => CustomerController.update(req, res, next))
  .delete('/:id', (req, res, next) => CustomerController.delete(req, res, next))

module.exports = router;
