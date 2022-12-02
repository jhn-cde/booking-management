const tour = require('../models/Tour');
const TourService = require('../services/tourService');
const Controller = require('./controller');

const tourService = new TourService(tour)

class TourController extends Controller{
  constructor(service){
    super(service)
  }
}

module.exports =  new TourController(tourService)