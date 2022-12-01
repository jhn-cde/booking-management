const Controller = require('./controller');
const customer = require('../models/Customer.js');
const CustomerService = require('../services/customerService');
const customerService = new CustomerService(customer)

class CustomerController extends Controller{
  constructor(service){
    super(service)
  }
}

module.exports =  new CustomerController(customerService)