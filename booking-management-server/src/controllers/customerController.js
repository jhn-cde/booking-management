const Controller = require('./controller');
const customer = require('../models/Customer.js');
const CustomerService = require('../services/customerService');
const customerService = new CustomerService(customer)

class CustomerController extends Controller{
  constructor(service){
    super(service)
  }
}
const getAll = async (req, res, next) => {
  try {
    const response = await customerService.getAll(req.query);
    return res.send({ status: "OK", data: response });
  }
  catch (e) {
    next(e);
  }
}

module.exports =  new CustomerController(customerService)