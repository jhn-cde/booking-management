const booking = require('../models/Booking');
const BookingService = require('../services/bookingService');
const Controller = require('./controller');

const bookingService = new BookingService(booking)

class BookingController extends Controller{
  constructor(service){
    super(service)
  }

  async getAllGroupByDate( req, res, next ) {
    try {
      const response = await this.service.getAllGroupByDate( req.query );

      return res.send(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports =  new BookingController(bookingService)