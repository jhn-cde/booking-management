const booking = require('../models/Booking');
const BookingService = require('../services/bookingService');
const Controller = require('./controller');

const bookingService = new BookingService(booking)

class BookingController extends Controller{
  constructor(service){
    super(service)
  }
}

module.exports =  new BookingController(bookingService)