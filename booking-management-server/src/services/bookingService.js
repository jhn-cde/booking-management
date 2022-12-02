const Service = require('./service.js');

class BookingService extends Service{
  constructor(model){
    super(model);
  }
}

module.exports = BookingService