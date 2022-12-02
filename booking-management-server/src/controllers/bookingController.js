const customer = require('../models/Customer');
const BookingService = require('../services/bookingService');
const Controller = require('./controller');

const bookingService = new BookingService(customer)

class BookingController extends Controller{
  constructor(service){
    super(service)
  }
}

module.exports =  new BookingController(bookingService)