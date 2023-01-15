const Service = require('./service.js');

class BookingService extends Service{
  constructor(model){
    super(model);
  }

  async getAllGroupByDate( query ){
    try {
      let allCustomers = await this.model
      .aggregate([
        {
          $group: {
            _id: { 
              year: { $year: "$startdate" }, 
              month: { $month: "$startdate" } 
            },
            bookings: { 
              $push: {
                _id: "$_id",
                startdate: "$startdate",
                price: "$price",
                ntravelers: "$ntravelers",
                contactId: "$contactId",
                state: "$state",
                tours: "$tours"
              } 
            }
          }
        },
        { $sort : { _id : 1 } }
      ])
      
      return allCustomers;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookingService