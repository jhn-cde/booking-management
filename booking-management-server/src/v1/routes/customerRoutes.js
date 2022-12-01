var express = require('express');
var router = express.Router();
const CustomerController = require("../../controllers/customerController");

router
  .get('/', CustomerController.getAll)

/* GET ALL CUSTOMERS 
router.get('/', function(req, res, next) {
  Customer.find(function (err, customers) {
    if (err) return next(err);
    res.json(customers);
  });
});

/* GET SINGLE CUSTOMER BY ID 
router.get('/:id', function(req, res, next) {
  Customer.findById(req.params.id, function (err, customer) {
    if (err) return next(err);
    res.json(customer);
  });
});

/* SAVE CUSTOMER 
router.post('/', function(req, res, next) {
  Customer.create(req.body, function (err, customer) {
    if (err) return next(err);
    res.json(customer);
  });
});

/* UPDATE CUSTOMER 
router.put('/:id', function(req, res, next) {
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err, customer) {
    if (err) return next(err);
    res.json(customer);
  });
});

/* DELETE CUSTOMER 
router.delete('/:id', function(req, res, next) {
  Customer.findByIdAndRemove(req.params.id, req.body, function (err, customer) {
    if (err) return next(err);
    res.json(customer);
  });
});
*/

module.exports = router;