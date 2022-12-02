const Service = require('./service.js');

class UserService extends Service{
  constructor(model){
    super(model);
  }
}

module.exports = UserService