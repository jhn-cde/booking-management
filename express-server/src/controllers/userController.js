const user = require('../models/User');
const UserService = require('../services/userService');
const Controller = require('./controller');

const userService = new UserService(user)

class UserController extends Controller{
  constructor(service){
    super(service)
  }
}

module.exports =  new UserController(userService)