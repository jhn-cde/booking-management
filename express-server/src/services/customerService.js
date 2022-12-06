const Service = require('./service.js');

class CustomerService extends Service{
  constructor(model){
    super(model);
  }
}

module.exports = CustomerService